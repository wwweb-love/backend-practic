import { setPostData } from "./set-post-data";

export const savePostAsync = (serverRequest, newPostData) => (dispatch) =>
    serverRequest("savePost", newPostData).then((loaded) => {
        dispatch(setPostData(loaded.res));
        return loaded.res;
    });
