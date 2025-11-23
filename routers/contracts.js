async function contractsRoutes(fastify, options) {
    const { prisma } = options;

    // GET all contracts
    fastify.get("/contracts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        return prisma.contract.findMany({});
    });

    // GET contract by ID
    fastify.get("/contracts/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const contract = await prisma.contract.findUnique({
            where: { id: parseInt(id) },
        });
        if (!contract) {
            reply.code(404).send({ error: "Contract not found" });
            return;
        }
        return contract;
    });

    // POST create contract
    fastify.post("/contracts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const data = request.body;
        const contract = await prisma.contract.create({
            data,
        });
        reply.code(201).send(contract);
    });

    // PUT update contract
    fastify.put("/contracts/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const data = request.body;
        try {
            const contract = await prisma.contract.update({
                where: { id: parseInt(id) },
                data,
            });
            return contract;
        } catch (error) {
            reply.code(404).send({ error: "Contract not found" });
        }
    });

    // DELETE contract
    fastify.delete("/contracts/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        try {
            await prisma.contract.delete({
                where: { id: parseInt(id) },
            });
            reply.code(204).send();
        } catch (error) {
            reply.code(404).send({ error: "Contract not found" });
        }
    });
}

export default contractsRoutes;

