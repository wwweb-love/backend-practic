import { request } from "../utils/request"
import { setPostData } from "./set-post-data"

export const loadPostAsync = (postId) => (dispatch) => 
    request(`/posts/${postId}`).then((loadedData) => {
        if (loadedData.data) dispatch(setPostData(loadedData.data))
        return loadedData
    })

