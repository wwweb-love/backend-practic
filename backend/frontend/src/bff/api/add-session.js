export const addSession = (hash, user) => {
    fetch("http://localhost:3033/sessions", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            hash,
            user,
        })
    })
}