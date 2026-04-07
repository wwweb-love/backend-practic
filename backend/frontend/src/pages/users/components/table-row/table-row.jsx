import styled from "styled-components";

const TableRowContainer = ({className, children}) => (
    <div className={className}> 
        {children}
    </div>
)

export const TableRow = styled(TableRowContainer)`
    display: flex;
    align-items: center;
    margin-right: 10px;
    border: ${({border}) => border ? "1px solid black" : "none"};


    & > div {
        padding: 0 10px;

        display: flex;
    }

    & .login-column {
        width: 172px;
    }

    & .regitrd-at-column {
        width: 213px;
    }

    & .role-column {
        width: auto;
    }
`