import { transformComment } from "../../transformers";

const ALL_COMMENTS_URL = "http://localhost:3033/comments";
const POST_COMMENTS_URL = "http://localhost:3033/comments?post_id=";

export const getComments = (postId) => {
    const url =
        postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;

    return fetch(url)
        .then((loaded) => loaded.json())
        .then((loaded) => loaded.map(transformComment));
};
