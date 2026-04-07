import { getUser } from "../api"
import { sessions } from "../sessions"

export const authorize = async (authorizeLogin, authorizePassword) => {
    const user = await getUser(authorizeLogin)
    const { id, login, roleId, password } = user

    if (!user) {
        return {
            error: "Такой пользователь не найден",
            res: null
        }
    }

    if (authorizePassword !== password) {
        return {
            error: "Не верный пароль",
            res: null
        }
    }

    return {
        error: null,
        res: {
            id,
            login,
            roleId,
            session: sessions.create(user)
        }
    }
}