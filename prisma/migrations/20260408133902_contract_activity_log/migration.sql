-- CreateTable
CREATE TABLE "ContractActivityLog" (
    "id" SERIAL NOT NULL,
    "contract_id" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "details" TEXT,
    "reference" TEXT,
    "payload" JSONB,
    "actorSuperTokensUserId" TEXT,
    "actorUserId" INTEGER,
    "actorEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContractActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ContractActivityLog_contract_id_createdAt_idx" ON "ContractActivityLog"("contract_id", "createdAt");

-- CreateIndex
CREATE INDEX "ContractActivityLog_actorSuperTokensUserId_createdAt_idx" ON "ContractActivityLog"("actorSuperTokensUserId", "createdAt");

-- AddForeignKey
ALTER TABLE "ContractActivityLog" ADD CONSTRAINT "ContractActivityLog_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;
