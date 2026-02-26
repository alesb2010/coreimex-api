/*
  Warnings:

  - You are about to drop the column `contract_product_id` on the `Pack` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pack" DROP CONSTRAINT "Pack_contract_product_id_fkey";

-- DropIndex
DROP INDEX "Pack_contract_product_id_key";

-- AlterTable
ALTER TABLE "Pack" DROP COLUMN "contract_product_id";
