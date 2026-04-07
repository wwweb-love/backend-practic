import styled from "styled-components"
import { Button } from "../../../components"

const PaginationContainer = ({className, setPage, page, lastPage, setLastPage}) => {
    return (
        <div className={className}>
            <Button disabled={page === 1} onClick={() => setPage(1)}>В начало</Button>
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Предыдущая</Button>
            <Button className="current-page">Страница: {page}</Button>
            <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>Следующая</Button>
            <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>В конец</Button>
        </div>
    )
}

export const Pagination = styled(PaginationContainer)`
    display: flex;
    justify-content: center;
    margin: 10px 0 30px 0;
    padding: 0 20px;

    & button {
        margin: 0 20px;
    }

    & .current-page  {
        width: 100%;
        height: 32px;
        background-color: #fff;
        font-weight: 500;
        text-align: center;
        border:  1px solid #000;
    }
`