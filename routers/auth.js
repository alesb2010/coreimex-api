import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";

async function authRoutes(fastify, options) {
    const { prisma } = options;

    // Sign in endpoint
    fastify.post('/auth/login', {
        schema: {
            tags: ['Authentication'],
            body: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string' }
                }
            }
        }
    }, async (request, reply) => {
        const { email, password } = request.body;

        try {
            // Correct SuperTokens signIn usage - pass tenantId, email, password
            const signInResponse = await EmailPassword.signIn("public", email, password);

            if (signInResponse.status === "OK") {
                // Create session for the user
                await Session.createNewSession(request, reply, "public", signInResponse.recipeUserId);

                // Get user from database
                const user = await prisma.user.findUnique({
                    where: { superTokensUserId: signInResponse.user.id }
                });

                return reply.send({
                    status: "OK",
                    user: user ? {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role
                    } : null
                });
            } else if (signInResponse.status === "WRONG_CREDENTIALS_ERROR") {
                return reply.code(401).send({
                    error: "WRONG_CREDENTIALS_ERROR",
                    message: "Invalid credentials"
                });
            } else {
                return reply.code(401).send({
                    error: signInResponse.status,
                    message: "Sign in failed"
                });
            }
        } catch (error) {
            if (reply.sent) {
                return;
            }

            let errorMessage = "Internal server error";
            if (error && typeof error === 'object' && 'message' in error) {
                errorMessage = String(error.message);
            }

            return reply.code(500).send({
                error: "Internal server error",
                message: errorMessage
            });
        }
    });

    // Register endpoint
    fastify.post('/auth/register', {
        schema: {
            tags: ['Authentication'],
            security: [{ bearerAuth: [] }],
            body: {
                type: 'object',
                required: ['email', 'password', 'name'],
                properties: {
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', minLength: 6 },
                    name: { type: 'string' },
                    role: { type: 'string' }
                }
            }
        }
    }, async (request, reply) => {
        const { email, password, name, role } = request.body;

        try {
            // Correct SuperTokens signUp usage - pass tenantId, email, password
            const signUpResponse = await EmailPassword.signUp("public", email, password);

            if (signUpResponse.status === "OK") {
                // Create session for the user
                // await Session.createNewSession(request, reply, "public", signUpResponse.recipeUserId);

                // Create user in database
                try {
                    const user = await prisma.user.upsert({
                        where: { superTokensUserId: signUpResponse.user.id },
                        update: {},
                        create: {
                            superTokensUserId: signUpResponse.user.id,
                            email: email,
                            name: name,
                            role: role
                        }
                    });

                    return reply.send({
                        status: "OK",
                        user: {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            role: user.role
                        }
                    });
                } catch (dbError) {
                    const existingUser = await prisma.user.findUnique({
                        where: { superTokensUserId: signUpResponse.user.id }
                    });

                    if (existingUser) {
                        return reply.send({
                            status: "OK",
                            user: {
                                id: existingUser.id,
                                email: existingUser.email,
                                name: existingUser.name,
                                role: existingUser.role
                            }
                        });
                    }

                    let errorMessage = "Database error";
                    if (dbError && typeof dbError === 'object' && 'message' in dbError) {
                        errorMessage = String(dbError.message);
                    }

                    return reply.code(500).send({
                        error: "Internal server error",
                        message: errorMessage
                    });
                }
            } else if (signUpResponse.status === "EMAIL_ALREADY_EXISTS_ERROR") {
                return reply.code(409).send({
                    error: "EMAIL_ALREADY_EXISTS_ERROR",
                    message: "User already exists"
                });
            } else {
                return reply.code(400).send({
                    error: signUpResponse.status,
                    message: "Sign up failed"
                });
            }
        } catch (error) {
            if (reply.sent) {
                return;
            }

            let errorMessage = "Internal server error";
            if (error && typeof error === 'object' && 'message' in error) {
                errorMessage = String(error.message);
            }

            return reply.code(500).send({
                error: "Internal server error",
                message: errorMessage
            });
        }
    });

    // Sign out endpoint
    fastify.post('/auth/signout', {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Authentication'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        try {
            // Revoke the session
            await request.user.session.revokeSession();

            return reply.send({ status: "OK" });
        } catch (error) {
            if (reply.sent) {
                return;
            }

            let errorMessage = "Internal server error";
            if (error && typeof error === 'object' && 'message' in error) {
                errorMessage = String(error.message);
            }

            return reply.code(500).send({
                error: "Internal server error",
                message: errorMessage
            });
        }
    });

    // Get current user (protected route)
    fastify.get('/auth/me', {
        preHandler: [fastify.authenticate],
        schema: {
            tags: ['Authentication'],
            security: [{ bearerAuth: [] }]
        }
    }, async (request, reply) => {
        try {
            const userId = request.user.id;
            const user = await prisma.user.findUnique({
                where: { superTokensUserId: userId },
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
                return reply.code(404).send({ error: 'User not found' });
            }

            return reply.send(user);
        } catch (error) {
            if (reply.sent) {
                return;
            }

            let errorMessage = "Internal server error";
            if (error && typeof error === 'object' && 'message' in error) {
                errorMessage = String(error.message);
            }

            return reply.code(500).send({
                error: "Internal server error",
                message: errorMessage
            });
        }
    });
}

export default authRoutes;