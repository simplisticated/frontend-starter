import { useEffect } from "react";
import ANALYTICS from "../../../analytics";
import PageWrapper from "../../page-wrapper/PageWrapper";

export const MAIN_PAGE_URL = "/";

export const MAIN_PAGE_IDENTIFIER = "main";

export default function MainPage() {
    const main = (
        <div className="max-w-3xl mx-auto text-gray-200 space-y-8">
            <h1 className="text-3xl font-bold text-yellow-500 mb-4">
                Главная страница
            </h1>
            <p className="text-gray-400 mb-6">Пример содержимого страницы.</p>
        </div>
    );
    useEffect(() => {
        ANALYTICS.pageView(MAIN_PAGE_IDENTIFIER);
    }, []);
    return <PageWrapper insideMain={main} />;
}
