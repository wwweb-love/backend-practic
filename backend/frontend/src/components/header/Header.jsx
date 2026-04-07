import { Logo, ControlPanel } from "./index"
import styled from "styled-components"

const Description = styled.div`
    font-style: italic;
    display: flex;
    align-items: center;
`

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo />

        <Description>Вкб-технологии<br />Написание кода<br />Разбор ошибок</Description>

        <ControlPanel />
    </header>
)


export const Header = styled(HeaderContainer)`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    width: 1000px;
    padding: 20px 40px;
    height: 120px;
    box-shadow: 0px 0px 20px #000;
    background-color: #fff;
    z-index: 10;
`