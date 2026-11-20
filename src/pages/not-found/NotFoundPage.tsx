import { APP_CONFIGURATION } from "../../configuration/configuration";

export function NotFoundPage() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="scroll-mt-20 bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-indigo-50 px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
                    <div className="max-w-2xl">
                        <h2
                            id="about-heading"
                            className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
                        >
                            Страница не найдена
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                            Но у нас есть много других интересных страниц,
                            которые вы можете посетить. Пожалуйста, используйте
                            навигацию выше, чтобы вернуться на главную страницу
                            или исследовать другие разделы нашего сайта.
                        </p>
                    </div>
                    <a
                        href={APP_CONFIGURATION.pages.home.url}
                        className="mt-7 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 lg:mt-0 motion-reduce:transition-none"
                    >
                        На главную
                    </a>
                </div>
            </div>
        </section>
    );
}
