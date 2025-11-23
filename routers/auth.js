import bcrypt from 'bcrypt';

async function authRoutes(fastify, options) {
    const { prisma } = options;

    // Login endpoint
    fastify.post('/auth/login', {
        schema: {
            tags: ['Authentication'],
            body: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', minLength: 6 }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        token: { type: 'string' },
                        user: {
                            type: 'object',
                            properties: {
                                id: { type: 'number' },
                                email: { type: 'string' },
                                name: { type: 'string' },
                                role: { type: 'string' }
                            }
                        }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const { email, password } = request.body;

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user || !user.active) {
            reply.code(401).send({ error: 'Invalid credentials' });
            return;
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            reply.code(401).send({ error: 'Invalid credentials' });
            return;
        }

        // Generate JWT token
        const token = fastify.jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        });

        return {
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        };
    });

    // Register endpoint
    fastify.post('/auth/register', {
        schema: {
            tags: ['Authentication'],
            body: {
                type: 'object',
                required: ['email', 'password', 'name'],
                properties: {
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', minLength: 6 },
                    name: { type: 'string' },
                    role: { type: 'string', default: 'user' }
                }
            }
        }
    }, async (request, reply) => {
        const { email, password, name, role = 'user' } = request.body;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            reply.code(409).send({ error: 'User already exists' });
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role
            }
        });

        // Generate JWT token
        const token = fastify.jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        });

        reply.code(201).send({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    });

    // Get current user (protected route)
    fastify.get('/auth/me', {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Authentication'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        const userId = request.user.id;
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                active: true,
                createdAt: true
            }
        });

        if (!user) {
            reply.code(404).send({ error: 'User not found' });
            return;
        }

        return user;
    });
}

export default authRoutes;