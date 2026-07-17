// api/scripts/soft-delete-all-products-contracts.mjs
import { prisma } from '../lib/prisma.js';

async function main() {
    const contracts = await prisma.contract.deleteMany({ where: { deleted: false } });
    const contractProducts = await prisma.contractProduct.deleteMany({ where: { deleted: false } });
    const variations = await prisma.productVariation.deleteMany({ where: { deleted: false } });
    const products = await prisma.product.deleteMany({ where: { deleted: false } });

    console.log({ contracts, contractProducts, variations, products });
}

main().finally(() => prisma.$disconnect());