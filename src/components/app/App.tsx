import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import MainPage from "../pages/main/MainPage";
import { Helmet } from "react-helmet";
import ErrorBoundary from "../error/ErrorBoundary";
import { ENV } from "../../app/env";
import { AppEnvironment } from "../../app/app-environment";
import { APP_CONFIGURATION } from "../../app/configuration";

function Content() {
    const content = (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={APP_CONFIGURATION.pages.home.url}>
                        <MainPage />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Helmet>
                {ENV.CURRENT_ENVIRONMENT !== AppEnvironment.production && (
                    <title>{ENV.CURRENT_ENVIRONMENT} environment</title>
                )}
            </Helmet>
        </>
    );
    return <ErrorBoundary content={content} />;
}

function Placeholder() {
    return <div>iFrame is not allowed</div>;
}

export default function App() {
    const isIFrame = (() => {
        try {
            return window.self !== window.top;
        } catch {
            return true;
        }
    })();
    if (isIFrame && !APP_CONFIGURATION.app.iFrameEnabled) {
        return <Placeholder />;
    }
    return <Content />;
}
