import { setPostData } from "./set-post-data"


export const addCommentAsync = (serverRequest, userId, postId, content) =>
    (dispatch) =>
        serverRequest("fetchComment", userId, postId, content).then((loadedData) =>
            dispatch(setPostData(loadedData.res)))