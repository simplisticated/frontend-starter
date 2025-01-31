import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import MainPage from "../pages/main/MainPage";

export default function App() {
    return (
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
    );
}
