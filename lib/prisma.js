import { PrismaClient } from '../generated/prisma/client/index.js';
import { createSoftDeleteExtension } from 'prisma-extension-soft-delete';

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