-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "attached_files" TEXT[] DEFAULT ARRAY[]::TEXT[];
