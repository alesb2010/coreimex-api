-- AlterTable File: add productId for Product relation and index for entity lookup
ALTER TABLE "File" ADD COLUMN "productId" INTEGER;

-- CreateIndex for entityType + entityId (used by /files/entity/:type/:entityId)
CREATE INDEX "File_entityType_entityId_idx" ON "File"("entityType", "entityId");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable Product: remove attached_files (attachments now via File relation)
ALTER TABLE "Product" DROP COLUMN IF EXISTS "attached_files";
