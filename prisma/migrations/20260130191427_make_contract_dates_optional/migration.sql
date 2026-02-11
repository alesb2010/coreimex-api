-- AlterTable
ALTER TABLE "Contract" ALTER COLUMN "date_creation" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "date_expiration" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "date_signature" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "date_expiration_signature" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "date_signature_seller" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "date_expiration_signature_seller" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "bording_date" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "shipment_date" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "payment_date" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "date_expiration_signature_customer" DROP NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "date_signature_customer" DROP NOT NULL;

