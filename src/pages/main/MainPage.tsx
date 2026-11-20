export function MainPage() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-slate-950 text-white">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/25 via-slate-950 to-slate-950"
                />

                <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)] lg:items-center lg:px-8 lg:py-32">
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
                            Стартовая страница
                        </p>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Хорошая основа для следующего проекта
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                            Это демонстрационная главная страница. Замени
                            заголовок, описание и секции ниже на содержание
                            своего продукта — общий каркас приложения уже
                            находится в MainLayout.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#features"
                                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-colors hover:bg-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
                            >
                                Посмотреть структуру
                            </a>
                            <a
                                href="#about"
                                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
                            >
                                Принципы проекта
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
                            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                <span className="ml-2 text-xs text-slate-400">
                                    src/
                                </span>
                            </div>
                            <div className="space-y-3 py-5 font-mono text-sm">
                                <div className="flex items-center gap-3 text-indigo-200">
                                    <span className="text-slate-500">├─</span>{" "}
                                    app/
                                </div>
                                <div className="flex items-center gap-3 pl-6 text-slate-300">
                                    <span className="text-slate-500">├─</span>{" "}
                                    layouts/
                                </div>
                                <div className="flex items-center gap-3 pl-6 text-slate-300">
                                    <span className="text-slate-500">└─</span>{" "}
                                    router/
                                </div>
                                <div className="flex items-center gap-3 text-emerald-200">
                                    <span className="text-slate-500">├─</span>{" "}
                                    pages/
                                </div>
                                <div className="flex items-center gap-3 pl-6 text-slate-300">
                                    <span className="text-slate-500">└─</span>{" "}
                                    main/
                                </div>
                                <div className="flex items-center gap-3 text-amber-200">
                                    <span className="text-slate-500">└─</span>{" "}
                                    shared/
                                </div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                                <p className="text-xs font-medium text-slate-400">
                                    Архитектурный принцип
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-200">
                                    У каждой части приложения есть понятная
                                    ответственность и своё место.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="features"
                aria-labelledby="features-heading"
                className="scroll-mt-20 bg-[var(--color-canvas)] py-20 sm:py-24"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-[var(--color-accent)]">
                            Основа проекта
                        </p>
                        <h2
                            id="features-heading"
                            className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-content)] sm:text-4xl"
                        >
                            Всё на своих местах
                        </h2>
                        <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                            Ниже — пример секции с карточками. Используй её как
                            отправную точку или замени собственными блоками.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {highlights.map(item => (
                            <article
                                key={item.number}
                                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm shadow-black/20"
                            >
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-surface)] text-sm font-semibold text-[var(--color-accent)]">
                                    {item.number}
                                </span>
                                <h3 className="mt-5 text-lg font-semibold text-[var(--color-content)]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="about"
                aria-labelledby="about-heading"
                className="scroll-mt-20 bg-[var(--color-surface)] py-20 sm:py-24"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-accent-surface)] px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
                        <div className="max-w-2xl">
                            <h2
                                id="about-heading"
                                className="text-2xl font-semibold tracking-tight text-[var(--color-content)] sm:text-3xl"
                            >
                                Начни с простого
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
                                Сохраняй архитектуру понятной. Добавляй новые
                                уровни и абстракции только тогда, когда они
                                решают реальную задачу проекта.
                            </p>
                        </div>
                        <a
                            href="#top"
                            className="mt-7 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-indigo-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent-surface)] lg:mt-0 motion-reduce:transition-none"
                        >
                            Наверх
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

const highlights = [
    {
        number: "01",
        title: "Понятная структура",
        description:
            "Разделяйте страницы, общие элементы интерфейса и инфраструктуру приложения по назначению.",
    },
    {
        number: "02",
        title: "Адаптивный интерфейс",
        description:
            "Создавайте интерфейс, который остаётся удобным на телефонах, планшетах и больших экранах.",
    },
    {
        number: "03",
        title: "Готовность к развитию",
        description:
            "Добавляйте новые разделы и пользовательские сценарии, не усложняя базовую структуру проекта.",
    },
];
