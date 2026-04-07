
export const deleteComment = async (commentId) => {
    
    fetch(`http://localhost:3033/comments/${commentId}`, {
        method: "DELETE",
    });
}
