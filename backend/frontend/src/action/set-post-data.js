import { ACTION_TYPE } from "./action-type"

export const setPostData = (loadDataPost) => {
    return ({
        type: ACTION_TYPE.SET_POST_DATA,
        payload: loadDataPost
    })
}