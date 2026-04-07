import styled from "styled-components"

const IconContainer = ({className, id, disabled, ...props}) => {
    return (
    <div className={className} {...props}>
        <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
)}


export const Icon = styled(IconContainer)`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${({size = "24px"}) => size};
    margin: ${({margin = "0"}) => margin};
    cursor: pointer;
    color: ${({disabled}) => disabled ? "#ccc" : "#000"};

    &:hover {
        cursor: ${({inactive}) => inactive ? "default" : "pointer"};
    }
`

