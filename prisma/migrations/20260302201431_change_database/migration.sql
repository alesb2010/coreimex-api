/*
  Warnings:

  - You are about to drop the column `date_expiration_signature_seller` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `date_signature_seller` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `attached_files` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "date_expiration_signature_seller",
DROP COLUMN "date_signature_seller";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "attached_files";
