-- AlterTable
ALTER TABLE "BrokerageInvoiceLine" ALTER COLUMN "comission_total_usd" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Pack" (
    "id" SERIAL NOT NULL,
    "contract_product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "pack_type" TEXT,
    "quantity_per_pack" DOUBLE PRECISION,
    "quantity_per_container" DOUBLE PRECISION,
    "container_type" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pack_contract_product_id_key" ON "Pack"("contract_product_id");

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_contract_product_id_fkey" FOREIGN KEY ("contract_product_id") REFERENCES "ContractProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
