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
    const body = request.body;

    // Only pick valid Customer fields from schema
    const allowedFields = [
      'name', 'full_name', 'full_address', 'country', 'tax_id', 'contact_name',
      'whatsapp', 'phone', 'email', 'website', 'note', 'description',
      'active', 'status', 'deleted'
    ];
    const data = {};
    for (const field of allowedFields) {
      if (field in body) {
        data[field] = body[field];
      }
    }

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
    const body = request.body;

    // Only pick valid Customer fields from schema
    const allowedFields = [
      'name', 'full_name', 'full_address', 'country', 'tax_id', 'contact_name',
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
      const customer = await prisma.customer.update({
        where: { id: parseInt(id) },
        data,
      });
      return customer;
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Customer not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
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
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Customer not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });
}

export default customersRoutes;

