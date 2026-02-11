-- AlterTable
ALTER TABLE "ContractProduct" ADD COLUMN "price" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "product_price";
