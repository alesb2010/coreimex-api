async function contactsRoutes(fastify, options) {
    const { prisma } = options;

    // GET all contacts
    fastify.get("/contacts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contacts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        return prisma.contact.findMany({
            include: {
                Customer: true,
                Seller: true
            }
        });
    });

    // GET contact by ID
    fastify.get("/contacts/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contacts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const contact = await prisma.contact.findUnique({
            where: { id: parseInt(id) },
            include: {
                Customer: true,
                Seller: true
            }
        });
        if (!contact) {
            reply.code(404).send({ error: "Contact not found" });
            return;
        }
        return contact;
    });

    // GET contacts by customer ID
    fastify.get("/contacts/customer/:customerId", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contacts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { customerId } = request.params;
        return prisma.contact.findMany({
            where: { customer_id: parseInt(customerId) },
            include: {
                Customer: true,
                Seller: true
            }
        });
    });

    // GET contacts by seller ID
    fastify.get("/contacts/seller/:sellerId", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contacts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { sellerId } = request.params;
        return prisma.contact.findMany({
            where: { seller_id: parseInt(sellerId) },
            include: {
                Customer: true,
                Seller: true
            }
        });
    });

    // POST create contact
    fastify.post("/contacts", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contacts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const data = request.body;
        const contact = await prisma.contact.create({
            data,
            include: {
                Customer: true,
                Seller: true
            }
        });
        reply.code(201).send(contact);
    });

    // PUT update contact
    fastify.put("/contacts/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contacts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const body = request.body || {};
        // Exclude relation fields and system fields - passing Customer/Seller to Prisma causes
        // prisma-extension-nested-operations to fail when it encounters null/undefined
        const { id: _id, customer, seller, Customer, Seller, createdAt, updatedAt, ...data } = body;
        try {
            const contact = await prisma.contact.update({
                where: { id: parseInt(id) },
                data,
                include: {
                    Customer: true,
                    Seller: true
                }
            });
            return contact;
        } catch (error) {
            console.log(error);
            reply.code(404).send({ error: "Contact not found" });
        }
    });

    // DELETE contact
    fastify.delete("/contacts/:id", {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Contacts'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const { id } = request.params;
        try {
            await prisma.contact.delete({
                where: { id: parseInt(id) },
            });
            reply.code(204).send();
        } catch (error) {
            reply.code(404).send({ error: "Contact not found" });
        }
    });
}

export default contactsRoutes;


