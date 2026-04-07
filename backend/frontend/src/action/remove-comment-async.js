import { setPostData } from "./set-post-data"
import { request } from "../utils/request"
import { removeComment } from "./remoce-comment"

export const removeCommentAsync = (postId, id) =>
    (dispatch) =>
        request(`/posts/${postId}/comments/${id}`, "DELETE").then(() =>
            dispatch(removeComment(id)))