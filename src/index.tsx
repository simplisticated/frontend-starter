import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import STORE from "./data/store/store";
import App from "./components/app/App";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

document.addEventListener("visibilitychange", () => {
    STORE.isPageHidden = document.visibilityState === "hidden";
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
