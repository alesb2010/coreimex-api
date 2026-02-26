-- Contract: customer-to-customer (party_a / party_b). Add new columns, copy data from customer/seller, drop old columns.

-- Step 1: Add new columns (nullable so we can backfill)
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "customer_party_a_id" INTEGER;
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "customer_party_b_id" INTEGER;
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "date_signature_party_a" TIMESTAMP(3);
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "date_expiration_signature_party_a" TIMESTAMP(3);
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "date_signature_party_b" TIMESTAMP(3);
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "date_expiration_signature_party_b" TIMESTAMP(3);
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "payment_notes_party_a" TEXT;
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "payment_attachments_party_a" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "payment_notes_party_b" TEXT;
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "payment_attachments_party_b" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "other_terms_party_a" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "other_terms_party_b" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "other_terms_party_a_party_b" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "other_terms_party_a_party_b_party_a" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "other_terms_party_b_party_a" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "other_terms_party_b_party_a_party_b" TEXT[] DEFAULT '{}';
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "commission_party_a" DOUBLE PRECISION;
ALTER TABLE "Contract" ADD COLUMN IF NOT EXISTS "commission_party_b" DOUBLE PRECISION;

-- Step 2: Backfill from existing columns (customer -> party_a, seller -> party_b)
UPDATE "Contract" SET
  "customer_party_a_id" = "customer_id",
  "customer_party_b_id" = "seller_id",
  "date_signature_party_a" = "date_signature_customer",
  "date_expiration_signature_party_a" = "date_expiration_signature_customer",
  "date_signature_party_b" = "date_signature_seller",
  "date_expiration_signature_party_b" = "date_expiration_signature_seller",
  "payment_notes_party_a" = COALESCE("payment_notes_customer", ''),
  "payment_attachments_party_a" = COALESCE("payment_attachments_customer", '{}'),
  "payment_notes_party_b" = COALESCE("payment_notes_seller", ''),
  "payment_attachments_party_b" = COALESCE("payment_attachments_seller", '{}'),
  "other_terms_party_a" = COALESCE("other_terms_customer", '{}'),
  "other_terms_party_b" = COALESCE("other_terms_seller", '{}'),
  "other_terms_party_a_party_b" = COALESCE("other_terms_customer_seller", '{}'),
  "other_terms_party_a_party_b_party_a" = COALESCE("other_terms_customer_seller_customer", '{}'),
  "other_terms_party_b_party_a" = COALESCE("other_terms_seller_customer", '{}'),
  "other_terms_party_b_party_a_party_b" = COALESCE("other_terms_seller_customer_seller", '{}'),
  "commission_party_a" = COALESCE("commission_customer", 0),
  "commission_party_b" = COALESCE("commission_seller", 0);

-- Step 3: Set NOT NULL and defaults for required columns (for any rows still missing)
UPDATE "Contract" SET
  "customer_party_a_id" = COALESCE("customer_party_a_id", "customer_id"),
  "customer_party_b_id" = COALESCE("customer_party_b_id", "seller_id"),
  "payment_notes_party_a" = COALESCE("payment_notes_party_a", ''),
  "payment_notes_party_b" = COALESCE("payment_notes_party_b", ''),
  "commission_party_a" = COALESCE("commission_party_a", 0),
  "commission_party_b" = COALESCE("commission_party_b", 0)
WHERE "customer_party_a_id" IS NULL OR "customer_party_b_id" IS NULL
   OR "payment_notes_party_a" IS NULL OR "payment_notes_party_b" IS NULL
   OR "commission_party_a" IS NULL OR "commission_party_b" IS NULL;

ALTER TABLE "Contract" ALTER COLUMN "customer_party_a_id" SET NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "customer_party_b_id" SET NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "payment_notes_party_a" SET NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "payment_notes_party_b" SET NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "commission_party_a" SET NOT NULL;
ALTER TABLE "Contract" ALTER COLUMN "commission_party_b" SET NOT NULL;

-- Step 4: Drop old foreign keys and columns
ALTER TABLE "Contract" DROP CONSTRAINT IF EXISTS "Contract_customer_id_fkey";
ALTER TABLE "Contract" DROP CONSTRAINT IF EXISTS "Contract_seller_id_fkey";
ALTER TABLE "Contract" DROP CONSTRAINT IF EXISTS "Contract_sellerId_fkey";

ALTER TABLE "Contract"
  DROP COLUMN IF EXISTS "customer_id",
  DROP COLUMN IF EXISTS "seller_id",
  DROP COLUMN IF EXISTS "sellerId",
  DROP COLUMN IF EXISTS "date_signature_seller",
  DROP COLUMN IF EXISTS "date_expiration_signature_seller",
  DROP COLUMN IF EXISTS "date_signature_customer",
  DROP COLUMN IF EXISTS "date_expiration_signature_customer",
  DROP COLUMN IF EXISTS "payment_notes_seller",
  DROP COLUMN IF EXISTS "payment_attachments_seller",
  DROP COLUMN IF EXISTS "payment_notes_customer",
  DROP COLUMN IF EXISTS "payment_attachments_customer",
  DROP COLUMN IF EXISTS "other_terms_seller",
  DROP COLUMN IF EXISTS "other_terms_customer",
  DROP COLUMN IF EXISTS "other_terms_customer_seller",
  DROP COLUMN IF EXISTS "other_terms_customer_seller_customer",
  DROP COLUMN IF EXISTS "other_terms_seller_customer",
  DROP COLUMN IF EXISTS "other_terms_seller_customer_seller",
  DROP COLUMN IF EXISTS "commission_seller",
  DROP COLUMN IF EXISTS "commission_customer";

-- Step 5: Add new foreign keys
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_customer_party_a_id_fkey" FOREIGN KEY ("customer_party_a_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_customer_party_b_id_fkey" FOREIGN KEY ("customer_party_b_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
