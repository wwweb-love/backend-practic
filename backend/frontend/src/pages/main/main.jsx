import { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import { PostCard } from "./components";
import { PAGINATION_LIMIT } from "../../constants";
import { Pagination } from "./components/pagination";
import { Search } from "./components/search";
import { debounce } from "./utils";
import { request } from "../../utils/request";

const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1)
    const [shouldSearch, setSearchShould] = useState(false)
    const [searchPhrase, setSearchPhrase] = useState("")

    useEffect(() => {

        request(`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`).then(({ data: { posts, lastPage } }) => {
            setPosts(posts);
            setLastPage(lastPage)
        });
    }, [page, shouldSearch]);

    const startDelayedSearch = useMemo(() => debounce(setSearchShould, 2000), [])

    const onSearch = ({ target }) => {
        setSearchPhrase(target.value)

        startDelayedSearch(!shouldSearch)
    }

    return (
        <div className={className}>
            <Search searchPhrase={searchPhrase} onChange={onSearch} />
            {posts.length ? <div className="post-list">
                {posts.map(
                    ({ id, title, publishedAt, imageUrl, comments }) => (
                        <PostCard
                            key={id}
                            id={id}
                            title={title}
                            publishedAt={publishedAt}
                            commentsCount={comments.length}
                            imageUrl={imageUrl}
                        />
                    ),
                )}
            </div> : <div className="no-posts-found">Статьи не найдены</div>}
            {posts.length != 0  && <Pagination lastPage={lastPage} setLastPage={setLastPage} page={page} setPage={setPage} />}

        </div>
    );
};

export const Main = styled(MainContainer)`

    .post-list {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
    }

    & .no-posts-found {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    } 
`;
