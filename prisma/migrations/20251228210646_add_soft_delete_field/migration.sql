-- AlterTable
ALTER TABLE "ArbitrationRule" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "BrokerageInvoice" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Contract" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ContractProduct" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "File" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Seller" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SpecialCondition" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT IF EXISTS "Product_sellersId_fkey";
ALTER TABLE "Product" ALTER COLUMN "sellersId" DROP NOT NULL;
ALTER TABLE "Product" ALTER COLUMN "sellersId" DROP DEFAULT;
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellersId_fkey" FOREIGN KEY ("sellersId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;
