/*
  Warnings:

  - You are about to drop the column `client_id` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `commission_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `date_expiration_signature_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `date_signature_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `other_terms_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `other_terms_client_seller` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `other_terms_client_seller_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `other_terms_seller_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `other_terms_seller_client_seller` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `payment_attachments_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `payment_notes_client` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `commission_customer` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_id` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_expiration_signature_customer` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_signature_customer` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_notes_customer` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_client_id_fkey";

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "client_id",
DROP COLUMN "commission_client",
DROP COLUMN "date_expiration_signature_client",
DROP COLUMN "date_signature_client",
DROP COLUMN "other_terms_client",
DROP COLUMN "other_terms_client_seller",
DROP COLUMN "other_terms_client_seller_client",
DROP COLUMN "other_terms_seller_client",
DROP COLUMN "other_terms_seller_client_seller",
DROP COLUMN "payment_attachments_client",
DROP COLUMN "payment_notes_client",
ADD COLUMN     "commission_customer" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "customer_id" INTEGER NOT NULL,
ADD COLUMN     "date_expiration_signature_customer" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_signature_customer" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "other_terms_customer" TEXT[],
ADD COLUMN     "other_terms_customer_seller" TEXT[],
ADD COLUMN     "other_terms_customer_seller_customer" TEXT[],
ADD COLUMN     "other_terms_seller_customer" TEXT[],
ADD COLUMN     "other_terms_seller_customer_seller" TEXT[],
ADD COLUMN     "payment_attachments_customer" TEXT[],
ADD COLUMN     "payment_notes_customer" TEXT NOT NULL;

-- DropTable
DROP TABLE "Client";

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "full_address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "tax_id" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "phone" TEXT[],
    "email" TEXT[],
    "website" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
