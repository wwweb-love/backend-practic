import styled from "styled-components"
import { Input, Icon } from "../../../components"
export const SearchContainer = ({ className, searchPhrase, onChange }) => {

    return (
        <div className={className}>
            <Input value={searchPhrase} onChange={onChange} placeholder="Поиск по заголовкам..." />

            <Icon
                inactive={"true"}
                id="fa-search"
                margin="0 7px 0 0px"
            />
        </div>
    )

}

export const Search = styled(SearchContainer)`
    display: flex;
    width: 340px;
    margin: 40px auto 0 auto;
    position: relative;

    & input {
        width: 100%;
        padding: 10px 40px 10px 10px;
    }

    & > div {
        position: absolute;
        top: 3px;
        right: 9px;
        font-size: 21px;
    }
    
`