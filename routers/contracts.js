async function contractsRoutes(fastify, options) {
    const { prisma } = options;

    /**
     * Builds a Prisma where clause from query params for complex contract filtering.
     * Supports full-text search, date ranges, numeric ranges, exact matches, and array filters.
     * Designed for scalability with millions of records via indexed fields (IDs, dates).
     */
    function buildContractWhere(query) {
        const where = { AND: [] };

        // Exclude deleted by default unless includeDeleted=true
        if (query.includeDeleted !== 'true' && query.includeDeleted !== true) {
            where.AND.push({ deleted: false });
        }

        // --- Full-text search (q or search) - matches principal contract fields ---
        const searchTerm = (query.q ?? query.search ?? '').trim();
        if (searchTerm) {
            where.AND.push({
                OR: [
                    { name: { contains: searchTerm, mode: 'insensitive' } },
                    { description: { contains: searchTerm, mode: 'insensitive' } },
                    { destination_country: { contains: searchTerm, mode: 'insensitive' } },
                    { destination_port: { contains: searchTerm, mode: 'insensitive' } },
                    { shipping_company: { contains: searchTerm, mode: 'insensitive' } },
                    { payment_terms: { contains: searchTerm, mode: 'insensitive' } },
                    { payment_method: { contains: searchTerm, mode: 'insensitive' } },
                    { payment_currency: { contains: searchTerm, mode: 'insensitive' } },
                    { payment_status: { contains: searchTerm, mode: 'insensitive' } },
                    { payment_notes: { contains: searchTerm, mode: 'insensitive' } },
                    { payment_notes_seller: { contains: searchTerm, mode: 'insensitive' } },
                    { payment_notes_customer: { contains: searchTerm, mode: 'insensitive' } },
                    { status: { contains: searchTerm, mode: 'insensitive' } },
                    { special_terms: { hasSome: [searchTerm] } },
                    { business_terms: { hasSome: [searchTerm] } },
                    { legal_terms: { hasSome: [searchTerm] } },
                    { other_terms: { hasSome: [searchTerm] } },
                    { incoterm: { hasSome: [searchTerm] } },
                    { packing: { hasSome: [searchTerm] } }
                ]
            });
        }

        // --- Exact match: customer_party_a_id ---
        if (query.customer_party_a_id != null && query.customer_party_a_id !== '') {
            const v = parseInt(query.customer_party_a_id, 10);
            if (!isNaN(v)) where.AND.push({ customer_party_a_id: v });
        }

        // --- Exact match: customer_party_b_id ---
        if (query.customer_party_b_id != null && query.customer_party_b_id !== '') {
            const v = parseInt(query.customer_party_b_id, 10);
            if (!isNaN(v)) where.AND.push({ customer_party_b_id: v });
        }

        // --- Filter by customer (either party) ---
        if (query.customer_id != null && query.customer_id !== '') {
            const v = parseInt(query.customer_id, 10);
            if (!isNaN(v)) {
                where.AND.push({
                    OR: [
                        { customer_party_a_id: v },
                        { customer_party_b_id: v }
                    ]
                });
            }
        }

        // --- Filter by product (contracts containing this product) ---
        if (query.product_id != null && query.product_id !== '') {
            const v = parseInt(query.product_id, 10);
            if (!isNaN(v)) where.AND.push({ products_id: { has: v } });
        }

        // --- Exact: status, payment_status, active ---
        if (query.status != null && query.status !== '') {
            where.AND.push({ status: String(query.status) });
        }
        if (query.payment_status != null && query.payment_status !== '') {
            where.AND.push({ payment_status: String(query.payment_status) });
        }
        if (query.active != null && query.active !== '') {
            const activeVal = query.active === 'true' || query.active === true || query.active === '1';
            where.AND.push({ active: activeVal });
        }

        // --- Date range filters ---
        const dateRanges = [
            ['date_creation', 'date_creation_from', 'date_creation_to'],
            ['date_expiration', 'date_expiration_from', 'date_expiration_to'],
            ['date_signature', 'date_signature_from', 'date_signature_to'],
            ['date_expiration_signature', 'date_expiration_signature_from', 'date_expiration_signature_to'],
            ['date_signature_party_a', 'date_signature_party_a_from', 'date_signature_party_a_to'],
            ['date_expiration_signature_party_a', 'date_expiration_signature_party_a_from', 'date_expiration_signature_party_a_to'],
            ['date_signature_party_b', 'date_signature_party_b_from', 'date_signature_party_b_to'],
            ['date_expiration_signature_party_b', 'date_expiration_signature_party_b_from', 'date_expiration_signature_party_b_to'],
            ['bording_date', 'bording_date_from', 'bording_date_to'],
            ['shipment_date', 'shipment_date_from', 'shipment_date_to'],
            ['payment_date', 'payment_date_from', 'payment_date_to']
        ];
        for (const [field, fromKey, toKey] of dateRanges) {
            const fromVal = query[fromKey];
            const toVal = query[toKey];
            if (fromVal || toVal) {
                const range = {};
                if (fromVal) {
                    const d = new Date(fromVal);
                    if (!isNaN(d.getTime())) range.gte = d;
                }
                if (toVal) {
                    const d = new Date(toVal);
                    if (!isNaN(d.getTime())) range.lte = d;
                }
                if (Object.keys(range).length) where.AND.push({ [field]: range });
            }
        }

        // --- Numeric range: mt_value, payment_amount ---
        if (query.mt_value_min != null && query.mt_value_min !== '') {
            const v = parseFloat(query.mt_value_min);
            if (!isNaN(v)) where.AND.push({ mt_value: { gte: v } });
        }
        if (query.mt_value_max != null && query.mt_value_max !== '') {
            const v = parseFloat(query.mt_value_max);
            if (!isNaN(v)) where.AND.push({ mt_value: { lte: v } });
        }
        if (query.payment_amount_min != null && query.payment_amount_min !== '') {
            const v = parseFloat(query.payment_amount_min);
            if (!isNaN(v)) where.AND.push({ payment_amount: { gte: v } });
        }
        if (query.payment_amount_max != null && query.payment_amount_max !== '') {
            const v = parseFloat(query.payment_amount_max);
            if (!isNaN(v)) where.AND.push({ payment_amount: { lte: v } });
        }

        // --- Array contains: incoterm, packing ---
        if (query.incoterm != null && query.incoterm !== '') {
            where.AND.push({ incoterm: { has: String(query.incoterm) } });
        }
        if (query.packing != null && query.packing !== '') {
            where.AND.push({ packing: { has: String(query.packing) } });
        }

        // --- Payment currency exact match ---
        if (query.payment_currency != null && query.payment_currency !== '') {
            where.AND.push({ payment_currency: String(query.payment_currency) });
        }

        // --- Destination country / port / shipping company (partial match) ---
        if (query.destination_country != null && query.destination_country !== '') {
            where.AND.push({ destination_country: { contains: String(query.destination_country), mode: 'insensitive' } });
        }
        if (query.destination_port != null && query.destination_port !== '') {
            where.AND.push({ destination_port: { contains: String(query.destination_port), mode: 'insensitive' } });
        }
        if (query.shipping_company != null && query.shipping_company !== '') {
            where.AND.push({ shipping_company: { contains: String(query.shipping_company), mode: 'insensitive' } });
        }

        // Flatten: if only deleted filter, simplify
        const filters = where.AND.filter((f) => Object.keys(f).length > 0);
        if (filters.length === 0) return {};
        if (filters.length === 1) return filters[0];
        return { AND: filters };
    }

    /**
     * Returns orderBy clause for Prisma from sortBy/sortOrder query params.
     */
    function buildContractOrderBy(query) {
        const sortBy = (query.sortBy ?? query.sort_by ?? 'createdAt').toString();
        const sortOrder = (query.sortOrder ?? query.sort_order ?? 'desc').toString().toLowerCase();
        const order = sortOrder === 'asc' ? 'asc' : 'desc';

        const allowedSort = [
            'id', 'name', 'createdAt', 'date_creation', 'date_expiration', 'date_signature',
            'mt_value', 'payment_amount', 'payment_date', 'shipment_date', 'status',
            'destination_country', 'shipping_company'
        ];
        if (!allowedSort.includes(sortBy)) {
            return { createdAt: 'desc' };
        }
        return { [sortBy]: order };
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

    // GET all contracts with full filter system (paginated)
    fastify.get("/contracts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contracts'],
            security: [{ bearerAuth: [] }],
            querystring: {
                type: 'object',
                properties: {
                    // Full-text search across name, description, destinations, payment, terms, etc.
                    q: { type: 'string', description: 'Full-text search across principal contract fields' },
                    search: { type: 'string', description: 'Alias for q' },
                    // Exact matches
                    customer_party_a_id: { type: 'integer', description: 'Filter by party A (customer) ID' },
                    customer_party_b_id: { type: 'integer', description: 'Filter by party B (customer) ID' },
                    customer_id: { type: 'integer', description: 'Filter by customer ID (either party)' },
                    product_id: { type: 'integer', description: 'Filter contracts containing this product' },
                    status: { type: 'string', description: 'Contract status' },
                    payment_status: { type: 'string', description: 'Payment status' },
                    payment_currency: { type: 'string', description: 'Payment currency code' },
                    active: { type: 'boolean', description: 'Filter by active flag' },
                    // Date ranges (ISO-8601 or YYYY-MM-DD)
                    date_creation_from: { type: 'string', description: 'Date creation from' },
                    date_creation_to: { type: 'string', description: 'Date creation to' },
                    date_expiration_from: { type: 'string', description: 'Date expiration from' },
                    date_expiration_to: { type: 'string', description: 'Date expiration to' },
                    payment_date_from: { type: 'string', description: 'Payment date from' },
                    payment_date_to: { type: 'string', description: 'Payment date to' },
                    shipment_date_from: { type: 'string', description: 'Shipment date from' },
                    shipment_date_to: { type: 'string', description: 'Shipment date to' },
                    date_signature_from: { type: 'string', description: 'Date signature from' },
                    date_signature_to: { type: 'string', description: 'Date signature to' },
                    // Numeric ranges
                    mt_value_min: { type: 'number', description: 'Minimum mt_value' },
                    mt_value_max: { type: 'number', description: 'Maximum mt_value' },
                    payment_amount_min: { type: 'number', description: 'Minimum payment amount' },
                    payment_amount_max: { type: 'number', description: 'Maximum payment amount' },
                    // Array contains
                    incoterm: { type: 'string', description: 'Filter by incoterm (e.g. FOB, CIF)' },
                    packing: { type: 'string', description: 'Filter by packing type' },
                    // Partial match on logistics
                    destination_country: { type: 'string', description: 'Partial match destination country' },
                    destination_port: { type: 'string', description: 'Partial match destination port' },
                    shipping_company: { type: 'string', description: 'Partial match shipping company' },
                    // Pagination & sort
                    page: { type: 'integer', minimum: 1, default: 1, description: 'Page number' },
                    pageSize: { type: 'integer', minimum: 1, maximum: 1000, default: 20, description: 'Items per page' },
                    sortBy: { type: 'string', description: 'Sort field (id, name, date_creation, mt_value, etc.)' },
                    sortOrder: { type: 'string', enum: ['asc', 'desc'], description: 'Sort direction' },
                    includeDeleted: { type: 'boolean', description: 'Include soft-deleted contracts' }
                }
            }
        }
    }, async (request, reply) => {
        const query = request.query || {};
        const page = Math.max(1, parseInt(query.page, 10) || 1);
        const pageSize = Math.min(100, Math.max(1, parseInt(query.pageSize || query.page_size, 10) || 20));
        const skip = (page - 1) * pageSize;

        const where = buildContractWhere(query);
        const orderBy = buildContractOrderBy(query);

        const [total, contracts] = await Promise.all([
            prisma.contract.count({ where }),
            prisma.contract.findMany({
                where,
                skip,
                take: pageSize,
                orderBy,
                include: {
                    ContractProduct: {
                        where: { deleted: false },
                        include: { Product: true }
                    },
                    PartyA: { select: { id: true, name: true, full_name: true, country: true } },
                    PartyB: { select: { id: true, name: true, full_name: true, country: true } }
                }
            })
        ]);

        return {
            items: contracts,
            total,
            page,
            pageSize,
            totalPages: Math.ceil(total / pageSize)
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
            include: {
                ContractProduct: {
                    where: { deleted: false },
                    include: { Product: true }
                },
                PartyA: true,
                PartyB: true
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
            'date_expiration_signature',
            'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'bording_date', 'shipment_date', 'payment_date'
        ];

        // Only pick valid Contract fields from schema (no product_price; products go via ContractProduct)
        const allowedFields = [
            'name', 'description', 'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature',
            'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'customer_party_a_id', 'customer_party_b_id', 'products_id', 'bording_date', 'mt_value',
            'destination_country', 'destination_port', 'shipping_company', 'shipment_date', 'si_sent', 'packing',
            'incoterm', 'payment_terms', 'payment_method', 'payment_currency', 'payment_amount',
            'payment_date', 'payment_status', 'payment_notes', 'payment_attachments',
            'payment_notes_party_a', 'payment_attachments_party_a',
            'payment_notes_party_b', 'payment_attachments_party_b',
            'special_terms', 'business_terms', 'legal_terms', 'other_terms',
            'other_terms_party_a', 'other_terms_party_b',
            'other_terms_party_a_party_b', 'other_terms_party_a_party_b_party_a',
            'other_terms_party_b_party_a', 'other_terms_party_b_party_a_party_b',
            'commission_party_a', 'commission_party_b', 'comission_total', 'attachments', 'active', 'status', 'deleted'
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
            'date_expiration_signature',
            'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'bording_date', 'shipment_date', 'payment_date'
        ];

        // Only pick valid Contract fields from schema (no product_price; products via ContractProduct)
        const allowedFields = [
            'name', 'description', 'date_creation', 'date_expiration', 'date_signature',
            'date_expiration_signature',
            'date_signature_party_a', 'date_expiration_signature_party_a',
            'date_signature_party_b', 'date_expiration_signature_party_b',
            'customer_party_a_id', 'customer_party_b_id', 'products_id', 'bording_date', 'mt_value',
            'destination_country', 'destination_port', 'shipping_company', 'shipment_date', 'si_sent', 'packing',
            'incoterm', 'payment_terms', 'payment_method', 'payment_currency', 'payment_amount',
            'payment_date', 'payment_status', 'payment_notes', 'payment_attachments',
            'payment_notes_party_a', 'payment_attachments_party_a',
            'payment_notes_party_b', 'payment_attachments_party_b',
            'special_terms', 'business_terms', 'legal_terms', 'other_terms',
            'other_terms_party_a', 'other_terms_party_b',
            'other_terms_party_a_party_b', 'other_terms_party_a_party_b_party_a',
            'other_terms_party_b_party_a', 'other_terms_party_b_party_a_party_b',
            'commission_party_a', 'commission_party_b', 'comission_total', 'attachments', 'active', 'status', 'deleted'
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

