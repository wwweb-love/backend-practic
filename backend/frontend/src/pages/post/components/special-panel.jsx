import styled from "styled-components"
import { Icon } from "../../../components"
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../action"
import { useDispatch } from "react-redux"
import {useServerRequest} from "../../../hooks"
import { useNavigate } from "react-router"

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {

    const dispatch = useDispatch()
    const serverRequest = useServerRequest()
    const navigate = useNavigate()

    const onPostRemove = (id) => {
            dispatch(
                openModal({
                    text: "Удалить пост?",
                    onConfirm: () => {
                        removePostAsync(serverRequest, id).then(() => navigate("/"))
                        dispatch(CLOSE_MODAL)
                    },
                    onCancel: () => dispatch(CLOSE_MODAL)
                })
            )
        }

    return (
        <div className={className}>
            <div className="special-panel">
                <div className="published-at">
                    {publishedAt && <Icon id="fa-calendar-o" margin="0 7px 0 0" inactive={"true"} />}
                    <div className="published-at-year">{publishedAt}</div>
                </div>

                <div className="buttons">
                    {editButton}
                    {publishedAt && <Icon id="fa-trash-o" margin="0 7px 0 0" onClick={() => onPostRemove(id)} />}
                </div>
            </div>
        </div>
    )
}

export const SpecialPanel = styled(SpecialPanelContainer)`

    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: ${({margin}) => margin};
        font-size: 20px;
        height: 100%;
    }

    & .published-at {
        display: flex;
        gap: 10px;
    }

    & .published-at-year {
        display: flex;
        white-space: nowrap;
    }

    & i {
        position: relative;
        // font-size: 20px;
        top: -1px;
    }

    & .buttons {
        display: flex;
    }
`