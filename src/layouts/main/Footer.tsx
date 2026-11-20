import { APP_CONFIGURATION } from "../../app/configuration";

export function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-[var(--color-muted)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                <p>
                    © {new Date().getFullYear()} {APP_CONFIGURATION.brand.name}
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {/* Добавьте здесь любые дополнительные элементы футера, если необходимо */}
                </div>
            </div>
        </footer>
    );
}
