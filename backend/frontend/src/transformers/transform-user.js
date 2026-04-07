export const transformUser = (dbUser) => ({
    id: dbUser.id,
    login: dbUser.login,
    password: dbUser.password,
    registedAt: dbUser.registed_at,
    roleId: dbUser.role_id,
});
