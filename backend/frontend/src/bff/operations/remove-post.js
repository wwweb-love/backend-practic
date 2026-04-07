import { deleteComment, deletePost, getComments } from "../api"
import { sessions } from "../sessions"
import { ROLE } from "../constants"

export const removePost = async (hash, id) => {
    const accesRoles = [ROLE.ADMIN]

    const access = await sessions.access(hash, accesRoles)

    if (!access) {
        return {
            error: "Авторизуйтесь",
            res: null
        }
    }
    const comments = await getComments(id)
    
    await deletePost(id)

    await Promise.all(comments.map(({id: commentId}) => deleteComment(commentId)))

    return {
        error: null,
        res: true
    }

}