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
    const body = request.body;
    
    // Only pick valid Seller fields from schema
    const allowedFields = [
      'company_name', 'full_address', 'country', 'tax_id', 'contact_name',
      'whatsapp', 'phone', 'email', 'website', 'note', 'description',
      'active', 'status', 'deleted'
    ];
    const data = {};
    for (const field of allowedFields) {
      if (field in body) {
        data[field] = body[field];
      }
    }
    
    try {
      const seller = await prisma.seller.update({
        where: { id: parseInt(id) },
        data,
      });
      return seller;
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Seller not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
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
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Seller not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });
}

export default sellersRoutes;

