import styled from "styled-components"
import { Icon } from "../../../../components"
import { useDispatch } from "react-redux"
import { removeCommentAsync, openModal, CLOSE_MODAL } from "../../../../action"


const CommentContainer = ({ className, id, author, content, publishedAt, postId }) => {

    const dispatch = useDispatch()

    const onCommentRemove = (id) => {
        dispatch(openModal({ 
            text: "Удалить коммментарий?",
            onConfirm: () => {
                dispatch(removeCommentAsync(postId, id))
                dispatch(CLOSE_MODAL)
            },
            onCancel: () => dispatch(CLOSE_MODAL)
        }))
    }

    return (
        <div className={className}>
            <div className="comment">
                <div className="information-panel">
                    <div className="author">
                        <Icon id="fa-user-circle-o" inactive={"true"} size="21px" margin="0 10px 0 0" />
                        {author}</div>
                    <div className="published-at">
                        <Icon id="fa-calendar-o" inactive={"true"} size="21px" margin="0 10px 0 0" />
                        {publishedAt}</div>
                </div>
                <div className="comment-text">{content}</div>
            </div>
            <Icon id="fa-trash-o" onClick={() => onCommentRemove(id)} />

        </div>
    )
}

export const Comment = styled(CommentContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    & .comment {
    padding: 10px 5px;
        width: 550px;
        border: 1px solid black;
    }

    & .information-panel {
        display: flex;
        justify-content: space-between;

    }

    & .author {
        display: flex;
    }

    & .published-at {
        display: flex;
    }
`