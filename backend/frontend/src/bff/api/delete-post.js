
export const deletePost = async (id) => {

    fetch(`http://localhost:3033/posts/${id}`, {
        method: "DELETE",
    })
}
