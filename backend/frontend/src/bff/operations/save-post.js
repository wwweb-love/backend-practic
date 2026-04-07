import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { updatePost, addPost } from "../api";

export const savePost = async (hash, newPostData) => {
    const accessRoles = [ROLE.ADMIN];

    if (!sessions.access(hash, accessRoles)) {
        return {
            error: "Доступ запрещен",
            res: null,
        };
    }

    const savePost = newPostData.id === "" ?  await addPost(newPostData) : await updatePost(newPostData);

    return {
        error: null,
        res: savePost
    }
};
