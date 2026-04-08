async function contractsRoutes(fastify, options) {
    const { prisma } = options;
    const { createContractActivityLog } = await import('../lib/contractActivityLog.js');

    function getBody(request) {
        let b = request.body;
        if (typeof b === 'string' && b.trim()) {
            try {
                b = JSON.parse(b);
            } catch {
                return {};
            }
        }
        return b?.data ?? b ?? {};
    }

    function parseProductsInput(val) {
        if (Array.isArray(val)) return val;
        if (typeof val === 'string' && val.trim()) {
            try {
                const parsed = JSON.parse(val);
                return Array.isArray(parsed) ? parsed : [];
            } catch {
                return [];
            }
        }
        return [];
    }

    // Map ContractProduct[] to products array format: [{ product_id, price, quantity, pack_id }]
    function mapContractProductsToProducts(contractProducts) {
        if (!contractProducts || !Array.isArray(contractProducts)) return [];
        return contractProducts
            .filter(cp => !cp.deleted)
            .map(cp => ({
                product_id: cp.product_id,
                price: cp.price,
                quantity: cp.quantity,
                pack_id: cp.pack_id,
            }));
    }

    const CONTRACT_LIST_SORT_FIELDS = new Set(['id', 'name', 'date_creation', 'status']);

    function parseOptionalPositiveInt(value) {
        if (value === undefined || value === null || value === '') return null;
        const n = parseInt(String(value), 10);
        if (!Number.isFinite(n) || n <= 0) return null;
        return n;
    }

    /** YYYY-MM-DD → UTC start of day, or null if invalid */
    function parseDateOnlyUtcStart(dateStr) {
        if (!dateStr || typeof dateStr !== 'string') return null;
        const t = dateStr.trim();
        const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(t);
        if (!m) return null;
        const y = +m[1];
        const mo = +m[2];
        const d = +m[3];
        const dt = new Date(Date.UTC(y, mo - 1, d));
        if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
        return dt;
    }

    /** YYYY-MM-DD → inclusive end of that UTC day */
    function parseDateOnlyUtcEndInclusive(dateStr) {
        const start = parseDateOnlyUtcStart(dateStr);
        if (!start) return null;
        return new Date(start.getTime() + 24 * 60 * 60 * 1000 - 1);
    }

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

    // GET contracts (paginated list with filters)
    fastify.get("/contracts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }],
            querystring: {
                type: 'object',
                properties: {
                    customer_party_a_id: { type: 'integer' },
                    customer_party_b_id: { type: 'integer' },
                    product_id: { type: 'integer' },
                    status: { type: 'string' },
                    date_creation_from: { type: 'string' },
                    date_creation_to: { type: 'string' },
                    page: { type: 'integer', minimum: 1, default: 1 },
                    pageSize: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
                    sortBy: { type: 'string' },
                    sortOrder: { type: 'string', enum: ['asc', 'desc'] }
                }
            }
        }
    }, async (request, reply) => {
        const q = request.query || {};

        const page = Math.max(1, parseInt(q.page, 10) || 1);
        const pageSize = Math.min(100, Math.max(1, parseInt(q.pageSize, 10) || 20));
        const skip = (page - 1) * pageSize;

        let sortBy = typeof q.sortBy === 'string' ? q.sortBy.trim() : '';
        if (!CONTRACT_LIST_SORT_FIELDS.has(sortBy)) {
            sortBy = 'date_creation';
        }
        const sortOrderRaw = typeof q.sortOrder === 'string' ? q.sortOrder.toLowerCase() : '';
        const sortOrder = sortOrderRaw === 'asc' ? 'asc' : 'desc';
        const orderBy = { [sortBy]: sortOrder };

        const and = [];

        const partyAId = parseOptionalPositiveInt(q.customer_party_a_id);
        if (partyAId != null) {
            and.push({ customer_party_a_id: partyAId });
        }

        const partyBId = parseOptionalPositiveInt(q.customer_party_b_id);
        if (partyBId != null) {
            and.push({ customer_party_b_id: partyBId });
        }

        const productId = parseOptionalPositiveInt(q.product_id);
        if (productId != null) {
            and.push({
                ContractProduct: {
                    some: {
                        product_id: productId,
                        deleted: false
                    }
                }
            });
        }

        if (typeof q.status === 'string' && q.status.trim() !== '') {
            and.push({
                status: { equals: q.status.trim(), mode: 'insensitive' }
            });
        }

        const fromDate = parseDateOnlyUtcStart(q.date_creation_from);
        if (fromDate) {
            and.push({ date_creation: { gte: fromDate } });
        }

        const toDateEnd = parseDateOnlyUtcEndInclusive(q.date_creation_to);
        if (toDateEnd) {
            and.push({ date_creation: { lte: toDateEnd } });
        }

        const where = and.length > 0 ? { AND: and } : {};

        const listInclude = {
            ContractProduct: true,
            PartyA: { select: { id: true, name: true, full_name: true } },
            PartyB: { select: { id: true, name: true, full_name: true } }
        };

        const [total, contracts] = await Promise.all([
            prisma.contract.count({ where }),
            prisma.contract.findMany({
                where,
                skip,
                take: pageSize,
                orderBy,
                include: listInclude
            })
        ]);

        const items = contracts.map(c => {
            const { ContractProduct, ...rest } = c;
            return { ...rest, products: mapContractProductsToProducts(ContractProduct) };
        });

        const totalPages = pageSize > 0 ? Math.ceil(total / pageSize) : 0;

        return {
            items,
            total,
            page,
            pageSize,
            totalPages
        };
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
            include: { ContractProduct: true }
        });
        if (!contract) {
            reply.code(404).send({ error: "Contract not found" });
            return;
        }
        const { ContractProduct, ...rest } = contract;
        return { ...rest, products: mapContractProductsToProducts(ContractProduct) };
    });

    // POST create contract
    fastify.post("/contracts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const body = getBody(request);
        const productsInput = parseProductsInput(body.products);

        // Derive products_id from products array (required by schema)
        if (!('products_id' in body)) {
            body.products_id = productsInput.length > 0 ? productsInput.map(p => p.product_id) : [];
        }

        // DateTime fields that can be null/empty
        const dateTimeFields = [
            'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'bording_date', 'shipment_date', 'payment_date'
        ];

        // Only pick valid Contract fields from schema (exclude products - handled via ContractProduct)
        const allowedFields = [
            'name', 'description', 'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'customer_party_a_id', 'customer_party_b_id', 'products_id', 'bording_date', 'mt_value',
            'origin_country', 'origin_port', 'destination_country', 'destination_port', 'shipping_company', 'shipment_date', 'si_sent',
            'packing', 'incoterm', 'payment_terms', 'payment_method', 'payment_currency', 'payment_amount',
            'payment_date', 'payment_status', 'payment_notes', 'payment_attachments',
            'payment_notes_party_a', 'payment_attachments_party_a', 'payment_notes_party_b', 'payment_attachments_party_b',
            'special_terms', 'business_terms', 'legal_terms', 'other_terms',
            'other_terms_party_a', 'other_terms_party_b', 'other_terms_party_a_party_b',
            'other_terms_party_a_party_b_party_a', 'other_terms_party_b_party_a', 'other_terms_party_b_party_a_party_b',
            'commission_party_a', 'commission_party_b', 'comission_total', 'attachments', 'active', 'status', 'deleted'
        ];
        const data = {};
        for (const field of allowedFields) {
            if (field in body) {
                const value = body[field];
                if (dateTimeFields.includes(field)) {
                    data[field] = parseDateTime(value);
                } else {
                    data[field] = value;
                }
            }
        }

        try {
            const contract = await prisma.$transaction(async (tx) => {
                const c = await tx.contract.create({ data });
                if (productsInput.length > 0) {
                    const rows = productsInput.map(p => ({
                        contract_id: c.id,
                        product_id: Number(p.product_id),
                        price: p.price != null ? Number(p.price) : null,
                        quantity: p.quantity != null ? Number(p.quantity) : null,
                        pack_id: p.pack_id != null ? Number(p.pack_id) : null,
                        status: 'active',
                        deleted: false
                    }));
                    request.log.info({
                        location: 'contracts.post.createMany.rows',
                        contractId: c.id,
                        rows
                    });
                    const createResult = await tx.contractProduct.createMany({ data: rows });
                    request.log.info({
                        location: 'contracts.post.createMany.result',
                        contractId: c.id,
                        createResult
                    });
                }

                await createContractActivityLog(tx, {
                    contractId: c.id,
                    request,
                    action: 'CONTRACT_CREATE',
                    details: 'Contract created',
                    reference: c.name ?? null,
                    payload: {
                        contract: data,
                        products: productsInput
                    }
                });
                return c;
            });
            const created = await prisma.contract.findUnique({
                where: { id: contract.id },
                include: { ContractProduct: true }
            });
            const { ContractProduct, ...rest } = created;
            reply.code(201).send({ ...rest, products: mapContractProductsToProducts(ContractProduct) });
        } catch (error) {
            request.log.error(error);
            if (error.code === 'P2002') {
                reply.code(409).send({ error: "Contract already exists" });
            } else if (error.code === 'P2003') {
                reply.code(400).send({ error: "Invalid foreign key reference" });
            } else if (error.name === 'PrismaClientValidationError') {
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

        const body = getBody(request);
        const productsInput = 'products' in body ? parseProductsInput(body.products) : null;

        // Keep products_id in sync when products are provided
        if (productsInput !== null && !('products_id' in body)) {
            body.products_id = productsInput.map(p => p.product_id);
        }

        // DateTime fields that can be null/empty
        const dateTimeFields = [
            'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'bording_date', 'shipment_date', 'payment_date'
        ];

        // Only pick valid Contract fields from schema (exclude products - handled via ContractProduct)
        const allowedFields = [
            'name', 'description', 'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature', 'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'customer_party_a_id', 'customer_party_b_id', 'products_id', 'bording_date', 'mt_value',
            'origin_country', 'origin_port', 'destination_country', 'destination_port', 'shipping_company', 'shipment_date', 'si_sent',
            'packing', 'incoterm', 'payment_terms', 'payment_method', 'payment_currency', 'payment_amount',
            'payment_date', 'payment_status', 'payment_notes', 'payment_attachments',
            'payment_notes_party_a', 'payment_attachments_party_a', 'payment_notes_party_b', 'payment_attachments_party_b',
            'special_terms', 'business_terms', 'legal_terms', 'other_terms',
            'other_terms_party_a', 'other_terms_party_b', 'other_terms_party_a_party_b',
            'other_terms_party_a_party_b_party_a', 'other_terms_party_b_party_a', 'other_terms_party_b_party_a_party_b',
            'commission_party_a', 'commission_party_b', 'comission_total', 'attachments', 'active', 'status', 'deleted'
        ];
        const data = {};
        for (const field of allowedFields) {
            if (field in body) {
                const value = body[field];
                if (dateTimeFields.includes(field)) {
                    data[field] = parseDateTime(value);
                } else {
                    data[field] = value;
                }
            }
        }
        const updatedFieldNames = Object.keys(data);

        if (Object.keys(data).length === 0 && productsInput === null) {
            return reply.code(400).send({ error: "No fields provided to update" });
        }

        try {
            await prisma.$transaction(async (tx) => {
                if (Object.keys(data).length > 0) {
                    await tx.contract.update({
                        where: { id: contractId },
                        data,
                    });
                }
                if (productsInput !== null) {
                    await tx.contractProduct.deleteMany({ where: { contract_id: contractId } });
                    if (productsInput.length > 0) {
                        const rows = productsInput.map(p => ({
                            contract_id: contractId,
                            product_id: Number(p.product_id),
                            price: p.price != null ? Number(p.price) : null,
                            quantity: p.quantity != null ? Number(p.quantity) : null,
                            pack_id: p.pack_id != null ? Number(p.pack_id) : null,
                            status: 'active',
                            deleted: false
                        }));
                        request.log.info({
                            location: 'contracts.put.createMany.rows',
                            contractId,
                            rows
                        });
                        const createResult = await tx.contractProduct.createMany({ data: rows });
                        request.log.info({
                            location: 'contracts.put.createMany.result',
                            contractId,
                            createResult
                        });
                    }
                }

                await createContractActivityLog(tx, {
                    contractId,
                    request,
                    action: productsInput !== null ? 'CONTRACT_UPDATE_WITH_PRODUCTS' : 'CONTRACT_UPDATE',
                    details: updatedFieldNames.length > 0
                        ? `Updated fields: ${updatedFieldNames.join(', ')}`
                        : (productsInput !== null ? 'Updated contract products' : 'Contract updated'),
                    reference: String(contractId),
                    payload: {
                        contract: data,
                        products: productsInput
                    }
                });
            });
            const productsInDb = await prisma.contractProduct.findMany({
                where: { contract_id: contractId }
            });
            request.log.info({
                location: 'contracts.put.afterTransaction.extended',
                contractId,
                productsInDb
            });
            const productsInDbRaw = await prisma.$queryRaw`
                SELECT id, contract_id, product_id, price, quantity, pack_id, deleted
                FROM "ContractProduct"
                WHERE contract_id = ${contractId}
                ORDER BY id DESC
                LIMIT 10
            `;
            request.log.info({
                location: 'contracts.put.afterTransaction.raw',
                contractId,
                productsInDbRaw
            });
            const contract = await prisma.contract.findUnique({
                where: { id: contractId },
                include: { ContractProduct: true }
            });
            const { ContractProduct, ...rest } = contract;
            return { ...rest, products: mapContractProductsToProducts(ContractProduct) };
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

    // PUT contract products only - save product lines (price, quantity) for a contract
    fastify.put("/contracts/:id/products", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const contractId = parseInt(request.params.id);
        if (isNaN(contractId)) {
            return reply.code(400).send({ error: "Invalid contract ID" });
        }

        const products = parseProductsInput(request.body?.products ?? request.body);
        if (products.length === 0) {
            return reply.code(400).send({ error: "products array is required with at least one item" });
        }

        try {
            const exists = await prisma.contract.findUnique({ where: { id: contractId } });
            if (!exists) {
                return reply.code(404).send({ error: "Contract not found" });
            }

            await prisma.$transaction(async (tx) => {
                await tx.contractProduct.deleteMany({ where: { contract_id: contractId } });
                await tx.contractProduct.createMany({
                    data: products.map(p => ({
                        contract_id: contractId,
                        product_id: Number(p.product_id),
                        price: p.price != null ? Number(p.price) : null,
                        quantity: p.quantity != null ? Number(p.quantity) : null,
                        pack_id: p.pack_id != null ? Number(p.pack_id) : null,
                        status: 'active',
                        deleted: false
                    }))
                });

                await createContractActivityLog(tx, {
                    contractId,
                    request,
                    action: 'CONTRACT_PRODUCTS_UPDATE',
                    details: `Replaced ${products.length} contract product line(s)`,
                    reference: String(contractId),
                    payload: { products }
                });
            });

            const contract = await prisma.contract.findUnique({
                where: { id: contractId },
                include: { ContractProduct: true }
            });
            const { ContractProduct, ...rest } = contract;
            return { ...rest, products: mapContractProductsToProducts(ContractProduct) };
        } catch (error) {
            request.log.error(error);
            if (error.code === 'P2003') {
                return reply.code(400).send({ error: "Invalid product_id or pack_id" });
            }
            return reply.code(500).send({ error: error.message || "Failed to save products" });
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
        const contractId = parseInt(id);
        try {
            await prisma.$transaction(async (tx) => {
                const existing = await tx.contract.findUnique({
                    where: { id: contractId },
                    select: { id: true, name: true }
                });

                await createContractActivityLog(tx, {
                    contractId,
                    request,
                    action: 'CONTRACT_DELETE',
                    details: 'Contract deleted',
                    reference: existing?.name ?? String(contractId),
                    payload: { id: contractId }
                });

                await tx.contract.delete({
                    where: { id: contractId },
                });
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

    // GET contract activity logs
    fastify.get("/contracts/:id/activity", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const contractId = parseInt(request.params.id);
        if (isNaN(contractId)) {
            return reply.code(400).send({ error: "Invalid contract ID" });
        }

        const logs = await prisma.contractActivityLog.findMany({
            where: { contract_id: contractId },
            orderBy: { createdAt: 'desc' }
        });
        return logs;
    });
}

export default contractsRoutes;

