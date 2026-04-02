const Comment = require("../models/Comment") 
const Post = require("../models/Post")

// add comment
async function addComment(postId, comment) {
    const newComment = await Comment.create(comment)

    await Post.findByIdAndUpdate(postId, {$push: {comments: newComment}})

    await newComment.populate("author")

    return newComment
}


// delete comment

async function deleteComment(postId, commentId) {
    await Comment.deleteOne({_id: commentId})
    await Post.findByIdAndUpdate(postId, {$pull: { comments: commentId }})
}

// read comments

module.exports = {
    addComment,
    deleteComment
}