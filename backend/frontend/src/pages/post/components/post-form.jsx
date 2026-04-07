import styled from "styled-components";
import { H2, Icon, Input } from "../../../components";
import { SpecialPanel } from "./special-panel";
import { useLayoutEffect, useRef, useState } from "react";
import { sanitizeContent } from "./utils/sanitize-content";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { savePostAsync } from "../../../action";
import { useServerRequest } from "../../../hooks";
import { RESET_POST_DATA } from "../../../action";

const PostFormContainer = ({
    className,
    post: { id, title, content, publishedAt, imageUrl },
}) => {

    const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
    const [titleValue, setTitleValue] = useState(imageUrl);
    const contentRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const serverRequest = useServerRequest();

    const onSave = () => {
        const newContent = sanitizeContent(contentRef.current.innerHTML);

        dispatch(
            savePostAsync(serverRequest, {
                id,
                imageUrl: imageUrlValue,
                title: titleValue,
                content: newContent,
            }),
        ).then(({ id }) => {
            navigate(`/post/${id}`);
        });
    };

    const onImageChange = ({ target }) => setImageUrlValue(target.value);
    const onTitleChange = ({ target }) => setTitleValue(target.value);

    useLayoutEffect(() => {
        setImageUrlValue(imageUrl);
        setTitleValue(title);
    }, [imageUrl, title]);

    return (
        <div className={className}>
            <Input
                value={imageUrlValue}
                placeholder="Изображение..."
                onChange={onImageChange}
            />
            <Input
                value={titleValue}
                placeholder="Заголовок..."
                onChange={onTitleChange}
            />

            {/* <img src={imageUrl ? imageUrl : null} alt={title} /> */}
            {/* <H2>{title}</H2> */}

            <SpecialPanel
                id={id}
                publishedAt={publishedAt}
                margin={"20px 0"}
                editButton={
                    <Icon
                        id="fa-floppy-o"
                        margin="0 7px 0 0"
                        onClick={onSave}
                    />
                }
            />
            <div
                ref={contentRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
                className="post-text"
            >
                {content}
            </div>
        </div>
    );
};

export const PostForm = styled(PostFormContainer)`
    display: flex;
    flex-direction: column;

    & .post-text {
        font-size: 18px;
        white-space: pre-line;
        min-height: 80px;
        border: 1px solid #000;
    }
`;
