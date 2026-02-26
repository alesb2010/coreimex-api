-- Drop old columns from BrokerageInvoice if they still exist (e.g. migration 20260225140000 not applied)
ALTER TABLE "BrokerageInvoice" DROP COLUMN IF EXISTS "comission_total_usd";
ALTER TABLE "BrokerageInvoice" DROP COLUMN IF EXISTS "comission_total_brl";
ALTER TABLE "BrokerageInvoice" DROP COLUMN IF EXISTS "bl_date";
ALTER TABLE "BrokerageInvoice" DROP COLUMN IF EXISTS "bl_number";
ALTER TABLE "BrokerageInvoice" DROP COLUMN IF EXISTS "bl_attachments";
ALTER TABLE "BrokerageInvoice" DROP COLUMN IF EXISTS "ptax";
ALTER TABLE "BrokerageInvoice" DROP COLUMN IF EXISTS "attachments";
