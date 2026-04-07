import { ACTION_TYPE } from "../action"

const initialAppState = {
    wasLogout: false,
    modal: {
        isOpen: false,
        text: "Удалить комментарий?",
        onConfirm: () => { },
        onCancel: () => { },
    }
}

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        // case 

        case ACTION_TYPE.LOGOUT:
            return {
                ...state,
                wasLogout: !state.wasLogout
            }

        case ACTION_TYPE.OPEN_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    ...action.payload,
                    isOpen: true
                }
            }

        case ACTION_TYPE.CLOSE_MODAL:
            return initialAppState

        default: {
            return state
        }
    }
}