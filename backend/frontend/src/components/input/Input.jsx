import styled from "styled-components"
import { forwardRef } from "react"

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
    return <input className={className} {...props} ref={ref}/>
})

export const Input = styled(InputContainer)`
    width: ${({ width = '100%' }) => width}
    height: 40px;
    padding: ${({ padding = '10px' }) => padding};
    font-size: 18px;
    boder: 1px solid #000;

`