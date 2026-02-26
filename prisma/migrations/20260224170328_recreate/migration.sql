-- AlterTable
ALTER TABLE "Contract" ALTER COLUMN "payment_attachments_party_a" DROP DEFAULT,
ALTER COLUMN "payment_attachments_party_b" DROP DEFAULT,
ALTER COLUMN "other_terms_party_a" DROP DEFAULT,
ALTER COLUMN "other_terms_party_b" DROP DEFAULT,
ALTER COLUMN "other_terms_party_a_party_b" DROP DEFAULT,
ALTER COLUMN "other_terms_party_a_party_b_party_a" DROP DEFAULT,
ALTER COLUMN "other_terms_party_b_party_a" DROP DEFAULT,
ALTER COLUMN "other_terms_party_b_party_a_party_b" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "permissions" DROP DEFAULT;
