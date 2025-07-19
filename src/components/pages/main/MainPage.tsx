import { useEffect } from "react";
import ANALYTICS from "../../../analytics";
import PageWrapper from "../../page-wrapper/PageWrapper";

export const MAIN_PAGE_URL = "/";

export const MAIN_PAGE_IDENTIFIER = "main";

export default function MainPage() {
    const main = <h1>Главная страница</h1>;
    useEffect(() => {
        ANALYTICS.pageView(MAIN_PAGE_IDENTIFIER);
    }, []);
    return <PageWrapper insideMain={main} />;
}
