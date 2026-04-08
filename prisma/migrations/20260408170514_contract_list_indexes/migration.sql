-- CreateIndex
CREATE INDEX "Contract_customer_party_a_id_idx" ON "Contract"("customer_party_a_id");

-- CreateIndex
CREATE INDEX "Contract_customer_party_b_id_idx" ON "Contract"("customer_party_b_id");

-- CreateIndex
CREATE INDEX "Contract_date_creation_idx" ON "Contract"("date_creation");

-- CreateIndex
CREATE INDEX "Contract_status_idx" ON "Contract"("status");

-- CreateIndex
CREATE INDEX "ContractProduct_contract_id_idx" ON "ContractProduct"("contract_id");

-- CreateIndex
CREATE INDEX "ContractProduct_product_id_idx" ON "ContractProduct"("product_id");
