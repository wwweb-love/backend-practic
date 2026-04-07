
export const removePostAsync = (serverRequest, id) => {
    return serverRequest("removePost", id)
}