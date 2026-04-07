import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk"
import { appReducer, userReducer, usersReducer, postReducer, postsReducer } from "./reducers"

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose

const reducer = combineReducers({
    app: appReducer,
    user: userReducer,
    users: usersReducer,
    post: postReducer,
    posts: postsReducer,
})

export const store = createStore(reducer, composeEnhanser(applyMiddleware(thunk)))