async function packsRoutes(fastify, options) {
  const { prisma } = options;

  // GET all packs (simple list, paginated)
  fastify.get("/packs", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Packs'],
      security: [{ bearerAuth: [] }],
      querystring: {
        type: 'object',
        properties: {
          page: { type: 'integer', minimum: 1, default: 1 },
          pageSize: { type: 'integer', minimum: 1, maximum: 100, default: 20 }
        }
      }
    }
  }, async (request, reply) => {
    const query = request.query || {};
    const page = Math.max(1, parseInt(query.page, 10) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(query.pageSize, 10) || 20));
    const skip = (page - 1) * pageSize;

    const [total, packs] = await Promise.all([
      prisma.pack.count({ where: { deleted: false } }),
      prisma.pack.findMany({
        where: { deleted: false },
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' }
      })
    ]);

    return {
      items: packs,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    };
  });

  // GET pack by ID
  fastify.get("/packs/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Packs'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const pack = await prisma.pack.findUnique({
      where: { id: parseInt(id) }
    });
    if (!pack || pack.deleted) {
      reply.code(404).send({ error: "Pack not found" });
      return;
    }
    return pack;
  });

  // POST create pack
  fastify.post("/packs", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Packs'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const body = request.body || {};
    const data = {
      name: body.name,
      pack_type: body.pack_type,
      quantity_per_pack: body.quantity_per_pack,
      quantity_per_container: body.quantity_per_container,
      container_type: body.container_type,
      description: body.description,
      status: body.status || 'active',
      active: body.active !== undefined ? body.active : true
    };

    const pack = await prisma.pack.create({ data });
    reply.code(201).send(pack);
  });

  // PUT update pack
  fastify.put("/packs/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Packs'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const body = request.body || {};

    const allowedFields = [
      'name', 'pack_type', 'quantity_per_pack', 'quantity_per_container',
      'container_type', 'description', 'active', 'status'
    ];
    const data = {};
    for (const field of allowedFields) {
      if (field in body) data[field] = body[field];
    }
    if (Object.keys(data).length === 0) {
      return reply.code(400).send({ error: "No fields provided to update" });
    }

    try {
      const pack = await prisma.pack.update({
        where: { id: parseInt(id) },
        data
      });
      return pack;
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Pack not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });

  // DELETE pack
  fastify.delete("/packs/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Packs'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.pack.delete({ where: { id: parseInt(id) } });
      reply.code(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Pack not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message });
      }
    }
  });
}

export default packsRoutes;

