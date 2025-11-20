async function brokerageInvoicesRoutes(fastify, options) {
  const { prisma } = options;

  // GET all brokerage invoices
  fastify.get("/brokerage-invoices", {
    schema: {
      tags: ['Brokerage Invoices']
    }
  }, async (request, reply) => {
    return prisma.brokerageInvoice.findMany({});
  });

  // GET brokerage invoice by ID
  fastify.get("/brokerage-invoices/:id", {
    schema: {
      tags: ['Brokerage Invoices']
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const invoice = await prisma.brokerageInvoice.findUnique({
      where: { id: parseInt(id) },
    });
    if (!invoice) {
      reply.code(404).send({ error: "Brokerage invoice not found" });
      return;
    }
    return invoice;
  });

  // POST create brokerage invoice
  fastify.post("/brokerage-invoices", {
    schema: {
      tags: ['Brokerage Invoices']
    }
  }, async (request, reply) => {
    const data = request.body;
    const invoice = await prisma.brokerageInvoice.create({
      data,
    });
    reply.code(201).send(invoice);
  });

  // PUT update brokerage invoice
  fastify.put("/brokerage-invoices/:id", {
    schema: {
      tags: ['Brokerage Invoices']
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    try {
      const invoice = await prisma.brokerageInvoice.update({
        where: { id: parseInt(id) },
        data,
      });
      return invoice;
    } catch (error) {
      reply.code(404).send({ error: "Brokerage invoice not found" });
    }
  });

  // DELETE brokerage invoice
  fastify.delete("/brokerage-invoices/:id", {
    schema: {
      tags: ['Brokerage Invoices']
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
}

export default brokerageInvoicesRoutes;

