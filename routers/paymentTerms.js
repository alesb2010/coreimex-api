async function paymentTermsRoutes(fastify, options) {
  const { prisma } = options;

  const allowedFields = [
    'name', 'description', 'order', 'type', 'note',
    'attachments', 'active', 'status', 'deleted'
  ];

  const pickData = (body) => {
    const data = {};
    for (const field of allowedFields) {
      if (field in body) {
        data[field] = body[field];
      }
    }
    return data;
  };

  // GET all payment terms
  fastify.get("/payment-terms", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Payment Terms'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.paymentTerm.findMany({});
  });

  // GET payment term by ID
  fastify.get("/payment-terms/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Payment Terms'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const term = await prisma.paymentTerm.findUnique({
      where: { id: parseInt(id) },
    });
    if (!term) {
      reply.code(404).send({ error: "Payment term not found" });
      return;
    }
    return term;
  });

  // POST create payment term
  fastify.post("/payment-terms", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Payment Terms'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const term = await prisma.paymentTerm.create({
      data: pickData(request.body),
    });
    reply.code(201).send(term);
  });

  // PUT update payment term
  fastify.put("/payment-terms/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Payment Terms'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;

    try {
      const term = await prisma.paymentTerm.update({
        where: { id: parseInt(id) },
        data: pickData(request.body),
      });
      return term;
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Payment term not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });

  // DELETE payment term
  fastify.delete("/payment-terms/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Payment Terms'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.paymentTerm.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Payment term not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });
}

export default paymentTermsRoutes;
