/*
  Warnings:

  - The `email` column on the `Contact` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `phone` column on the `Contact` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "email",
ADD COLUMN     "email" JSONB,
DROP COLUMN "phone",
ADD COLUMN     "phone" JSONB;
