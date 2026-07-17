-- AlterTable
ALTER TABLE "ContractProduct" ADD COLUMN "product_variation_id" INTEGER;

-- CreateIndex
CREATE INDEX "ContractProduct_product_variation_id_idx" ON "ContractProduct"("product_variation_id");

-- AddForeignKey
ALTER TABLE "ContractProduct" ADD CONSTRAINT "ContractProduct_product_variation_id_fkey" FOREIGN KEY ("product_variation_id") REFERENCES "ProductVariation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
