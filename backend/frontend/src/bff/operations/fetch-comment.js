import { addComment, getComments, getPost } from "../api"
import { sessions } from "../sessions"
import {ROLE} from "../constants"

export const fetchComment = async (hash, userId, postId, content) => {
    const accesComment = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

    const access = await sessions.access(hash, accesComment)

    if (!access) {
        return {
            error: "Авторизуйтесь",
            res: null
        }
    }
    await addComment(userId, postId, content)

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