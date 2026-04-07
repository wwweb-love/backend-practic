import { addUser, getUser } from "../api"
import { sessions } from "../sessions"
import { ROLE } from "../constants"

export const register = async (registerLogin, registerPassword) => {
        const existedUser = await getUser(registerLogin)

        if (existedUser) {
            return {
                error: "Такой логин уже используется",
                res: null
            }
        }

        const user = await addUser(registerLogin, registerPassword)

        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                roleId: user.roleId,
                session: sessions.create(user)
            } 
        }

    }