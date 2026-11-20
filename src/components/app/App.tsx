import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./ErrorBoundary";
import { ENV } from "../../app/env";
import { AppEnvironment } from "../../app/app-environment";
import { APP_CONFIGURATION } from "../../app/configuration";
import { MainLayout } from "../../layouts/main/MainLayout";
import { MainPage } from "../../pages/main/MainPage";
import { NotFoundPage } from "../../pages/not-found/NotFoundPage";

function Content() {
    const content = (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={APP_CONFIGURATION.pages.home.url}>
                        <MainLayout content={<MainPage />} />
                    </Route>
                    <Route>
                        <MainLayout content={<NotFoundPage />} />
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

function IFramePlaceholder() {
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
    if (isIFrame && !APP_CONFIGURATION.app.iFrameAllowed) {
        return <IFramePlaceholder />;
    }
    return <Content />;
}
