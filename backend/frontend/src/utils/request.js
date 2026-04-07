export function request(url, method, data) {
    console.log(url, method, data)
    return fetch(url, {
        method: method || "GET",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        body: data ? JSON.stringify(data) : undefined
    }).then(res => res.json())
}