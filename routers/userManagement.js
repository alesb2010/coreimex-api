async function userManagementRoutes(fastify, options) {
    const { prisma } = options;

    /**
     * GET /api/v1/auth/users
     * List users with search & pagination
     */
    fastify.get("/auth/users", {
        preHandler: [fastify.requireRole("admin")],
        schema: {
            tags: ["User Management"],
            security: [{ bearerAuth: [] }],
            querystring: {
                type: "object",
                properties: {
                    search: { type: "string" },
                    page: { type: "integer", minimum: 1, default: 1 },
                    pageSize: { type: "integer", minimum: 1, maximum: 100, default: 10 },
                }
            }
        }
    }, async (request, reply) => {
        const {
            search = "",
            page = 1,
            pageSize = 10
        } = request.query;

        const pageNumber = Number(page) || 1;
        const pageSizeNumber = Math.min(Number(pageSize) || 10, 100);

        const where = {
            deleted: false,
            ...(search
                ? {
                    OR: [
                        { email: { contains: search, mode: "insensitive" } },
                        { name: { contains: search, mode: "insensitive" } },
                    ]
                }
                : {})
        };

        const [total, users] = await Promise.all([
            prisma.user.count({ where }),
            prisma.user.findMany({
                where,
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                orderBy: { createdAt: "desc" }
            })
        ]);

        const items = users.map((u) => ({
            id: u.id,
            userId: u.superTokensUserId,
            email: u.email,
            name: u.name,
            roles: u.role ? [u.role] : [],
            active: u.active,
            createdAt: u.createdAt,
            lastActive: u.updatedAt
        }));

        return {
            items,
            total,
            page: pageNumber,
            pageSize: pageSizeNumber
        };
    });

    /**
     * PUT /api/v1/auth/users/:id
     * Update user fields (currently: roles, name, active)
     */
    fastify.put("/auth/users/:id", {
        preHandler: [fastify.requireRole("admin")],
        schema: {
            tags: ["User Management"],
            security: [{ bearerAuth: [] }],
            params: {
                type: "object",
                required: ["id"],
                properties: {
                    id: { type: "integer" }
                }
            },
            body: {
                type: "object",
                properties: {
                    roles: {
                        type: "array",
                        items: { type: "string" }
                    },
                    name: { type: "string" },
                    active: { type: "boolean" }
                },
                additionalProperties: true
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const { roles, name, active, ...rest } = request.body || {};

        if (roles && (!Array.isArray(roles) || roles.length === 0)) {
            return reply.code(400).send({
                error: "Bad Request",
                message: "roles must be a non-empty array when provided"
            });
        }

        const data = {
            ...(roles && roles.length > 0 ? { role: roles[0] } : {}),
            ...(typeof name !== "undefined" ? { name } : {}),
            ...(typeof active !== "undefined" ? { active } : {}),
            ...(Object.keys(rest).length > 0 ? rest : {})
        };

        try {
            const updated = await prisma.user.update({
                where: { id: Number(id) },
                data
            });

            return {
                id: updated.id,
                userId: updated.superTokensUserId,
                email: updated.email,
                name: updated.name,
                roles: updated.role ? [updated.role] : [],
                active: updated.active,
                createdAt: updated.createdAt,
                lastActive: updated.updatedAt
            };
        } catch (error) {
            request.log.error({ msg: "Failed to update user", error });
            return reply.code(404).send({
                error: "Not Found",
                message: "User not found"
            });
        }
    });

    /**
     * GET /api/v1/auth/roles
     * List roles with search & pagination
     */
    fastify.get("/auth/roles", {
        preHandler: [fastify.requireRole("admin")],
        schema: {
            tags: ["Roles"],
            security: [{ bearerAuth: [] }],
            querystring: {
                type: "object",
                properties: {
                    search: { type: "string" },
                    page: { type: "integer", minimum: 1, default: 1 },
                    pageSize: { type: "integer", minimum: 1, maximum: 100, default: 10 },
                }
            }
        }
    }, async (request, reply) => {
        const {
            search = "",
            page = 1,
            pageSize = 10
        } = request.query;

        const pageNumber = Number(page) || 1;
        const pageSizeNumber = Math.min(Number(pageSize) || 10, 100);

        const where = {
            deleted: false,
            ...(search
                ? {
                    OR: [
                        { name: { contains: search, mode: "insensitive" } },
                        { description: { contains: search, mode: "insensitive" } },
                    ]
                }
                : {})
        };

        const [total, roles] = await Promise.all([
            prisma.role.count({ where }),
            prisma.role.findMany({
                where,
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                orderBy: { createdAt: "desc" }
            })
        ]);

        const items = roles.map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            permissions: r.permissions
        }));

        return {
            items,
            total,
            page: pageNumber,
            pageSize: pageSizeNumber
        };
    });

    /**
     * POST /api/v1/auth/roles
     * Create role
     */
    fastify.post("/auth/roles", {
        preHandler: [fastify.requireRole("admin")],
        schema: {
            tags: ["Roles"],
            security: [{ bearerAuth: [] }],
            body: {
                type: "object",
                required: ["name"],
                properties: {
                    name: { type: "string" },
                    description: { type: "string" },
                    permissions: {
                        type: "array",
                        items: { type: "string" },
                        default: []
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { name, description, permissions = [] } = request.body;

        try {
            const role = await prisma.role.create({
                data: {
                    name,
                    description: description || null,
                    permissions
                }
            });

            reply.code(201).send({
                id: role.id,
                name: role.name,
                description: role.description,
                permissions: role.permissions
            });
        } catch (error) {
            request.log.error({ msg: "Failed to create role", error });
            return reply.code(400).send({
                error: "Bad Request",
                message: "Could not create role (maybe name already exists)"
            });
        }
    });

    /**
     * PUT /api/v1/auth/roles/:id
     * Update role
     */
    fastify.put("/auth/roles/:id", {
        preHandler: [fastify.requireRole("admin")],
        schema: {
            tags: ["Roles"],
            security: [{ bearerAuth: [] }],
            params: {
                type: "object",
                required: ["id"],
                properties: {
                    id: { type: "integer" }
                }
            },
            body: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    description: { type: "string" },
                    permissions: {
                        type: "array",
                        items: { type: "string" }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;
        const { name, description, permissions } = request.body || {};

        const data = {
            ...(typeof name !== "undefined" ? { name } : {}),
            ...(typeof description !== "undefined" ? { description } : {}),
            ...(typeof permissions !== "undefined" ? { permissions } : {})
        };

        if (Object.keys(data).length === 0) {
            return reply.code(400).send({
                error: "Bad Request",
                message: "No fields to update"
            });
        }

        try {
            const role = await prisma.role.update({
                where: { id: Number(id) },
                data
            });

            return {
                id: role.id,
                name: role.name,
                description: role.description,
                permissions: role.permissions
            };
        } catch (error) {
            request.log.error({ msg: "Failed to update role", error });
            return reply.code(404).send({
                error: "Not Found",
                message: "Role not found"
            });
        }
    });

    /**
     * DELETE /api/v1/auth/roles/:id
     * Soft-delete role
     */
    fastify.delete("/auth/roles/:id", {
        preHandler: [fastify.requireRole("admin")],
        schema: {
            tags: ["Roles"],
            security: [{ bearerAuth: [] }],
            params: {
                type: "object",
                required: ["id"],
                properties: {
                    id: { type: "integer" }
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request.params;

        try {
            await prisma.role.delete({
                where: { id: Number(id) }
            });

            reply.code(204).send();
        } catch (error) {
            request.log.error({ msg: "Failed to delete role", error });
            return reply.code(404).send({
                error: "Not Found",
                message: "Role not found"
            });
        }
    });
}

export default userManagementRoutes;

