async function arbitrationRulesRoutes(fastify, options) {
  const { prisma } = options;

  // GET all arbitration rules
  fastify.get("/arbitration-rules", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Arbitration Rules'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.arbitrationRule.findMany({});
  });

  // GET arbitration rule by ID
  fastify.get("/arbitration-rules/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Arbitration Rules'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const rule = await prisma.arbitrationRule.findUnique({
      where: { id: parseInt(id) },
    });
    if (!rule) {
      reply.code(404).send({ error: "Arbitration rule not found" });
      return;
    }
    return rule;
  });

  // POST create arbitration rule
  fastify.post("/arbitration-rules", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Arbitration Rules'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const data = request.body;
    const rule = await prisma.arbitrationRule.create({
      data,
    });
    reply.code(201).send(rule);
  });

  // PUT update arbitration rule
  fastify.put("/arbitration-rules/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Arbitration Rules'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const body = request.body;

    // Only pick valid ArbitrationRule fields from schema
    const allowedFields = [
      'name', 'description', 'order', 'type', 'note',
      'attachments', 'active', 'status', 'deleted'
    ];
    const data = {};
    for (const field of allowedFields) {
      if (field in body) {
        data[field] = body[field];
      }
    }

    try {
      const rule = await prisma.arbitrationRule.update({
        where: { id: parseInt(id) },
        data,
      });
      return rule;
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Arbitration rule not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });

  // DELETE arbitration rule
  fastify.delete("/arbitration-rules/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Arbitration Rules'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.arbitrationRule.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Arbitration rule not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });
}

export default arbitrationRulesRoutes;

