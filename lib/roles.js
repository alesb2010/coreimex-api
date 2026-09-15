export const ROLES = {
    ADMIN: "admin",
    NORMAL_USER: "normal_user",
};

export const MENU_PERMISSIONS = {
    DASHBOARD: "menu.dashboard",
    CONTRACTS: "menu.contracts",
    CRM: "menu.crm",
    PRODUCTS: "menu.products",
    CONTACTS: "menu.contacts",
    CUSTOMERS: "menu.customers",
    PACKS: "menu.packs",
    BROKERAGE_INVOICES: "menu.brokerageInvoices",
    BANKS: "menu.banks",
    ARBITRATION_RULE: "menu.arbitrationRule",
    SPECIAL_CONDITION: "menu.specialCondition",
    IMPORT: "menu.import",
    USERS: "menu.users",
};

export const ALL_MENU_PERMISSIONS = Object.values(MENU_PERMISSIONS);

export const NORMAL_USER_PERMISSIONS = ALL_MENU_PERMISSIONS.filter(
    (permission) =>
        permission !== MENU_PERMISSIONS.IMPORT &&
        permission !== MENU_PERMISSIONS.USERS
);

export function normalizeRoleName(role) {
    return String(role || "")
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, "_");
}

export function isAdminRole(role) {
    return normalizeRoleName(role) === ROLES.ADMIN;
}

export function isNormalUserRole(role) {
    const normalized = normalizeRoleName(role);
    return normalized === ROLES.NORMAL_USER || normalized === "user";
}

export function defaultPermissionsForRole(role) {
    if (isAdminRole(role)) {
        return [...ALL_MENU_PERMISSIONS];
    }
    return [...NORMAL_USER_PERMISSIONS];
}

export async function getPermissionsForRole(prisma, roleName) {
    if (isAdminRole(roleName)) {
        return [...ALL_MENU_PERMISSIONS];
    }

    const normalized = normalizeRoleName(roleName);
    if (!normalized) {
        return [...NORMAL_USER_PERMISSIONS];
    }

    try {
        const roles = await prisma.role.findMany({
            where: { deleted: false, active: true },
            select: { name: true, permissions: true },
        });
        const match = roles.find(
            (role) => normalizeRoleName(role.name) === normalized
        );
        if (match?.permissions?.length) {
            return match.permissions;
        }
    } catch (error) {
        // Fall through to defaults if the Role table is unavailable
    }

    return defaultPermissionsForRole(roleName);
}

export async function formatAuthUser(prisma, user) {
    if (!user) return null;
    const permissions = await getPermissionsForRole(prisma, user.role);
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        roles: user.role ? [user.role] : [],
        permissions,
        active: user.active,
        createdAt: user.createdAt,
    };
}
