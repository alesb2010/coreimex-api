import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from './generated/prisma/client/index.js';
// const { PrismaClient } = pkg;

import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const fastify = Fastify({ logger: true });

await fastify.register(cors, { origin: "*" });
await fastify.register(import('@fastify/swagger'), {
  swagger: {
    info: {
      title: 'COREIMEX API Documentation',
      description: 'API documentation for COREIMEX',
      version: '1.0.0'
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Enter JWT token in format: Bearer <token>'
      }
    },
    tags: [
      { name: 'Products', description: 'Product management endpoints' },
      { name: 'Sellers', description: 'Seller management endpoints' },
      { name: 'Customers', description: 'Customer management endpoints' },
      { name: 'Contracts', description: 'Contract management endpoints' },
      { name: 'Brokerage Invoices', description: 'Brokerage invoice management endpoints' },
      { name: 'Arbitration Rules', description: 'Arbitration rule management endpoints' },
      { name: 'Special Conditions', description: 'Special condition management endpoints' }
    ]
  }
})
await fastify.register(import('@fastify/swagger-ui'), {
  routePrefix: '/documentation',
  uiConfig: {
    // docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
  transformSpecificationClone: true,
  theme: { title: 'Documentation COREIMEX API' }
})

await fastify.register(import('./plugins/auth.js'));

// Register routers
await fastify.register(import('./routers/auth.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/products.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/sellers.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/customers.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/contracts.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/brokerageInvoices.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/arbitrationRules.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/specialConditions.js'), { prefix: '/api/v1/', prisma });

const PORT = process.env.PORT || 4000;
fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) throw err;
  console.log(`✅ Fastify server running at ${address}`);
});