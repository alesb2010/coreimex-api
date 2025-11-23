async function sellersRoutes(fastify, options) {
  const { prisma } = options;

  // GET all sellers
  fastify.get("/sellers", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Sellers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.seller.findMany({});
  });

  // GET seller by ID
  fastify.get("/sellers/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Sellers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const seller = await prisma.seller.findUnique({
      where: { id: parseInt(id) },
    });
    if (!seller) {
      reply.code(404).send({ error: "Seller not found" });
      return;
    }
    return seller;
  });

  // POST create seller
  fastify.post("/sellers", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Sellers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const data = request.body;
    const seller = await prisma.seller.create({
      data,
    });
    reply.code(201).send(seller);
  });

  // PUT update seller
  fastify.put("/sellers/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Sellers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    try {
      const seller = await prisma.seller.update({
        where: { id: parseInt(id) },
        data,
      });
      return seller;
    } catch (error) {
      reply.code(404).send({ error: "Seller not found" });
    }
  });

  // DELETE seller
  fastify.delete("/sellers/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Sellers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.seller.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      reply.code(404).send({ error: "Seller not found" });
    }
  });
}

export default sellersRoutes;

