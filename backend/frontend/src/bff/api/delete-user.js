export const deleteUser = (userId) =>
    fetch(`http://localhost:3033/users/${userId}`, {
        method: "DELETE",
    });
