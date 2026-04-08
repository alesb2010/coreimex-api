const linesInclude = { include: { Contract: true } };
const invoiceInclude = { Lines: linesInclude, BankAccount: true };

function normalizeLineInput(line) {
  const l = { ...line };
  if (l.bl_date != null && typeof l.bl_date === 'string') {
    l.bl_date = new Date(l.bl_date);
  }
  return l;
}

/**
 * Resolve bank_account_id from the request body.
 * Returns:
 *   { set: null }   — caller explicitly passed null → clear the link
 *   { set: <id> }   — valid DB integer ID → save the link
 *   null            — invalid / unresolvable value (timestamp overflow, not found) → skip field entirely
 */
async function resolveBankAccountId(prisma, raw) {
  if (raw === null || raw === undefined || raw === '' || raw === 'null') return { set: null };
  const parsed = parseInt(raw, 10);
  // Reject timestamp-style IDs that overflow INT4 (Date.now() from old localStorage impl)
  if (!Number.isFinite(parsed) || parsed < 1) return { invalid: raw };
  if (parsed > 2147483647) return { outOfRange: parsed };
  const exists = await prisma.bankAccount.findFirst({ where: { id: parsed, deleted: false }, select: { id: true } });
  if (!exists) return { notFound: parsed };
  return { set: parsed };
}

function pickRawBankAccountId(body) {
  if (!body || typeof body !== 'object') return undefined;
  if (body.bank_account_id !== undefined) return body.bank_account_id;
  if (body.bankAccountId !== undefined) return body.bankAccountId;
  if (body.bank_account !== undefined) return body.bank_account?.id;
  if (body.bankAccount !== undefined) return body.bankAccount?.id;
  return undefined;
}

function applyBankAccountWrite(data, resolved) {
  if (resolved == null) return;
  if (resolved.set == null) {
    data.BankAccount = { disconnect: true };
    return;
  }
  data.BankAccount = { connect: { id: resolved.set } };
}

