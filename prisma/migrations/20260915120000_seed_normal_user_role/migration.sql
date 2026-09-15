-- Default new users to the limited "normal user" role
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'normal_user';

UPDATE "User"
SET "role" = 'normal_user'
WHERE "role" = 'user';

-- Seed built-in roles. Existing rows with the same name are left unchanged.
INSERT INTO "Role" ("name", "description", "permissions", "createdAt", "updatedAt", "active", "deleted")
VALUES (
  'admin',
  'Full access to all menus, tools, and user management',
  ARRAY[
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
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP,
  true,
  false
)
ON CONFLICT ("name") DO NOTHING;

INSERT INTO "Role" ("name", "description", "permissions", "createdAt", "updatedAt", "active", "deleted")
VALUES (
  'normal_user',
  'Normal User — operational menus only (no Users or Import tools)',
  ARRAY[
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
    'menu.specialCondition'
  ]::TEXT[],
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP,
  true,
  false
)
ON CONFLICT ("name") DO NOTHING;
