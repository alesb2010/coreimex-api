// Scale contract product prices and contract totals in the database.
import { prisma } from '../lib/prisma.js';

const SCALE = 1000;

async function main() {
    const priceUpdates = await prisma.$executeRaw`
        UPDATE "ContractProduct"
        SET price = price * ${SCALE}
        WHERE deleted = false
          AND price > 0
          AND price < ${SCALE}
    `;

    const totalUpdates = await prisma.$executeRaw`
        UPDATE "Contract" AS c
        SET
            payment_amount = c.payment_amount * ${SCALE},
            comission_total = c.comission_total * ${SCALE}
        FROM (
            SELECT
                cp.contract_id,
                COALESCE(SUM(cp.price * cp.quantity), 0) AS line_total
            FROM "ContractProduct" AS cp
            WHERE cp.deleted = false
            GROUP BY cp.contract_id
        ) AS totals
        WHERE c.id = totals.contract_id
          AND c.deleted = false
          AND c.payment_amount > 0
          AND ABS(c.payment_amount - totals.line_total) < 0.01
    `;

    const sample = await prisma.$queryRaw`
        SELECT c.id, c.name, c.payment_amount, c.comission_total, cp.price, cp.quantity
        FROM "Contract" AS c
        JOIN "ContractProduct" AS cp ON cp.contract_id = c.id AND cp.deleted = false
        WHERE c.deleted = false
        ORDER BY c.id
        LIMIT 3
    `;

    console.log({ priceUpdates, totalUpdates, sample });
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
