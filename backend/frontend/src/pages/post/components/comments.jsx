import styled from "styled-components"
import { Icon } from "../../../components"
import { Comment } from "./components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCommentAsync } from "../../../action"

const CommentsContainer = ({ className, comments, postId }) => {

    const [newComment, setNewComment] = useState('')
    // const { id, author, content, publishedAt } = comments
    const dispatch = useDispatch()


    const onNewAddComment = (postId, content) => {
        dispatch(addCommentAsync(postId, content))
        setNewComment('')
    }

    return (
        <div className={className}>

            <div className="new-comment">
                <textarea value={newComment} placeholder="Комментарий..." onChange={(e) => setNewComment(e.target.value)}></textarea>
                <Icon id="fa-paper-plane-o" onClick={() => onNewAddComment(postId, newComment)} />
            </div>
            <div className="comments">
                {/* <Comment key={0} id={0} author={"author"} content={"content"} publishedAt={"publishedAt"} /> */}

                {comments.map(({ id, author, content, publishedAt }) => (
                    <Comment key={id} id={id} author={author} content={content} publishedAt={publishedAt} postId={postId} />
                ))}
            </div>
        </div>
    )
}

export const Comments = styled(CommentsContainer)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    width: 580px;
    margin: 0px auto;
    
    & .new-comment {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0 0;
    }

    & textarea {
        width: 550px;
        height: 120px;
        resize: none;
        font-size: 18px;
        padding: 10px;
    }

    
`