import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import MainPage from "../pages/main/MainPage";
import { Helmet } from "react-helmet";
import { CURRENT_ENVIRONMENT, AppEnvironment } from "../../app/environment";
import ErrorBoundary from "../error/ErrorBoundary";

export default function App() {
    const content = (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Helmet>
                {CURRENT_ENVIRONMENT !== AppEnvironment.production && (
                    <title>{CURRENT_ENVIRONMENT} environment</title>
                )}
            </Helmet>
        </>
    );
    return <ErrorBoundary content={content} />;
}
