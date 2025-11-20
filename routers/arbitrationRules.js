async function arbitrationRulesRoutes(fastify, options) {
  const { prisma } = options;

  // GET all arbitration rules
  fastify.get("/arbitration-rules", {
    schema: {
      tags: ['Arbitration Rules']
    }
  }, async (request, reply) => {
    return prisma.arbitrationRule.findMany({});
  });

  // GET arbitration rule by ID
  fastify.get("/arbitration-rules/:id", {
    schema: {
      tags: ['Arbitration Rules']
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
    schema: {
      tags: ['Arbitration Rules']
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
    schema: {
      tags: ['Arbitration Rules']
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    try {
      const rule = await prisma.arbitrationRule.update({
        where: { id: parseInt(id) },
        data,
      });
      return rule;
    } catch (error) {
      reply.code(404).send({ error: "Arbitration rule not found" });
    }
  });

  // DELETE arbitration rule
  fastify.delete("/arbitration-rules/:id", {
    schema: {
      tags: ['Arbitration Rules']
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.arbitrationRule.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      reply.code(404).send({ error: "Arbitration rule not found" });
    }
  });
}

export default arbitrationRulesRoutes;

