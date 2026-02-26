-- Add comission_total_usd back to BrokerageInvoiceLine
ALTER TABLE "BrokerageInvoiceLine" ADD COLUMN "comission_total_usd" DOUBLE PRECISION NOT NULL DEFAULT 0;
