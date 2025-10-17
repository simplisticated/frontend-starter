import React from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { APP_CONFIGURATION } from "./app/configuration";
import reportWebVitals from "./reportWebVitals";
import LOCAL_STORAGE from "./data/store/local-storage";
import ANALYTICS from "./analytics";
import STORE from "./data/store/store";
import App from "./components/app/App";

function renderApp() {
    const isIFrame = window.self !== window.top;

    if (isIFrame) {
        return APP_CONFIGURATION.app.iFrameContainer.isEnabled ? (
            <App />
        ) : (
            APP_CONFIGURATION.app.iFrameContainer.placeholder
        );
    }
    return <App />;
}

function getOrCreateUserIdentifier(): string {
    const existingUserIdentifier = LOCAL_STORAGE.userIdentifier;
    if (existingUserIdentifier) return existingUserIdentifier;

    const userIdentifier = (() => {
        const value = uuidv4().replace(/-/g, "");
        const timestamp = new Date().getTime();
        return `${value}${timestamp}`;
    })();
    LOCAL_STORAGE.userIdentifier = userIdentifier;
    return userIdentifier;
}

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <React.StrictMode>{renderApp()}</React.StrictMode>,
    document.getElementById("root")
);

document.addEventListener("visibilitychange", () => {
    STORE.isPageHidden = document.visibilityState === "hidden";
});

const userIdentifier = getOrCreateUserIdentifier();
ANALYTICS.identify(userIdentifier);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
