const Post = require("../models/Post")


// add post
async function addPost(post) {
    const newPost = await Post.create(post)

    await newPost.populate({
        path: "comments",
        populate: "author"
    })

    return newPost
}
// edit post
async function editPost(id, post) {
    const newPost = await Post.findByIdAndUpdate(id, post, { retirnDocument: "after" })


    await newPost.populate({
        path: "comments",
        populate: "author"
    })

    return newPost
}
// delete post 
function deletePost(id) {
    return Post.deleteOne({_id: id})
}

// get posts (pagination)
async function getPosts(search="", limit=10, page=1) {
    const [posts, count] = await Promise.all([
        Post.find({title: {$regex: search, $options: "i"}}) // i - регистронеависимый
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({createdAt: -1}),
        Post.countDocuments({title: {$regex: search, $options: "i"}})
    ])

    return {
        posts, 
        lastPage: Math.ceil(count / limit)
    }
}

// get post
function getPost(id) {
    return Post.findById(id).populate({
        path: "comments",
        populate: "author"
    })
}

module.exports = {
    addPost,
    editPost,
    deletePost,
    getPosts,
    getPost,
    addPost
}