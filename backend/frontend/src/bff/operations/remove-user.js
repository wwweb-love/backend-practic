import { setUserRole } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { deleteUser } from "../api";

export const removeUser = async (hash, userId) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: "Доступ запрещен",
            res: null,
        };
    }

    deleteUser(userId);

    return {
        error: null,
        res: true
    }
};
