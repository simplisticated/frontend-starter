import { useEffect } from "react";
import ANALYTICS from "../../../analytics";
import PageWrapper from "../../page-wrapper/PageWrapper";
import { MAIN_PAGE_URL } from "../main/MainPage";
import { getFileFromPublicFolder } from "../../../tools/public";

export const NOT_FOUND_PAGE_IDENTIFIER = "not-found";

export default function NotFoundPage() {
    useEffect(() => {
        ANALYTICS.pageView(NOT_FOUND_PAGE_IDENTIFIER);
    }, []);
    return (
        <PageWrapper
            insideMain={
                <div className="text-center max-w-xl mx-auto">
                    <img
                        src={getFileFromPublicFolder(
                            "/images/other/not-found.svg"
                        )}
                        alt="404"
                        className="mx-auto mb-8 max-w-xs"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
                        Упс! Такой страницы не существует.
                    </h1>
                    <p className="text-gray-300 text-lg mb-6">
                        Возможно, вы ошиблись в адресе. Попробуйте ещё раз или
                        вернитесь на главную.
                    </p>
                    <a
                        href={MAIN_PAGE_URL}
                        className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition"
                    >
                        На главную
                    </a>
                </div>
            }
        />
    );
}
