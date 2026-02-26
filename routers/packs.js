async function packsRoutes(fastify, options) {
  const { prisma } = options;

  // GET all packs
  fastify.get("/packs", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Packs'],
      security: [{ bearerAuth: [] }],
      querystring: {
        type: 'object',
        properties: {
          page: { type: 'integer', minimum: 1, default: 1 },
          pageSize: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
          includeDeleted: { type: 'boolean', description: 'Include soft-deleted packs' }
        }
      }
    }
  }, async (request, reply) => {
    const query = request.query || {};
    const page = Math.max(1, parseInt(query.page, 10) || 1);
    const pageSize = Math.min(100, Math.max(1, parseInt(query.pageSize || query.page_size, 10) || 20));
    const skip = (page - 1) * pageSize;

    const where = { AND: [] };
    if (query.includeDeleted !== 'true' && query.includeDeleted !== true) {
      where.AND.push({ deleted: false });
    }
    const whereClause = where.AND.length ? { AND: where.AND } : {};

    const [total, packs] = await Promise.all([
      prisma.pack.count({ where: whereClause }),
      prisma.pack.findMany({
        where: whereClause,
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
    if (!pack) {
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
      security: [{ bearerAuth: [] }],
      body: {
        type: 'object',
        required: ['name', 'status'],
        properties: {
          name: { type: 'string' },
          pack_type: { type: 'string' },
          quantity_per_pack: { type: 'number' },
          quantity_per_container: { type: 'number' },
          container_type: { type: 'string' },
          description: { type: 'string' },
          status: { type: 'string' },
          active: { type: 'boolean' }
        }
      }
    }
  }, async (request, reply) => {
    const body = request.body;
    const allowedFields = [
      'name', 'pack_type', 'quantity_per_pack',
      'quantity_per_container', 'container_type', 'description', 'status', 'active'
    ];
    const data = { name: body.name, status: body.status || 'active' };
    for (const field of allowedFields) {
      if (field in body && body[field] !== undefined) {
        data[field] = body[field];
      }
    }
    if (data.active === undefined) data.active = true;

    try {
      const pack = await prisma.pack.create({
        data
      });
      reply.code(201).send(pack);
    } catch (error) {
      request.log.error(error);
      if (error.code === 'P2002') {
        reply.code(409).send({ error: "This contract product already has a pack" });
      } else if (error.code === 'P2003') {
        reply.code(400).send({ error: "Invalid contract_product_id" });
      } else {
        reply.code(400).send({ error: error.message || "Failed to create pack" });
      }
    }
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
    const body = request.body;
    const packId = parseInt(id, 10);
    if (isNaN(packId)) {
      return reply.code(400).send({ error: "Invalid pack ID" });
    }

    const allowedFields = [
      'name', 'pack_type', 'quantity_per_pack', 'quantity_per_container',
      'container_type', 'description', 'active', 'status'
    ];
    const data = {};
    for (const field of allowedFields) {
      if (field in body) {
        data[field] = body[field];
      }
    }
    if (Object.keys(data).length === 0) {
      return reply.code(400).send({ error: "No fields provided to update" });
    }

    try {
      const pack = await prisma.pack.update({
        where: { id: packId },
        data
      });
      return pack;
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Pack not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message || "Failed to update pack" });
      }
    }
  });

  // DELETE pack (soft-delete via extension)
  fastify.delete("/packs/:id", {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Packs'],
      security: [{ bearerAuth: [] }]
    }
  }, async (request, reply) => {
    const { id } = request.params;
    try {
      await prisma.pack.delete({
        where: { id: parseInt(id) }
      });
      reply.code(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        reply.code(404).send({ error: "Pack not found" });
      } else {
        request.log.error(error);
        reply.code(400).send({ error: error.message || "Failed to delete pack" });
      }
    }
  });
}

export default packsRoutes;
