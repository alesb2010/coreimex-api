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
                customer: true,
                seller: true
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
                customer: true,
                seller: true
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
                customer: true,
                seller: true
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
                customer: true,
                seller: true
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
                customer: true,
                seller: true
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
        // Exclude fields that shouldn't be updated directly
        const { id: _id, customer, seller, createdAt, updatedAt, ...data } = request.body;
        try {
            const contact = await prisma.contact.update({
                where: { id: parseInt(id) },
                data,
                include: {
                    customer: true,
                    seller: true
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


