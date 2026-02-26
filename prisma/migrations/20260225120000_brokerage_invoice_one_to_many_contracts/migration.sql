-- AlterTable: add optional FK on Contract pointing to BrokerageInvoice
ALTER TABLE "Contract" ADD COLUMN "brokerage_invoice_id" INTEGER;

-- Migrate existing data: set Contract.brokerage_invoice_id from BrokerageInvoice.contract_id
UPDATE "Contract" c
SET "brokerage_invoice_id" = bi."id"
FROM "BrokerageInvoice" bi
WHERE bi."contract_id" = c."id";

-- Add FK constraint
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_brokerage_invoice_id_fkey" 
  FOREIGN KEY ("brokerage_invoice_id") REFERENCES "BrokerageInvoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Drop old FK column from BrokerageInvoice
ALTER TABLE "BrokerageInvoice" DROP COLUMN "contract_id";
