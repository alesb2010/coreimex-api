async function clientsRoutes(fastify, options) {
  const { prisma } = options;

  // GET all clients
  fastify.get("/clients", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Clients'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.client.findMany({});
  });

  // GET client by ID
  fastify.get("/clients/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Clients'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const client = await prisma.client.findUnique({
      where: { id: parseInt(id) },
    });
    if (!client) {
      reply.code(404).send({ error: "Client not found" });
      return;
    }
    return client;
  });

  // POST create client
  fastify.post("/clients", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Clients'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const data = request.body;
    const client = await prisma.client.create({
      data,
    });
    reply.code(201).send(client);
  });

  // PUT update client
  fastify.put("/clients/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Clients'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    try {
      const client = await prisma.client.update({
        where: { id: parseInt(id) },
        data,
      });
      return client;
    } catch (error) {
      reply.code(404).send({ error: "Client not found" });
    }
  });

  // DELETE client
  fastify.delete("/clients/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Clients'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.client.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      reply.code(404).send({ error: "Client not found" });
    }
  });
}

export default clientsRoutes;

