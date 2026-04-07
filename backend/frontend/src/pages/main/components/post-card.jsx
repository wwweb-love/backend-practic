import styled from "styled-components";
import { Icon } from "../../../components";
import { Link } from "react-router-dom";

const PostCardContainer = ({
    className,
    id,
    title,
    imageUrl,
    publishedAt,
    commentsCount,
}) => {
    return (
        <div className={className}>
            <Link to={`/post/${id}`}>
                <img src={imageUrl} alt={title} />
                <div className="post-card-footer">
                    <h4>{title}</h4>

                    <div className="calendar-comments">
                        <div className="post-card-info">
                            <Icon
                                inactive={"true"}
                                id="fa-calendar-o"
                                margin="0 7px 0 0"
                                size="18px"
                            />
                            {publishedAt}
                        </div>

                        <div className="comments-count">
                            <Icon
                                inactive={"true"}
                                id="fa-comment-o"
                                margin="0 7px 0 0"
                                size="18px"
                            />
                            {commentsCount}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export const PostCard = styled(PostCardContainer)`
    width: 280px;
    flex-direction: column;
    display: flex;
    margin: 20px;
    border: 1px solid #000;

    & .post-card-footer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100px;
        justify-content: space-between;
        padding: 5px;
        border-top: 1px solid #000;
    }

    & img {
        display: block;
    }

    & .calendar-comments {
        display: flex;
        justify-content: space-between;
    }

    & .post-card-info {
        display: flex;
    }

    & .comments-count {
        display: flex;
    }

    h4 {
        margin: 0;
    }

    
`;
