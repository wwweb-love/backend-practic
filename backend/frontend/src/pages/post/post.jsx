import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useMatch } from "react-router";
import styled from "styled-components";
import { loadPostAsync, RESET_POST_DATA } from "../../action";
import { selectPost } from "../../selectors";
import { useServerRequest } from "../../hooks";
import { PostContent, Comments } from "./components";
import { PostForm } from "./components/post-form";
import { Content } from "../../components";

const PageContainer = ({ className }) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const params = useParams();
    const isCreating = useMatch("/post/");
    const isEditing = useMatch("/post/:id/edit");
    const post = useSelector(selectPost);
    const [error, setError] = useState(true);
    const [isLoading, setIsLoading] = useState(true)


    useLayoutEffect(() => {
        dispatch(RESET_POST_DATA);
    }, [dispatch]);

    useEffect(() => {
        if (isCreating) {
            dispatch(RESET_POST_DATA);
            setIsLoading(false)
            return;
        }

        dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
            setError(postData.error)
            setIsLoading(false)

        });
    }, [dispatch, requestServer, params.id, isCreating]);

    if (isLoading) {
        return null
    }

    return (error ? <Content error={error}/> : <div className={className}>
        {isCreating || isEditing ? (
            <PostForm post={post} />
        ) : (
            <>
                <PostContent post={post} />
                <Comments comments={post.comments} postId={post.id} />
            </>
        )}
    </div>)
};

export const Post = styled(PageContainer)`
    width: 1000px;
    padding: 40px 80px;
`;
