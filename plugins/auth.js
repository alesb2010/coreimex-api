import fp from 'fastify-plugin';

async function authPlugin(fastify, options) {
    // Register JWT plugin
    await fastify.register(import('@fastify/jwt'), {
        secret: process.env.JWT_SECRET || 'test-test-test'
    });

    // Register auth plugin
    await fastify.register(import('@fastify/auth'));

    // Decorate request with authenticate method
    fastify.decorate('authenticate', async function (request, reply) {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.code(401).send({
                error: 'Unauthorized',
                message: err.message
            });
        }
    });
}

export default fp(authPlugin);