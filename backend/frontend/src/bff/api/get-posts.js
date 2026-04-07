import { transformPost } from "../../transformers";

export const getPosts = (searchPhrase, page, limit) => {
// http://localhost:3033/posts?title_like=Товарищи&_page=1&_per_page=9
    return fetch(`http://localhost:3033/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`)
        .then((loaded) => Promise.all([loaded.json(), loaded.headers.get("X-Total-Count")]))
        .then(([loadedArr, links]) => ({
            posts: loadedArr && loadedArr.map(transformPost),
            links
        }))
}
