async function specialConditionsRoutes(fastify, options) {
  const { prisma } = options;

  // GET all special conditions
  fastify.get("/special-conditions", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Special Conditions'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.specialCondition.findMany({});
  });

  // GET special condition by ID
  fastify.get("/special-conditions/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Special Conditions'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const condition = await prisma.specialCondition.findUnique({
      where: { id: parseInt(id) },
    });
    if (!condition) {
      reply.code(404).send({ error: "Special condition not found" });
      return;
    }
    return condition;
  });

  // POST create special condition
  fastify.post("/special-conditions", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Special Conditions'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const data = request.body;
    const condition = await prisma.specialCondition.create({
      data,
    });
    reply.code(201).send(condition);
  });

  // PUT update special condition
  fastify.put("/special-conditions/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Special Conditions'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    try {
      const condition = await prisma.specialCondition.update({
        where: { id: parseInt(id) },
        data,
      });
      return condition;
    } catch (error) {
      reply.code(404).send({ error: "Special condition not found" });
    }
  });

  // DELETE special condition
  fastify.delete("/special-conditions/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Special Conditions'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.specialCondition.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      reply.code(404).send({ error: "Special condition not found" });
    }
  });
}

export default specialConditionsRoutes;

