// Scale undersized contract prices/totals and restore MT quantities
// that were stored with an extra ÷1000 (CSV 25,000 → 0.025).
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

    // CSV 25,000 (= 25 MT) was stored as 0.025 after an extra ÷1000.
    // Legitimate small lots like 0.30 / 0.34 MT are left unchanged.
    const quantityUpdates = await prisma.$executeRaw`
        UPDATE "ContractProduct"
        SET quantity = quantity * ${SCALE}
        WHERE deleted = false
          AND quantity > 0
          AND quantity < 0.1
    `;

    const mtValueUpdates = await prisma.$executeRaw`
        UPDATE "Contract" AS c
        SET mt_value = totals.mt
        FROM (
            SELECT
                cp.contract_id,
                COALESCE(SUM(cp.quantity), 0) AS mt
            FROM "ContractProduct" AS cp
            WHERE cp.deleted = false
            GROUP BY cp.contract_id
        ) AS totals
        WHERE c.id = totals.contract_id
          AND c.deleted = false
    `;

    const leftoverMtUpdates = await prisma.$executeRaw`
        UPDATE "Contract"
        SET mt_value = mt_value * ${SCALE}
        WHERE deleted = false
          AND mt_value > 0
          AND mt_value < 0.1
          AND id NOT IN (
              SELECT DISTINCT contract_id
              FROM "ContractProduct"
              WHERE deleted = false
          )
    `;

    const sample = await prisma.$queryRaw`
        SELECT c.id, c.name, c.mt_value, c.payment_amount, c.comission_total, cp.price, cp.quantity
        FROM "Contract" AS c
        JOIN "ContractProduct" AS cp ON cp.contract_id = c.id AND cp.deleted = false
        WHERE c.deleted = false
        ORDER BY c.id
        LIMIT 3
    `;

    console.log({
        priceUpdates,
        totalUpdates,
        quantityUpdates,
        mtValueUpdates,
        leftoverMtUpdates,
        sample,
    });
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
