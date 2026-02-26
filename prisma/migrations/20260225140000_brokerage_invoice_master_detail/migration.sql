-- Add new optional columns to BrokerageInvoice (master)
ALTER TABLE "BrokerageInvoice" ADD COLUMN "number" TEXT;
ALTER TABLE "BrokerageInvoice" ADD COLUMN "invoice_date" TIMESTAMP(3);

-- CreateTable BrokerageInvoiceLine (detail: one per contract with full BL/commission fields)
CREATE TABLE "BrokerageInvoiceLine" (
    "id" SERIAL NOT NULL,
    "brokerage_invoice_id" INTEGER NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "bl_date" TIMESTAMP(3) NOT NULL,
    "bl_number" TEXT NOT NULL,
    "bl_attachments" TEXT[],
    "comission_total_usd" DOUBLE PRECISION NOT NULL,
    "comission_total_brl" DOUBLE PRECISION NOT NULL,
    "ptax" DOUBLE PRECISION NOT NULL,
    "attachments" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BrokerageInvoiceLine_pkey" PRIMARY KEY ("id")
);

-- Migrate existing data: one line per contract linked to an invoice (copy BL/commission from invoice)
INSERT INTO "BrokerageInvoiceLine" (
    "brokerage_invoice_id", "contract_id", "bl_date", "bl_number", "bl_attachments",
    "comission_total_usd", "comission_total_brl", "ptax", "attachments",
    "createdAt", "active", "status", "deleted"
)
SELECT
    c."brokerage_invoice_id", c."id", bi."bl_date", bi."bl_number", bi."bl_attachments",
    bi."comission_total_usd", bi."comission_total_brl", bi."ptax", bi."attachments",
    CURRENT_TIMESTAMP, true, bi."status", bi."deleted"
FROM "Contract" c
JOIN "BrokerageInvoice" bi ON bi."id" = c."brokerage_invoice_id"
WHERE c."brokerage_invoice_id" IS NOT NULL;

-- Unique: one line per contract per invoice
CREATE UNIQUE INDEX "BrokerageInvoiceLine_brokerage_invoice_id_contract_id_key" ON "BrokerageInvoiceLine"("brokerage_invoice_id", "contract_id");

-- FK BrokerageInvoiceLine -> BrokerageInvoice (CASCADE delete)
ALTER TABLE "BrokerageInvoiceLine" ADD CONSTRAINT "BrokerageInvoiceLine_brokerage_invoice_id_fkey"
    FOREIGN KEY ("brokerage_invoice_id") REFERENCES "BrokerageInvoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- FK BrokerageInvoiceLine -> Contract
ALTER TABLE "BrokerageInvoiceLine" ADD CONSTRAINT "BrokerageInvoiceLine_contract_id_fkey"
    FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Remove old Contract -> BrokerageInvoice FK and column
ALTER TABLE "Contract" DROP CONSTRAINT IF EXISTS "Contract_brokerage_invoice_id_fkey";
ALTER TABLE "Contract" DROP COLUMN "brokerage_invoice_id";

-- Drop BL/commission columns from BrokerageInvoice (master stays slim)
ALTER TABLE "BrokerageInvoice"
    DROP COLUMN "comission_total_usd",
    DROP COLUMN "comission_total_brl",
    DROP COLUMN "bl_date",
    DROP COLUMN "bl_number",
    DROP COLUMN "bl_attachments",
    DROP COLUMN "ptax",
    DROP COLUMN "attachments";
