import { deleteComment, getComments, getPost, deleteSession } from "../api"
import { sessions } from "../sessions"
import {ROLE} from "../constants"

export const removePostComment = async (hash, postId, id) => {
    const accesRoles = [ROLE.ADMIN, ROLE.MODERATOR]

    const access = await sessions.access(hash, accesRoles)

    if (!access) {
        return {
            error: "Авторизуйтесь",
            res: null
        }
    }
    await deleteComment(id)

    const post = await getPost(postId)

    const comments = await getComments(postId)

    return {
        error: null,
        res: {
            ...post,
            comments
        }
    }

}