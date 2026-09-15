-- Fill built-in admin permissions when the role already existed with an empty list
UPDATE "Role"
SET
  "permissions" = ARRAY[
    'menu.dashboard',
    'menu.contracts',
    'menu.crm',
    'menu.products',
    'menu.contacts',
    'menu.customers',
    'menu.packs',
    'menu.brokerageInvoices',
    'menu.banks',
    'menu.arbitrationRule',
    'menu.specialCondition',
    'menu.import',
    'menu.users'
  ]::TEXT[],
  "description" = COALESCE(
    NULLIF(TRIM("description"), ''),
    'Full access to all menus, tools, and user management'
  ),
  "updatedAt" = CURRENT_TIMESTAMP
WHERE "name" = 'admin'
  AND "deleted" = false
  AND cardinality("permissions") = 0;
