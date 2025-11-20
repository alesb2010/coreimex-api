/*
  Warnings:

  - You are about to drop the column `currnecy` on the `Product` table. All the data in the column will be lost.
  - Added the required column `currency` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "currnecy",
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "sellersId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
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

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
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

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL,
    "date_expiration" TIMESTAMP(3) NOT NULL,
    "date_signature" TIMESTAMP(3) NOT NULL,
    "date_expiration_signature" TIMESTAMP(3) NOT NULL,
    "date_signature_client" TIMESTAMP(3) NOT NULL,
    "date_expiration_signature_client" TIMESTAMP(3) NOT NULL,
    "date_signature_seller" TIMESTAMP(3) NOT NULL,
    "date_expiration_signature_seller" TIMESTAMP(3) NOT NULL,
    "client_id" INTEGER NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "products_id" INTEGER[],
    "bording_date" TIMESTAMP(3) NOT NULL,
    "mt_value" DOUBLE PRECISION NOT NULL,
    "destination_country" TEXT NOT NULL,
    "destination_port" TEXT NOT NULL,
    "shipping_company" TEXT NOT NULL,
    "shipment_date" TIMESTAMP(3) NOT NULL,
    "si_sent" BOOLEAN NOT NULL,
    "packing" TEXT[],
    "incoterm" TEXT[],
    "payment_terms" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "payment_currency" TEXT NOT NULL,
    "payment_amount" DOUBLE PRECISION NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "payment_status" TEXT NOT NULL,
    "payment_notes" TEXT NOT NULL,
    "payment_attachments" TEXT[],
    "payment_notes_client" TEXT NOT NULL,
    "payment_attachments_client" TEXT[],
    "payment_notes_seller" TEXT NOT NULL,
    "payment_attachments_seller" TEXT[],
    "special_terms" TEXT[],
    "business_terms" TEXT[],
    "legal_terms" TEXT[],
    "other_terms" TEXT[],
    "other_terms_client" TEXT[],
    "other_terms_seller" TEXT[],
    "other_terms_client_seller" TEXT[],
    "other_terms_seller_client" TEXT[],
    "other_terms_client_seller_client" TEXT[],
    "other_terms_seller_client_seller" TEXT[],
    "commission_client" DOUBLE PRECISION NOT NULL,
    "commission_seller" DOUBLE PRECISION NOT NULL,
    "comission_total" DOUBLE PRECISION NOT NULL,
    "attachments" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractProduct" (
    "id" SERIAL NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,

    CONSTRAINT "ContractProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrokerageInvoice" (
    "id" SERIAL NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "comission_total_usd" DOUBLE PRECISION NOT NULL,
    "comission_total_brl" DOUBLE PRECISION NOT NULL,
    "bl_date" TIMESTAMP(3) NOT NULL,
    "bl_number" TEXT NOT NULL,
    "bl_attachments" TEXT[],
    "ptax" DOUBLE PRECISION NOT NULL,
    "attachments" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,

    CONSTRAINT "BrokerageInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArbitrationRule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "attachments" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,

    CONSTRAINT "ArbitrationRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecialCondition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "type" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "attachments" TEXT[],
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,

    CONSTRAINT "SpecialCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContractProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContractProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ContractToSpecialCondition" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContractToSpecialCondition_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ArbitrationRuleToContract" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ArbitrationRuleToContract_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ContractProduct_B_index" ON "_ContractProduct"("B");

-- CreateIndex
CREATE INDEX "_ContractToSpecialCondition_B_index" ON "_ContractToSpecialCondition"("B");

-- CreateIndex
CREATE INDEX "_ArbitrationRuleToContract_B_index" ON "_ArbitrationRuleToContract"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellersId_fkey" FOREIGN KEY ("sellersId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractProduct" ADD CONSTRAINT "ContractProduct_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractProduct" ADD CONSTRAINT "ContractProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrokerageInvoice" ADD CONSTRAINT "BrokerageInvoice_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractProduct" ADD CONSTRAINT "_ContractProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractProduct" ADD CONSTRAINT "_ContractProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractToSpecialCondition" ADD CONSTRAINT "_ContractToSpecialCondition_A_fkey" FOREIGN KEY ("A") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractToSpecialCondition" ADD CONSTRAINT "_ContractToSpecialCondition_B_fkey" FOREIGN KEY ("B") REFERENCES "SpecialCondition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArbitrationRuleToContract" ADD CONSTRAINT "_ArbitrationRuleToContract_A_fkey" FOREIGN KEY ("A") REFERENCES "ArbitrationRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArbitrationRuleToContract" ADD CONSTRAINT "_ArbitrationRuleToContract_B_fkey" FOREIGN KEY ("B") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;
