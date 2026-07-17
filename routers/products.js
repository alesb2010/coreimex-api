const API_PREFIX = '/api/v1';

function mapFileToWithUrl(file) {
    return {
        ...file,
        url: `${API_PREFIX}/files/${file.id}/download`,
        presignedUrlPath: `${API_PREFIX}/files/${file.id}/presigned-url`,
    };
}

const PRODUCT_INCLUDE = {
    ProductVariation: {
        where: { deleted: false },
        orderBy: { id: 'asc' },
    },
};

const VARIATION_FIELDS = ['name', 'type', 'lot', 'details', 'notes', 'regulatory', 'active', 'status'];

function normalizeVariationInput(variation) {
    if (!variation || typeof variation !== 'object') return null;

    const data = {};
    for (const field of VARIATION_FIELDS) {
        if (field in variation) {
            data[field] = variation[field];
        }
    }

    if (!data.name?.trim()) {
        data.name = 'Grade 1';
    }

    if (!('type' in data)) data.type = '';
    if (!('lot' in data)) data.lot = '';
    if (!('details' in data)) data.details = '';
    if (!('notes' in data)) data.notes = '';
    if (!('regulatory' in data)) data.regulatory = '';
    if (!('status' in data)) data.status = 'active';
    if (!('active' in data)) data.active = true;

    return data;
}

function extractVariationsFromBody(body) {
    if (!body || typeof body !== 'object') return null;
    if (Array.isArray(body.variations)) return body.variations;
    if (Array.isArray(body.ProductVariation)) return body.ProductVariation;
    return null;
}

function stripVariationFieldsFromProductData(data) {
    delete data.variations;
    delete data.ProductVariation;
    delete data.attached_files;
    delete data.File;
}

async function syncProductVariations(prisma, productId, variationsInput) {
    if (!Array.isArray(variationsInput)) return;

    const existing = await prisma.productVariation.findMany({
        where: { product_id: productId, deleted: false },
        select: { id: true },
    });
    const existingIds = new Set(existing.map((v) => v.id));
    const incomingIds = new Set();

    for (const raw of variationsInput) {
        const data = normalizeVariationInput(raw);
        if (!data) continue;

        if (raw.id) {
            const variationId = parseInt(raw.id, 10);
            if (!Number.isFinite(variationId)) continue;

            const updated = await prisma.productVariation.updateMany({
                where: { id: variationId, product_id: productId },
                data,
            });
            if (updated.count > 0) {
                incomingIds.add(variationId);
            }
        } else {
            await prisma.productVariation.create({
                data: {
                    ...data,
                    product_id: productId,
                },
            });
        }
    }

    const idsToRemove = [...existingIds].filter((id) => !incomingIds.has(id));
    if (idsToRemove.length > 0) {
        await prisma.productVariation.deleteMany({
            where: { id: { in: idsToRemove }, product_id: productId },
        });
    }
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
            where: { deleted: false },
            include: PRODUCT_INCLUDE,
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
            where: { id: parseInt(id), deleted: false },
            include: PRODUCT_INCLUDE,
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
        const body = { ...request.body };
        const variationsInput = extractVariationsFromBody(body);
        stripVariationFieldsFromProductData(body);

        // Convert sellersId 0 or falsy to null (optional relation)
        if (!body.sellersId) {
            body.sellersId = null;
        }

        const variationCreates = Array.isArray(variationsInput)
            ? variationsInput.map((v) => normalizeVariationInput(v)).filter(Boolean)
            : [];

        const product = await prisma.product.create({
            data: {
                ...body,
                ProductVariation: variationCreates.length > 0
                    ? { create: variationCreates }
                    : undefined,
            },
            include: PRODUCT_INCLUDE,
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
        const productId = parseInt(id, 10);
        const body = request.body;
        const variationsInput = extractVariationsFromBody(body);

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
                where: { id: productId },
                data,
            });

            if (variationsInput !== null) {
                await syncProductVariations(prisma, productId, variationsInput);
            }

            const productWithVariations = await prisma.product.findUnique({
                where: { id: productId },
                include: PRODUCT_INCLUDE,
            });

            return productWithVariations;
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
