import styled from "styled-components"
import { useSelector } from "react-redux"
import { Button } from "../button/Button"
import { selectModalIsOpen, selectModalOnCancel, selectModalOnConfirm, selectModalText } from "../../selectors"

const ModalContainer = ({ className }) => {
    const isOpen = useSelector(selectModalIsOpen)
    const text = useSelector(selectModalText)
    const onConfirm = useSelector(selectModalOnConfirm)
    const onCancel = useSelector(selectModalOnCancel)


    if (!isOpen) {
        return null
    }


    return (
        <div className={className}>
            <div className="overflow"></div>
            <div className="box">
                <h3>{text}</h3>
                <div className="buttons">
                    <Button width="120px" onClick={onConfirm}>Ок</Button>
                    <Button width="120px" onClick={onCancel}>Отмена</Button>
                </div>
            </div>
        </div>
    )
}

export const Modal = styled(ModalContainer)`
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    

    & .overflow {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7)
    }

    & .box {
        display: inline-block;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fafafa;
        padding: 0 20px 20px 20px;
        text-content: center;
    }
    
    .box h3 {
        display: flex;
        justify-content: center;
    }

    & .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`