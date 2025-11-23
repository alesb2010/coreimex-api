async function productsRoutes(fastify, options) {
    const { prisma } = options;

    // GET all products
    fastify.get("/products", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Products'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        return prisma.product.findMany({});
    });

    // GET product by ID
    fastify.get("/products/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Products'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) },
        });
        if (!product) {
            reply.code(404).send({ error: "Product not found" });
            return;
        }
        return product;
    });

    // POST create product
    fastify.post("/products", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Products'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const data = request.body;
        const product = await prisma.product.create({
            data,
        });
        reply.code(201).send(product);
    });

    // PUT update product
    fastify.put("/products/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Products'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const data = request.body;
        try {
            const product = await prisma.product.update({
                where: { id: parseInt(id) },
                data,
            });
            return product;
        } catch (error) {
            reply.code(404).send({ error: "Product not found" });
        }
    });

    // DELETE product
    fastify.delete("/products/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Products'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        try {
            await prisma.product.delete({
                where: { id: parseInt(id) },
            });
            reply.code(204).send();
        } catch (error) {
            reply.code(404).send({ error: "Product not found" });
        }
    });
}

export default productsRoutes;

