import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Blog from "./Blog.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.jsx";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Blog />
        </BrowserRouter>
    </Provider>
);
