const API_PREFIX = '/api/v1';

function mapFileToWithUrl(file) {
    return {
        ...file,
        url: `${API_PREFIX}/files/${file.id}/download`,
        presignedUrlPath: `${API_PREFIX}/files/${file.id}/presigned-url`,
    };
}

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
        const products = await prisma.product.findMany({
            where: { deleted: false }
        });
        return products;
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
            where: { id: parseInt(id), deleted: false }
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
        const data = { ...request.body };
        delete data.attached_files; // attachments are now via File relation
        delete data.File; // relation, not a create field
        // Convert sellersId 0 or falsy to null (optional relation)
        if (!data.sellersId) {
            data.sellersId = null;
        }
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
        const body = request.body;

        // Only pick valid Product fields from schema
        const allowedFields = [
            'sku', 'name', 'comercial_name', 'category', 'origin_country',
            'price_comercial', 'price_local', 'comission', 'incoterm',
            'regulator_organ_number', 'sanity_rules', 'pack_type',
            'quantity_per_pack', 'quantity_per_container', 'container_type',
            'country_from', 'supply_origin_country', 'port_origin',
            'port_destination', 'documents_required', 'record_owner',
            'observation', 'active', 'status', 'currency', 'deleted'
        ];
        const data = {};
        for (const field of allowedFields) {
            if (field in body) {
                data[field] = body[field];
            }
        }

        // Handle Seller relation for update (Prisma relation name is Seller, not sellers)
        if (body.sellersId !== undefined) {
            if (body.sellersId) {
                data.Seller = { connect: { id: body.sellersId } };
            } else {
                data.Seller = { disconnect: true };
            }
        }
        try {
            const product = await prisma.product.update({
                where: { id: parseInt(id) },
                data,
            });
            return product;
        } catch (error) {
            if (error.code === 'P2025') {
                reply.code(404).send({ error: "Product not found" });
            } else {
                request.log.error(error);
                reply.code(400).send({ error: error.message });
            }
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
            if (error.code === 'P2025') {
                reply.code(404).send({ error: "Product not found" });
            } else {
                request.log.error(error);
                reply.code(400).send({ error: error.message });
            }
        }
    });
}

export default productsRoutes;

