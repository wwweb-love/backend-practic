import { authorize, register, logout, fetchRoles, fetchUsers, updateUserRole, removeUser, fetchPost } from "./operations"

export const server = {
    authorize,
    register,
    logout,
    fetchRoles, 
    fetchUsers,
    updateUserRole,
    removeUser,
    fetchPost
}