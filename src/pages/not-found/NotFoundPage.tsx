import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <main className="flex min-h-[65vh] items-center justify-center px-6 py-20">
            <div className="w-full max-w-xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    Ошибка 404
                </p>

                <h2 className="mt-6 text-2xl font-semibold text-[var(--color-content)] sm:text-3xl">
                    Страница не найдена
                </h2>

                <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[var(--color-muted)]">
                    Возможно, страница была удалена, переехала или вы
                    воспользовались неправильной ссылкой.
                </p>

                <div className="mt-9">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent-strong)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg>
                        На главную
                    </Link>
                </div>
            </div>
        </main>
    );
}
