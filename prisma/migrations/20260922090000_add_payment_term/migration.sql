-- CreateTable
CREATE TABLE "PaymentTerm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "attachments" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PaymentTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContractToPaymentTerm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContractToPaymentTerm_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ContractToPaymentTerm_B_index" ON "_ContractToPaymentTerm"("B");

-- AddForeignKey
ALTER TABLE "_ContractToPaymentTerm" ADD CONSTRAINT "_ContractToPaymentTerm_A_fkey" FOREIGN KEY ("A") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractToPaymentTerm" ADD CONSTRAINT "_ContractToPaymentTerm_B_fkey" FOREIGN KEY ("B") REFERENCES "PaymentTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Grant the new menu to roles that already manage catalogs (admin, normal user, or arbitration rules)
UPDATE "Role"
SET
  "permissions" = array_append("permissions", 'menu.paymentTerm'),
  "updatedAt" = CURRENT_TIMESTAMP
WHERE "deleted" = false
  AND NOT ('menu.paymentTerm' = ANY("permissions"))
  AND (
    "name" IN ('admin', 'normal_user')
    OR 'menu.arbitrationRule' = ANY("permissions")
  );
