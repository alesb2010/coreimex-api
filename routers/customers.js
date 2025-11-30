async function customersRoutes(fastify, options) {
  const { prisma } = options;

  // GET all customers
  fastify.get("/customers", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Customers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    return prisma.customer.findMany({});
  });

  // GET customer by ID
  fastify.get("/customers/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Customers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const customer = await prisma.customer.findUnique({
      where: { id: parseInt(id) },
    });
    if (!customer) {
      reply.code(404).send({ error: "customer not found" });
      return;
    }
    return customer;
  });

  // POST create customer
  fastify.post("/customers", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Customers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const data = request.body;
    const customer = await prisma.customer.create({
      data,
    });
    reply.code(201).send(customer);
  });

  // PUT update customer
  fastify.put("/customers/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Customers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    try {
      const customer = await prisma.customer.update({
        where: { id: parseInt(id) },
        data,
      });
      return customer;
    } catch (error) {
      reply.code(404).send({ error: "customer not found" });
    }
  });

  // DELETE customer
  fastify.delete("/customers/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Customers'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.customer.delete({
        where: { id: parseInt(id) },
      });
      reply.code(204).send();
    } catch (error) {
      reply.code(404).send({ error: "customer not found" });
    }
  });
}

export default customersRoutes;

