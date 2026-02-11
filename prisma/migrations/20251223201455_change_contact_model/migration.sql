/*
  Warnings:

  - You are about to drop the column `name` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "name",
DROP COLUMN "note",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "company_name" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "full_name" TEXT,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "zip_code" TEXT;
