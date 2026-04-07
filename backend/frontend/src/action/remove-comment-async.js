import { setPostData } from "./set-post-data"


export const removeCommentAsync = (serverRequest, ...params) =>
    (dispatch) =>
        serverRequest("removePostComment", ...params).then((loadedData) =>
            dispatch(setPostData(loadedData.res)))