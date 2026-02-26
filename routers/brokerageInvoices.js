const linesInclude = { include: { Contract: true } };

function normalizeLineInput(line) {
  const l = { ...line };
  if (l.bl_date != null && typeof l.bl_date === 'string') {
    l.bl_date = new Date(l.bl_date);
  }
  return l;
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
      include: { Lines: linesInclude },
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
      include: { Lines: linesInclude },
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
    const masterData = {};
    if (number !== undefined) masterData.number = number;
    if (invoice_date != null) {
      masterData.invoice_date = typeof invoice_date === 'string' ? new Date(invoice_date) : invoice_date;
    }
    if (active !== undefined) masterData.active = active;
    if (status !== undefined) masterData.status = status;
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
      include: { Lines: linesInclude },
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
    const data = {};
    if (number !== undefined) data.number = number;
    if (invoice_date !== undefined) {
      data.invoice_date = invoice_date == null ? null : (typeof invoice_date === 'string' ? new Date(invoice_date) : invoice_date);
    }
    if (active !== undefined) data.active = active;
    if (status !== undefined) data.status = status;
    try {
      if (Array.isArray(lines)) {
        const invoiceId = parseInt(id, 10);
        const requestedContractIds = new Set(lines.map((line) => parseInt(line.contract_id, 10)));
        const lineData = (l) => ({
          bl_date: l.bl_date,
          bl_number: String(l.bl_number ?? ''),
          bl_attachments: Array.isArray(l.bl_attachments) ? l.bl_attachments : [],
          comission_total_usd: lineComissionUsd(l),
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
        include: { Lines: linesInclude },
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
