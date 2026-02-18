import fp from 'fastify-plugin';
import supertokens from 'supertokens-node';
import { plugin as supertokensFastifyPlugin } from 'supertokens-node/framework/fastify';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Session from 'supertokens-node/recipe/session';
import Dashboard from "supertokens-node/recipe/dashboard";
import { verifySession } from 'supertokens-node/recipe/session/framework/fastify';

async function supertokensPlugin(fastify, options) {
    const { prisma } = options;

    // Validate required environment variables
    if (!process.env.SUPERTOKENS_CONNECTION_URI) {
        throw new Error(
            'SUPERTOKENS_CONNECTION_URI environment variable is required. ' +
            'Please set it in your .env file with your SuperTokens server URL.'
        );
    }

    // Initialize SuperTokens
    supertokens.init({
        framework: 'fastify',
        supertokens: {
            connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
            ...(process.env.SUPERTOKENS_API_KEY && { apiKey: process.env.SUPERTOKENS_API_KEY })
        },
        appInfo: {
            appName: "COREIMEX API",
            apiDomain: process.env.API_DOMAIN || "http://localhost:4000",
            websiteDomain: process.env.WEBSITE_DOMAIN || "http://localhost:3000",
            apiBasePath: "/api/v1/auth",
            websiteBasePath: "/auth"
        },
        recipeList: [
            EmailPassword.init({
                signUpFeature: {
                    formFields: [
                        {
                            id: "name",
                            validate: async (value) => {
                                if (value === undefined || value === null || value === "") {
                                    return "Name is required";
                                }
                                return undefined;
                            }
                        }
                    ]
                },
                override: {
                    apis: (originalImplementation) => {
                        return {
                            ...originalImplementation,
                            signUpPOST: undefined,
                            // signUpPOST: async (input) => {
                            //     const response = await originalImplementation.signUpPOST(input);

                            //     if (response.status === "OK" && prisma) {
                            //         const formFields = input.formFields;
                            //         const nameField = formFields.find(f => f.id === "name");

                            //         try {
                            //             await prisma.user.create({
                            //                 data: {
                            //                     superTokensUserId: response.user.id,
                            //                     email: response.user.email,
                            //                     name: nameField?.value || null,
                            //                     role: "user"
                            //                 }
                            //             });
                            //         } catch (error) {
                            //             console.error("Failed to create user in database:", error);
                            //         }
                            //     }

                            //     return response;
                            // }
                        };
                    }
                }
            }),
            Session.init({
                // In production, default to .coreimex.com so cookies are valid for all subdomains
                // (app.coreimex.com, api.app.coreimex.com, etc.). Allow override via COOKIE_DOMAIN.
                cookieDomain:
                    process.env.COOKIE_DOMAIN ||
                    (process.env.NODE_ENV === "production" ? ".coreimex.com" : undefined),
                cookieSecure: process.env.NODE_ENV === "production",
                // Lax is usually the right choice for same-site, and works fine across subdomains.
                cookieSameSite: "lax"
            }),
            Dashboard.init({
                apiKey: process.env.SUPERTOKENS_DASHBOARD_API_KEY,
            })
        ]
    });

    // Register SuperTokens Fastify plugin
    await fastify.register(supertokensFastifyPlugin);

    // Don't set SuperTokens error handler - let the global one handle it
    // The global error handler in server.js will catch all errors safely

    // Decorate request with authenticate method
    fastify.decorate('authenticate', async function (request, reply) {
        try {
            const session = await Session.getSession(request, reply);
            if (!session) {
                fastify.log.warn({
                    msg: "No session returned by SuperTokens",
                    cookies: request.headers.cookie,
                    origin: request.headers.origin,
                    path: request.raw.url
                });
                if (!reply.sent) {
                    reply.code(401).send({
                        error: 'Unauthorized',
                        message: 'Invalid or missing session'
                    });
                }
                return;
            }

            const userId = session.getUserId();
            request.user = {
                id: userId,
                session: session
            };
        } catch (err) {
            fastify.log.error({
                msg: "Error in fastify.authenticate",
                error: err && err.message ? err.message : err,
                cookies: request.headers.cookie,
                origin: request.headers.origin,
                path: request.raw.url
            });
            if (!reply.sent) {
                let errorMessage = "Unauthorized";
                if (err && typeof err === 'object' && 'message' in err) {
                    errorMessage = String(err.message);
                }
                reply.code(401).send({
                    error: 'Unauthorized',
                    message: errorMessage
                });
            }
        }
    });

    // Decorate with permission check
    fastify.decorate('requireRole', function (...allowedRoles) {
        return async function (request, reply) {
            // First verify session
            try {
                const session = await Session.getSession(request, reply);
                if (!session) {
                    if (!reply.sent) {
                        reply.code(401).send({
                            error: 'Unauthorized',
                            message: 'Invalid or missing session'
                        });
                    }
                    return;
                }

                const userId = session.getUserId();
                request.user = {
                    id: userId,
                    session: session
                };
            } catch (err) {
                if (!reply.sent) {
                    let errorMessage = "Unauthorized";
                    if (err && typeof err === 'object' && 'message' in err) {
                        errorMessage = String(err.message);
                    }
                    reply.code(401).send({
                        error: 'Unauthorized',
                        message: errorMessage
                    });
                }
                return;
            }

            // Then check role (sync user from SuperTokens if missing in DB)
            let user = await prisma.user.findUnique({
                where: { superTokensUserId: request.user.id }
            });

            if (!user) {
                // Session valid but no Prisma row (e.g. user created in SuperTokens dashboard)
                try {
                    const stUser = await supertokens.getUser(request.user.id);
                    if (stUser) {
                        const email = stUser.emails?.[0] ?? stUser.loginMethods?.[0]?.email ?? null;
                        if (email) {
                            const now = new Date();
                            user = await prisma.user.upsert({
                                where: { superTokensUserId: request.user.id },
                                update: { updatedAt: now },
                                create: {
                                    superTokensUserId: stUser.id,
                                    email,
                                    name: null,
                                    role: 'user',
                                    active: true,
                                    updatedAt: now
                                }
                            });
                        }
                    }
                } catch (syncErr) {
                    fastify.log.warn({ err: syncErr, userId: request.user.id }, 'Could not sync user from SuperTokens');
                }
            }

            if (!user || !user.active) {
                if (!reply.sent) {
                    reply.code(403).send({
                        error: 'Forbidden',
                        message: 'User not found or inactive'
                    });
                }
                return;
            }

            // Bootstrap: if no admin exists yet, treat current user as admin and promote them
            if (allowedRoles.includes('admin') && user.role !== 'admin') {
                const adminCount = await prisma.user.count({
                    where: { role: 'admin', deleted: false }
                });
                if (adminCount === 0) {
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { role: 'admin', updatedAt: new Date() }
                    });
                    user = { ...user, role: 'admin' };
                }
            }

            if (!allowedRoles.includes(user.role)) {
                if (!reply.sent) {
                    reply.code(403).send({
                        error: 'Forbidden',
                        message: 'Insufficient permissions',
                        requiredRole: allowedRoles,
                        yourRole: user.role
                    });
                }
                return;
            }

            // Attach full user object to request
            request.user = {
                ...request.user,
                ...user
            };
        };
    });

    // Also provide verifySession as a direct preHandler option
    fastify.decorate('verifySession', verifySession);
}

export default fp(supertokensPlugin);