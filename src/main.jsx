import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/app/store.js";
import { BrowserRouter as Router } from "react-router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </StrictMode>
);
