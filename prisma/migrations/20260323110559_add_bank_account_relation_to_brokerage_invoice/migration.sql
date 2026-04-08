-- AlterTable
ALTER TABLE "BrokerageInvoice" ADD COLUMN     "bank_account_id" INTEGER;

-- AddForeignKey
ALTER TABLE "BrokerageInvoice" ADD CONSTRAINT "BrokerageInvoice_bank_account_id_fkey" FOREIGN KEY ("bank_account_id") REFERENCES "BankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
