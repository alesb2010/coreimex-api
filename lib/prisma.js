// Use generated client (matches prisma/schema.prisma); node_modules @prisma/client can be out of sync.
import generated from '../generated/prisma/client/index.js';
import { createSoftDeleteExtension } from 'prisma-extension-soft-delete';
const { PrismaClient } = generated;

const basePrisma = new PrismaClient();

export const prisma = basePrisma.$extends(
    createSoftDeleteExtension({
        models: {
            User: true,
            Product: true,
            Seller: true,
            Customer: true,
            Contract: true,
            ContractProduct: true,
            BrokerageInvoice: true,
            BankAccount: true,
            ArbitrationRule: true,
            SpecialCondition: true,
            File: true,
            Contact: true,
        },
        defaultConfig: {
            field: 'deleted',
            createValue: Boolean,
            allowToOneUpdates: true,
        },
    })
);