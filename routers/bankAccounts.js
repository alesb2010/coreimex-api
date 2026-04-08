const MAX_BANK_ACCOUNTS = 3;

async function bankAccountsRoutes(fastify, options) {
  const { prisma } = options;

  // GET all bank accounts
  fastify.get("/bank-accounts", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Bank Accounts'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.bankAccount.findMany({
      where: { deleted: false },
      orderBy: { createdAt: 'asc' },
    });
  });

  // GET bank account by ID
  fastify.get("/bank-accounts/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Bank Accounts'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const account = await prisma.bankAccount.findFirst({
      where: { id: parseInt(id), deleted: false },
    });
    if (!account) {
      reply.code(404).send({ error: "Bank account not found" });
      return;
    }
    return account;
  });

  // POST create bank account (max 3)
  fastify.post("/bank-accounts", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Bank Accounts'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const count = await prisma.bankAccount.count({ where: { deleted: false } });
    if (count >= MAX_BANK_ACCOUNTS) {
      reply.code(422).send({ error: `Maximum of ${MAX_BANK_ACCOUNTS} bank accounts allowed` });
      return;
    }

    const body = request.body || {};
    const {
      bank_name,
      account_holder,
      account_number,
      agency,
      account_type,
      swift_bic,
      iban,
      pix_key,
      currency,
      notes,
      status,
    } = body;

    if (!bank_name || !String(bank_name).trim()) {
      reply.code(400).send({ error: "bank_name is required" });
      return;
    }
    if (!account_holder || !String(account_holder).trim()) {
      reply.code(400).send({ error: "account_holder is required" });
      return;
    }

    const account = await prisma.bankAccount.create({
      data: {
        bank_name: String(bank_name).trim(),
        account_holder: String(account_holder).trim(),
        account_number: account_number ? String(account_number).trim() : null,
        agency: agency ? String(agency).trim() : null,
        account_type: account_type ? String(account_type) : 'checking',
        swift_bic: swift_bic ? String(swift_bic).trim() : null,
        iban: iban ? String(iban).trim() : null,
        pix_key: pix_key ? String(pix_key).trim() : null,
        currency: currency ? String(currency) : 'BRL',
        notes: notes ? String(notes).trim() : null,
        status: status ? String(status) : 'active',
      },
    });

    reply.code(201).send(account);
  });

  // PUT update bank account
  fastify.put("/bank-accounts/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Bank Accounts'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const existing = await prisma.bankAccount.findFirst({
      where: { id: parseInt(id), deleted: false },
    });
    if (!existing) {
      reply.code(404).send({ error: "Bank account not found" });
      return;
    }

    const body = request.body || {};
    const data = {};

    if (body.bank_name !== undefined) {
      if (!String(body.bank_name).trim()) {
        reply.code(400).send({ error: "bank_name cannot be empty" });
        return;
      }
      data.bank_name = String(body.bank_name).trim();
    }
    if (body.account_holder !== undefined) {
      if (!String(body.account_holder).trim()) {
        reply.code(400).send({ error: "account_holder cannot be empty" });
        return;
      }
      data.account_holder = String(body.account_holder).trim();
    }
    if (body.account_number !== undefined) data.account_number = body.account_number ? String(body.account_number).trim() : null;
    if (body.agency !== undefined) data.agency = body.agency ? String(body.agency).trim() : null;
    if (body.account_type !== undefined) data.account_type = String(body.account_type);
    if (body.swift_bic !== undefined) data.swift_bic = body.swift_bic ? String(body.swift_bic).trim() : null;
    if (body.iban !== undefined) data.iban = body.iban ? String(body.iban).trim() : null;
    if (body.pix_key !== undefined) data.pix_key = body.pix_key ? String(body.pix_key).trim() : null;
    if (body.currency !== undefined) data.currency = String(body.currency);
    if (body.notes !== undefined) data.notes = body.notes ? String(body.notes).trim() : null;
    if (body.status !== undefined) data.status = String(body.status);
    if (body.active !== undefined) data.active = Boolean(body.active);

    const updated = await prisma.bankAccount.update({
      where: { id: parseInt(id) },
      data,
    });

    return updated;
  });

  // DELETE bank account (soft delete)
  fastify.delete("/bank-accounts/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Bank Accounts'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const existing = await prisma.bankAccount.findFirst({
      where: { id: parseInt(id), deleted: false },
    });
    if (!existing) {
      reply.code(404).send({ error: "Bank account not found" });
      return;
    }
    await prisma.bankAccount.update({
      where: { id: parseInt(id) },
      data: { deleted: true, active: false },
    });
    reply.code(204).send();
  });
}

export default bankAccountsRoutes;
