import { setPostData } from "./set-post-data"

export const loadPostAsync = (serverRequest, postId) => (dispatch) => 
    serverRequest("fetchPost", postId).then((loadedData) => {
        if (loadedData.res) dispatch(setPostData(loadedData.res))
        return loadedData
    })

