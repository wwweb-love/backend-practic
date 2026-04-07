import { generateDate } from "../utils";

export const addPost = ({ id, title, imageUrl, publishedAt, content }) =>
    fetch(`http://localhost:3033/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            title,
            image_url: imageUrl,
            published_at: generateDate(),
            content
        })
    }).then((loaded) => loaded.json())