async function contractsRoutes(fastify, options) {
    const { prisma } = options;

    // Helper function to parse date strings to ISO-8601 DateTime format
    function parseDateTime(value) {
        if (!value || value === '' || value === null || value === undefined) {
            return null;
        }

        // If it's already a Date object, convert to ISO string
        if (value instanceof Date) {
            return value.toISOString();
        }

        // If it's already a valid ISO-8601 DateTime string, return as is
        if (typeof value === 'string') {
            // Check if it's a date-only string (YYYY-MM-DD)
            const dateOnlyPattern = /^\d{4}-\d{2}-\d{2}$/;
            if (dateOnlyPattern.test(value)) {
                // Convert date-only string to ISO-8601 DateTime (midnight UTC)
                return new Date(value + 'T00:00:00Z').toISOString();
            }

            // Check if it's already a valid ISO-8601 DateTime string
            const dateTimePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
            if (dateTimePattern.test(value)) {
                return value;
            }

            // Try to parse as Date and convert to ISO string
            const parsed = new Date(value);
            if (!isNaN(parsed.getTime())) {
                return parsed.toISOString();
            }
        }

        return null;
    }

    // GET all contracts
    fastify.get("/contracts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        return prisma.contract.findMany({
            include: {
                ContractProduct: {
                    where: { deleted: false },
                    include: { Product: true }
                }
            }
        });
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
            include: {
                ContractProduct: {
                    where: { deleted: false },
                    include: { Product: true }
                }
            }
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
        const body = request.body;

        // DateTime fields that can be null/empty
        const dateTimeFields = [
            'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_seller', 'date_expiration_signature_seller',
            'bording_date', 'shipment_date', 'payment_date',
            'date_expiration_signature_customer', 'date_signature_customer'
        ];

        // Only pick valid Contract fields from schema (no product_price; products go via ContractProduct)
        const allowedFields = [
            'name', 'description', 'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_seller', 'date_expiration_signature_seller',
            'seller_id', 'products_id', 'bording_date', 'mt_value', 'destination_country',
            'destination_port', 'shipping_company', 'shipment_date', 'si_sent', 'packing',
            'incoterm', 'payment_terms', 'payment_method', 'payment_currency', 'payment_amount',
            'payment_date', 'payment_status', 'payment_notes', 'payment_attachments',
            'payment_notes_seller', 'payment_attachments_seller', 'special_terms',
            'business_terms', 'legal_terms', 'other_terms', 'other_terms_seller',
            'commission_seller', 'comission_total', 'attachments', 'active', 'status',
            'commission_customer', 'customer_id', 'date_expiration_signature_customer',
            'date_signature_customer', 'other_terms_customer', 'other_terms_customer_seller',
            'other_terms_customer_seller_customer', 'other_terms_seller_customer',
            'other_terms_seller_customer_seller', 'payment_attachments_customer',
            'payment_notes_customer', 'deleted'
        ];
        const data = {};
        for (const field of allowedFields) {
            if (field in body) {
                const value = body[field];
                // Parse DateTime fields to ensure proper ISO-8601 format
                if (dateTimeFields.includes(field)) {
                    data[field] = parseDateTime(value);
                } else {
                    data[field] = value;
                }
            }
        }

        // products / items / ContractProduct: [{ product_id, price, quantity }] — one ContractProduct record per product
        const productsRaw = body.products ?? body.items ?? body.ContractProduct ?? body.contractProducts;
        const products = (() => {
            if (Array.isArray(productsRaw)) {
                return productsRaw.map((p) => (typeof p === 'object' && p !== null
                    ? { product_id: p.product_id ?? p.productId, price: p.price ?? p.item_price, quantity: p.quantity ?? p.item_quantity }
                    : p));
            }
            if (typeof productsRaw === 'string') {
                try { return JSON.parse(productsRaw); } catch { return []; }
            }
            return [];
        })();
        const productsIdFromBody = Array.isArray(body.products_id) ? body.products_id : [];

        try {
            // If products array is provided, keep Contract.products_id in sync
            if (products.length > 0) {
                data.products_id = products.map((p) => Number(p.product_id ?? p.productId));
            } else if (productsIdFromBody.length > 0) {
                // Only products_id provided: still save one ContractProduct per product (price/quantity null until set later)
                data.products_id = productsIdFromBody.map(Number);
            }

            const contract = await prisma.contract.create({
                data,
                include: {
                    ContractProduct: {
                        include: { Product: true }
                    }
                }
            });

            // Normalize product item: accept product_id/productId, price/item_price, quantity/item_quantity
            const norm = (p) => ({
                product_id: Number(p.product_id ?? p.productId),
                price: (p.price ?? p.item_price) != null ? Number(p.price ?? p.item_price) : null,
                quantity: (p.quantity ?? p.item_quantity) != null ? Number(p.quantity ?? p.item_quantity) : null
            });
            // Save one record per product in ContractProduct (price and quantity on each)
            const toCreate = products.length > 0
                ? products.map((p) => ({ ...norm(p), contract_id: contract.id, status: contract.status || 'active' }))
                : productsIdFromBody.map((product_id) => ({
                    contract_id: contract.id,
                    product_id: Number(product_id),
                    price: null,
                    quantity: null,
                    status: contract.status || 'active'
                }));

            if (toCreate.length > 0) {
                await prisma.contractProduct.createMany({
                    data: toCreate
                });
                const withProducts = await prisma.contract.findUnique({
                    where: { id: contract.id },
                    include: {
                        ContractProduct: {
                            where: { deleted: false },
                            include: { Product: true }
                        }
                    }
                });
                reply.code(201).send(withProducts);
                return;
            }
            reply.code(201).send(contract);
        } catch (error) {
            request.log.error(error);
            if (error.code === 'P2002') {
                reply.code(409).send({ error: "Contract already exists" });
            } else if (error.code === 'P2003') {
                reply.code(400).send({ error: "Invalid foreign key reference" });
            } else if (error.name === 'PrismaClientValidationError') {
                // Handle validation errors (like invalid DateTime format)
                const errorMessage = error.message.includes('Expected ISO-8601 DateTime')
                    ? "Invalid date format. Please provide valid ISO-8601 dates or leave empty for optional date fields."
                    : error.message;
                reply.code(400).send({ error: errorMessage });
            } else {
                reply.code(400).send({ error: error.message || "Failed to create contract" });
            }
        }
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
        const contractId = parseInt(id);

        if (isNaN(contractId)) {
            return reply.code(400).send({ error: "Invalid contract ID" });
        }

        const body = request.body;

        // DateTime fields that can be null/empty
        const dateTimeFields = [
            'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_seller', 'date_expiration_signature_seller',
            'bording_date', 'shipment_date', 'payment_date',
            'date_expiration_signature_customer', 'date_signature_customer'
        ];

        // Only pick valid Contract fields from schema (no product_price; products via ContractProduct)
        const allowedFields = [
            'name', 'description', 'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_seller', 'date_expiration_signature_seller',
            'seller_id', 'products_id', 'bording_date', 'mt_value', 'destination_country',
            'destination_port', 'shipping_company', 'shipment_date', 'si_sent', 'packing',
            'incoterm', 'payment_terms', 'payment_method', 'payment_currency', 'payment_amount',
            'payment_date', 'payment_status', 'payment_notes', 'payment_attachments',
            'payment_notes_seller', 'payment_attachments_seller', 'special_terms',
            'business_terms', 'legal_terms', 'other_terms', 'other_terms_seller',
            'commission_seller', 'comission_total', 'attachments', 'active', 'status',
            'commission_customer', 'customer_id', 'date_expiration_signature_customer',
            'date_signature_customer', 'other_terms_customer', 'other_terms_customer_seller',
            'other_terms_customer_seller_customer', 'other_terms_seller_customer',
            'other_terms_seller_customer_seller', 'payment_attachments_customer',
            'payment_notes_customer', 'deleted'
        ];
        const data = {};
        for (const field of allowedFields) {
            if (field in body) {
                const value = body[field];
                // Parse DateTime fields to ensure proper ISO-8601 format
                if (dateTimeFields.includes(field)) {
                    data[field] = parseDateTime(value);
                } else {
                    data[field] = value;
                }
            }
        }

        // products / items / ContractProduct: one record per product, with price and quantity on each
        const productsRaw = body.products ?? body.items ?? body.ContractProduct ?? body.contractProducts;
        const products = (() => {
            if (productsRaw === undefined) return undefined;
            if (Array.isArray(productsRaw)) {
                return productsRaw.map((p) => (typeof p === 'object' && p !== null
                    ? { product_id: p.product_id ?? p.productId, price: p.price ?? p.item_price, quantity: p.quantity ?? p.item_quantity }
                    : p));
            }
            if (typeof productsRaw === 'string') {
                try { return JSON.parse(productsRaw); } catch { return []; }
            }
            return [];
        })();
        const productsIdFromBody = Array.isArray(body.products_id) ? body.products_id : undefined;

        // Check if there's any data to update
        if (Object.keys(data).length === 0 && products === undefined && productsIdFromBody === undefined) {
            return reply.code(400).send({ error: "No fields provided to update" });
        }

        try {
            const existing = await prisma.contract.findUnique({
                where: { id: contractId },
                select: { status: true }
            });
            if (!existing) {
                return reply.code(404).send({ error: "Contract not found" });
            }
            const status = existing.status || 'active';

            const contract = await prisma.$transaction(async (tx) => {
                const norm = (p) => ({
                    product_id: Number(p.product_id ?? p.productId),
                    price: (p.price ?? p.item_price) != null ? Number(p.price ?? p.item_price) : null,
                    quantity: (p.quantity ?? p.item_quantity) != null ? Number(p.quantity ?? p.item_quantity) : null
                });

                // Replace contract products: update existing rows in place so price/quantity persist (avoids soft-delete + createMany conflicts)
                if (products !== undefined) {
                    data.products_id = products.length > 0 ? products.map((p) => Number(p.product_id ?? p.productId)) : [];
                    const productIdsInPayload = new Set(data.products_id);

                    const existingRows = await tx.contractProduct.findMany({
                        where: { contract_id: contractId },
                        select: { id: true, product_id: true }
                    });

                    for (const p of products) {
                        const { product_id, price, quantity } = norm(p);
                        const existing = existingRows.find((r) => r.product_id === product_id);
                        if (existing) {
                            await tx.contractProduct.update({
                                where: { id: existing.id },
                                data: { price, quantity, status }
                            });
                        } else {
                            await tx.contractProduct.create({
                                data: {
                                    contract_id: contractId,
                                    product_id,
                                    price,
                                    quantity,
                                    status
                                }
                            });
                        }
                    }
                    for (const row of existingRows) {
                        if (!productIdsInPayload.has(row.product_id)) {
                            await tx.contractProduct.delete({ where: { id: row.id } });
                        }
                    }
                } else if (productsIdFromBody !== undefined) {
                    await tx.contractProduct.deleteMany({
                        where: { contract_id: contractId }
                    });
                    if (productsIdFromBody.length > 0) {
                        await tx.contractProduct.createMany({
                            data: productsIdFromBody.map((product_id) => ({
                                contract_id: contractId,
                                product_id: Number(product_id),
                                price: null,
                                quantity: null,
                                status
                            }))
                        });
                    }
                }

                return tx.contract.update({
                    where: { id: contractId },
                    data,
                    include: {
                        ContractProduct: {
                            where: { deleted: false },
                            include: { Product: true }
                        }
                    }
                });
            });
            return contract;
        } catch (error) {
            request.log.error({
                error: error,
                errorCode: error.code,
                errorName: error.name,
                errorMessage: error.message,
                data: data,
                contractId: contractId,
                body: body
            });

            if (error.code === 'P2025') {
                reply.code(404).send({ error: "Contract not found" });
            } else if (error.code === 'P2003') {
                reply.code(400).send({ error: "Invalid foreign key reference" });
            } else if (error.name === 'PrismaClientValidationError') {
                // Handle validation errors (like invalid DateTime format)
                const errorMessage = error.message.includes('Expected ISO-8601 DateTime')
                    ? "Invalid date format. Please provide valid ISO-8601 dates or leave empty for optional date fields."
                    : error.message;
                reply.code(400).send({ error: errorMessage });
            } else {
                reply.code(400).send({ error: error.message || "Failed to update contract" });
            }
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
            if (error.code === 'P2025') {
                reply.code(404).send({ error: "Contract not found" });
            } else {
                request.log.error(error);
                reply.code(400).send({ error: error.message || "Failed to delete contract" });
            }
        }
    });
}

export default contractsRoutes;