/** Guarantee a number for comission_total_usd (accepts both spellings), never null/undefined/NaN */
function lineComissionUsd(l) {
  const v = l.comission_total_usd ?? l['commission_total_usd'];
  if (v == null || v === '') return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

async function brokerageInvoicesRoutes(fastify, options) {
  const { prisma } = options;

  // GET all brokerage invoices (master + lines with contract)
  fastify.get("/brokerage-invoices", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.brokerageInvoice.findMany({
      include: invoiceInclude,
    });
  });

  // GET brokerage invoice by ID
  fastify.get("/brokerage-invoices/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const invoice = await prisma.brokerageInvoice.findUnique({
      where: { id: parseInt(id) },
      include: invoiceInclude,
    });
    if (!invoice) {
      reply.code(404).send({ error: "Brokerage invoice not found" });
      return;
    }
    return invoice;
  });

  // POST create brokerage invoice (master + optional lines)
  fastify.post("/brokerage-invoices", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const body = request.body || {};
    const { lines, number, invoice_date, active, status } = body;
    const bank_account_id = pickRawBankAccountId(body);
    const masterData = {};
    if (number !== undefined) masterData.number = number;
    if (invoice_date != null) {
      masterData.invoice_date = typeof invoice_date === 'string' ? new Date(invoice_date) : invoice_date;
    }
    if (active !== undefined) masterData.active = active;
    if (status !== undefined) masterData.status = status;
    if (bank_account_id !== undefined) {
      const resolved = await resolveBankAccountId(prisma, bank_account_id);
      if (resolved?.outOfRange) {
        reply.code(400).send({
          error: `Invalid bank_account_id ${resolved.outOfRange} (out of range)`,
          hint: 'Send the numeric BankAccount.id from GET /api/v1/bank-accounts (autoincrement int), not a timestamp/localStorage id.',
        });
        return;
      }
      if (resolved?.invalid) {
        reply.code(400).send({
          error: `Invalid bank_account_id ${JSON.stringify(resolved.invalid)}`,
          hint: 'Send the numeric BankAccount.id from GET /api/v1/bank-accounts.',
        });
        return;
      }
      if (resolved?.notFound) {
        reply.code(400).send({
          error: `Bank account ${resolved.notFound} not found`,
          hint: 'Create a bank account first (POST /api/v1/bank-accounts) or pick an existing one (GET /api/v1/bank-accounts).',
        });
        return;
      }
      applyBankAccountWrite(masterData, resolved);
    }
    const invoice = await prisma.brokerageInvoice.create({
      data: {
        ...masterData,
        status: masterData.status ?? 'active',
        ...(Array.isArray(lines) && lines.length > 0
          ? {
            Lines: {
              create: lines.map((line) => {
                const l = normalizeLineInput(line);
                return {
                  contract_id: parseInt(l.contract_id, 10),
                  bl_date: l.bl_date,
                  bl_number: String(l.bl_number ?? ''),
                  bl_attachments: Array.isArray(l.bl_attachments) ? l.bl_attachments : [],
                  comission_total_usd: Number(l.comission_total_usd ?? l.commission_total_usd ?? 0) || 0,
                  attachments: Array.isArray(l.attachments) ? l.attachments : [],
                  status: l.status ?? 'active',
                };
              }),
            },
          }
          : {}),
      },
      include: invoiceInclude,
    });
    reply.code(201).send(invoice);
  });

  // PUT update brokerage invoice (master fields; optional lines replace all)
  fastify.put("/brokerage-invoices/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const body = request.body || {};
    const { lines, number, invoice_date, active, status } = body;
    const bank_account_id = pickRawBankAccountId(body);
    const data = {};
    if (number !== undefined) data.number = number;
    if (invoice_date !== undefined) {
      data.invoice_date = invoice_date == null ? null : (typeof invoice_date === 'string' ? new Date(invoice_date) : invoice_date);
    }
    if (active !== undefined) data.active = active;
    if (status !== undefined) data.status = status;
    if (bank_account_id !== undefined) {
      const resolved = await resolveBankAccountId(prisma, bank_account_id);
      if (resolved?.outOfRange) {
        reply.code(400).send({
          error: `Invalid bank_account_id ${resolved.outOfRange} (out of range)`,
          hint: 'Send the numeric BankAccount.id from GET /api/v1/bank-accounts (autoincrement int), not a timestamp/localStorage id.',
        });
        return;
      }
      if (resolved?.invalid) {
        reply.code(400).send({
          error: `Invalid bank_account_id ${JSON.stringify(resolved.invalid)}`,
          hint: 'Send the numeric BankAccount.id from GET /api/v1/bank-accounts.',
        });
        return;
      }
      if (resolved?.notFound) {
        reply.code(400).send({
          error: `Bank account ${resolved.notFound} not found`,
          hint: 'Create a bank account first (POST /api/v1/bank-accounts) or pick an existing one (GET /api/v1/bank-accounts).',
        });
        return;
      }
      applyBankAccountWrite(data, resolved);
    }
    try {
      if (Array.isArray(lines)) {
        const invoiceId = parseInt(id, 10);
        const requestedContractIds = new Set(lines.map((line) => parseInt(line.contract_id, 10)));
        const lineData = (l) => ({
          bl_date: l.bl_date,
          bl_number: String(l.bl_number ?? ''),
          bl_attachments: Array.isArray(l.bl_attachments) ? l.bl_attachments : [],
          comission_total_usd: lineComissionUsd(l),
          ptax: l.ptax ?? 0,
          comission_total_brl: l.comission_total_brl ?? 0,
          description: l.description ?? '',
          notes: l.notes ?? '',
          attachments: Array.isArray(l.attachments) ? l.attachments : [],
          status: l.status ?? 'active',
          deleted: false,
        });
        for (const line of lines) {
          const l = normalizeLineInput(line);
          const cid = parseInt(l.contract_id, 10);
          await prisma.brokerageInvoiceLine.upsert({
            where: {
              brokerage_invoice_id_contract_id: {
                brokerage_invoice_id: invoiceId,
                contract_id: cid,
              },
            },
            create: {
              brokerage_invoice_id: invoiceId,
              contract_id: cid,
              ...lineData(l),
            },
            update: lineData(l),
          });
        }
        await prisma.brokerageInvoiceLine.updateMany({
          where: {
            brokerage_invoice_id: invoiceId,
            contract_id: { notIn: [...requestedContractIds] },
          },
          data: { deleted: true },
        });
      }
      const invoice = await prisma.brokerageInvoice.update({
        where: { id: parseInt(id, 10) },
        data,
        include: invoiceInclude,
      });
      return invoice;
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Brokerage invoice not found" });
        return;
      }
      throw error;
    }
  });

  // DELETE brokerage invoice (cascade deletes lines)
  fastify.delete("/brokerage-invoices/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.brokerageInvoice.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      reply.code(404).send({ error: "Brokerage invoice not found" });
    }
  });

  // ----- Lines sub-resource -----

  // GET all lines of an invoice
  fastify.get("/brokerage-invoices/:id/lines", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const invoiceId = parseInt(id);
    const invoice = await prisma.brokerageInvoice.findUnique({
      where: { id: invoiceId },
    });
    if (!invoice) {
      reply.code(404).send({ error: "Brokerage invoice not found" });
      return;
    }
    return prisma.brokerageInvoiceLine.findMany({
      where: { brokerage_invoice_id: invoiceId },
      include: { Contract: true },
    });
  });

  // POST add a line to an invoice
  fastify.post("/brokerage-invoices/:id/lines", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const invoiceId = parseInt(id);
    const invoice = await prisma.brokerageInvoice.findUnique({
      where: { id: invoiceId },
    });
    if (!invoice) {
      reply.code(404).send({ error: "Brokerage invoice not found" });
      return;
    }
    const l = normalizeLineInput(request.body || {});
    const line = await prisma.brokerageInvoiceLine.create({
      data: {
        brokerage_invoice_id: invoiceId,
        contract_id: parseInt(l.contract_id, 10),
        bl_date: l.bl_date,
        bl_number: String(l.bl_number ?? ''),
        bl_attachments: Array.isArray(l.bl_attachments) ? l.bl_attachments : [],
        comission_total_usd: lineComissionUsd(l),
        attachments: Array.isArray(l.attachments) ? l.attachments : [],
        status: l.status ?? 'active',
      },
      include: { Contract: true },
    });
    reply.code(201).send(line);
  });

  // PUT update a line
  fastify.put("/brokerage-invoices/:id/lines/:lineId", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id, lineId } = request.params;
    const invoiceId = parseInt(id);
    const lineIdNum = parseInt(lineId);
    const line = await prisma.brokerageInvoiceLine.findFirst({
      where: { id: lineIdNum, brokerage_invoice_id: invoiceId },
    });
    if (!line) {
      reply.code(404).send({ error: "Brokerage invoice line not found" });
      return;
    }
    const l = normalizeLineInput(request.body || {});
    const data = {};
    if (l.contract_id != null) data.contract_id = parseInt(l.contract_id);
    if (l.bl_date != null) data.bl_date = l.bl_date;
    if (l.bl_number != null) data.bl_number = l.bl_number;
    if (l.bl_attachments != null) data.bl_attachments = l.bl_attachments;
    if (l.comission_total_usd != null) data.comission_total_usd = l.comission_total_usd;
    if (l.attachments != null) data.attachments = l.attachments;
    if (l.status != null) data.status = l.status;
    const updated = await prisma.brokerageInvoiceLine.update({
      where: { id: lineIdNum },
      data,
      include: { Contract: true },
    });
    return updated;
  });

  // DELETE a line
  fastify.delete("/brokerage-invoices/:id/lines/:lineId", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Brokerage Invoices'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id, lineId } = request.params;
    const invoiceId = parseInt(id);
    const lineIdNum = parseInt(lineId);
    const line = await prisma.brokerageInvoiceLine.findFirst({
      where: { id: lineIdNum, brokerage_invoice_id: invoiceId },
    });
    if (!line) {
      reply.code(404).send({ error: "Brokerage invoice line not found" });
      return;
    }
    await prisma.brokerageInvoiceLine.delete({
      where: { id: lineIdNum },
    });
    reply.code(204).send();
  });
}

export default brokerageInvoicesRoutes;
