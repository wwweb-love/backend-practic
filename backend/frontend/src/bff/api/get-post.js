import { transformPost } from "../../transformers";

export const getPost = async (postId) => 
    fetch(`http://localhost:3033/posts/${postId}`)
        .then((res) => {
            if (res.ok) {
                return res
            }

            const error = res.status == 404 ? "Такая страница не существует" : "Что-то пошло не так. Попробуйте еще раз позднее"
        
            return Promise.reject(error)
        })


        .then((loaded) => loaded.json())
        .then((loaded) => loaded && transformPost(loaded)) 

