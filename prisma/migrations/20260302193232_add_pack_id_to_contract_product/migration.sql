-- AlterTable
ALTER TABLE "ContractProduct" ADD COLUMN     "pack_id" INTEGER;

-- AddForeignKey
ALTER TABLE "ContractProduct" ADD CONSTRAINT "ContractProduct_pack_id_fkey" FOREIGN KEY ("pack_id") REFERENCES "Pack"("id") ON DELETE SET NULL ON UPDATE CASCADE;
