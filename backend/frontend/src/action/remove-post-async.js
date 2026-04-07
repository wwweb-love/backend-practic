import { request } from "../utils/request"

export const removePostAsync = (id) => {
    return request(`/posts/${id}`, "DELETE")
}