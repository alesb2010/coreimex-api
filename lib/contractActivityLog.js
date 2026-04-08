/**
 * Contract activity logging helper.
 *
 * Stores: user (supertokens id + optional db user snapshot), time, action, details, reference, payload (JSON).
 */
export async function createContractActivityLog(tx, { contractId, request, action, details = null, reference = null, payload = null }) {
  const actorSuperTokensUserId = request?.user?.id ?? null;

  let actorUserId = null;
  let actorEmail = null;

  if (actorSuperTokensUserId) {
    try {
      const user = await tx.user.findUnique({
        where: { superTokensUserId: actorSuperTokensUserId },
        select: { id: true, email: true }
      });
      actorUserId = user?.id ?? null;
      actorEmail = user?.email ?? null;
    } catch {
      // Logging must never break the main action.
    }
  }

  try {
    await tx.contractActivityLog.create({
      data: {
        contract_id: contractId,
        action,
        details,
        reference,
        payload,
        actorSuperTokensUserId,
        actorUserId,
        actorEmail
      }
    });
  } catch (err) {
    request?.log?.error({ err, contractId, action }, 'Failed to create ContractActivityLog');
  }
}

