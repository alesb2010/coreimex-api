-- Remove BRL values and commission fields from BrokerageInvoiceLine
ALTER TABLE "BrokerageInvoiceLine"
  DROP COLUMN "comission_total_usd",
  DROP COLUMN "comission_total_brl",
  DROP COLUMN "ptax";
