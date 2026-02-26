import Fastify from "fastify";
import cors from "@fastify/cors";
// import { PrismaClient } from './generated/prisma/client/index.js';
import { prisma } from './lib/prisma.js';
import { errorHandler } from "supertokens-node/framework/fastify";
import dotenv from "dotenv";

dotenv.config();

//const prisma = new PrismaClient();


const fastify = Fastify({ logger: true });

fastify.setErrorHandler(errorHandler());

fastify.setErrorHandler(async (error, request, reply) => {
  // Prevent double-sending
  if (reply.sent) {
    return;
  }

  // Safely extract error information without circular references
  let errorMessage = "Internal server error";
  let statusCode = 500;

  if (error) {
    if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object') {
      // Safely extract message
      if ('message' in error && typeof error.message === 'string') {
        errorMessage = error.message;
      }
      // Extract status code if available
      if ('statusCode' in error && typeof error.statusCode === 'number') {
        statusCode = error.statusCode;
      }
    }
  }

  // Log full error for debugging (but don't send it)
  fastify.log.error(error);

  // Send safe error response
  reply.code(statusCode).send({
    error: "Internal server error",
    message: errorMessage
  });
});

// When credentials are included, Access-Control-Allow-Origin must be a specific origin, not '*'
const allowedOrigins = [
  "https://app.coreimex.com",
  process.env.FRONTEND_URL,
  "http://localhost:3000"
].filter(Boolean);

await fastify.register(cors, {
  origin: (origin, cb) => {
    if (!origin) return cb(null, false);
    if (allowedOrigins.includes(origin)) return cb(null, true); // reflect request origin (never '*')
    return cb(null, false);
  },
  credentials: true, // Required for SuperTokens cookies
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  allowedHeaders: [
    "Content-Type",
    "anti-csrf",
    "rid",
    "fdi-version",
    "authorization",
    "st-auth-mode"
  ],
  exposedHeaders: [
    "front-token",
    "id-refresh-token",
    "anti-csrf",
    "st-access-token",
    "st-refresh-token"
  ]
});

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
        description: 'Enter session token'
      }
    },
    tags: [
      { name: 'Products', description: 'Product management endpoints' },
      { name: 'Sellers', description: 'Seller management endpoints' },
      { name: 'Customers', description: 'Customer management endpoints' },
      { name: 'Contacts', description: 'Contact management endpoints' },
      { name: 'Contracts', description: 'Contract management endpoints' },
      { name: 'Brokerage Invoices', description: 'Brokerage invoice management endpoints' },
      { name: 'Arbitration Rules', description: 'Arbitration rule management endpoints' },
      { name: 'Special Conditions', description: 'Special condition management endpoints' },
      { name: 'Files', description: 'File upload and management endpoints' },
      { name: 'Authentication', description: 'Authentication endpoints' }
    ]
  }
})

await fastify.register(import('@fastify/swagger-ui'), {
  routePrefix: '/documentation',
  uiConfig: {
    deepLinking: false,
    // Custom CSS can be injected via uiHooks
    customCss: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;600;700&display=swap');
      
      /* Global font settings */
      .swagger-ui {
        font-family: 'Inter', 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
      }
      
      /* Headings and titles */
      .swagger-ui .opblock-tag,
      .swagger-ui .opblock-tag-section,
      .swagger-ui h1, .swagger-ui h2, .swagger-ui h3,
      .swagger-ui h4, .swagger-ui h5 {
        font-family: 'Inter', 'Roboto', sans-serif !important;
        font-weight: 600 !important;
      }
      
      /* API endpoint paths */
      .swagger-ui .opblock .opblock-summary-path {
        font-family: 'Inter', 'Roboto', monospace !important;
        font-weight: 500 !important;
        font-size: 16px !important;
      }
      
      /* HTTP methods (POST, GET, etc.) */
      .swagger-ui .opblock .opblock-summary-method {
        font-family: 'Inter', 'Roboto', monospace !important;
        font-weight: 600 !important;
        font-size: 14px !important;
      }
      
      /* Body text and descriptions */
      .swagger-ui .opblock-description-wrapper,
      .swagger-ui .response-col_description,
      .swagger-ui .parameter__name,
      .swagger-ui .parameter__type {
        font-family: 'Inter', 'Roboto', sans-serif !important;
        font-weight: 400 !important;
      }
      
      /* Code and examples */
      .swagger-ui .highlight-code,
      .swagger-ui .microlight,
      .swagger-ui code,
      .swagger-ui pre {
         font-family: 'Inter', 'Roboto', sans-serif !important;
      }
    `
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => {
    // Allow inline styles for custom CSS
    if (header && header.includes('style-src')) {
      return header.replace(
        /style-src[^;]+/,
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com"
      );
    }
    // If no style-src exists, add it
    return header ? `${header}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` : "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com";
  },
  transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
  theme: { title: 'Documentation COREIMEX API' }
})

// Register multipart plugin for file uploads
await fastify.register(import('@fastify/multipart'), {
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit
  }
});

// Register MinIO plugin
await fastify.register(import('./plugins/minio.js'));

// Register SuperTokens plugin FIRST (this defines fastify.authenticate)
await fastify.register(import('./plugins/supertokens.js'), { prisma });

// Register routers AFTER SuperTokens plugin
await fastify.register(import('./routers/auth.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/userManagement.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/products.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/sellers.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/customers.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/contacts.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/contracts.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/packs.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/brokerageInvoices.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/arbitrationRules.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/specialConditions.js'), { prefix: '/api/v1/', prisma });
await fastify.register(import('./routers/files.js'), { prefix: '/api/v1/', prisma });

const PORT = process.env.PORT || 4000;
fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) throw err;
  console.log(`✅ Fastify server running at ${address}`);
});