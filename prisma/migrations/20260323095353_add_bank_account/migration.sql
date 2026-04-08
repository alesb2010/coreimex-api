-- AlterTable
ALTER TABLE "BrokerageInvoice" ADD COLUMN     "expected_payment_date" TIMESTAMP(3),
ADD COLUMN     "received_date" TIMESTAMP(3),
ADD COLUMN     "sent_date" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" SERIAL NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_holder" TEXT NOT NULL,
    "account_number" TEXT,
    "agency" TEXT,
    "account_type" TEXT NOT NULL DEFAULT 'checking',
    "swift_bic" TEXT,
    "iban" TEXT,
    "pix_key" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'BRL',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'active',
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);
