import { useState } from "react";
import { NavLink } from "react-router-dom";
import { APP_CONFIGURATION } from "../../configuration/configuration";

export function Navbar(props: Props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="relative z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <NavLink
                    exact
                    to={APP_CONFIGURATION.brand.url}
                    onClick={closeMobileMenu}
                    className="group inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-surface)]"
                >
                    <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-400 text-sm font-bold text-slate-950"
                    >
                        {APP_CONFIGURATION.brand.name
                            .trim()
                            .charAt(0)
                            .toUpperCase() || "•"}
                    </span>
                    <span className="truncate text-base font-semibold tracking-tight text-[var(--color-content)]">
                        {APP_CONFIGURATION.brand.name}
                    </span>
                </NavLink>

                {props.navigation.length > 0 && (
                    <>
                        <nav
                            aria-label="Основная навигация"
                            className="hidden items-center gap-1 md:flex"
                        >
                            {props.navigation.map(item => (
                                <NavLink
                                    key={`${item.url}:${item.label}`}
                                    to={item.url}
                                    exact={item.exact}
                                    activeClassName={activeLinkClassName}
                                    className={linkClassName}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] md:hidden"
                            aria-label={
                                isMobileMenuOpen
                                    ? "Закрыть меню"
                                    : "Открыть меню"
                            }
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="main-mobile-navigation"
                            onClick={() =>
                                setIsMobileMenuOpen(isOpen => !isOpen)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        d="M6 6l12 12M18 6L6 18"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        d="M4 7h16M4 12h16M4 17h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </>
                )}
            </div>

            {props.navigation.length > 0 && (
                <nav
                    id="main-mobile-navigation"
                    aria-label="Мобильная навигация"
                    className={`${
                        isMobileMenuOpen ? "block" : "hidden"
                    } border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 shadow-lg md:hidden sm:px-6`}
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {props.navigation.map(item => (
                            <NavLink
                                key={`${item.url}:${item.label}`}
                                to={item.url}
                                exact={item.exact}
                                activeClassName={activeLinkClassName}
                                className={linkClassName}
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}

export interface NavigationItem {
    label: string;
    url: string;
    /** Включает точное совпадение URL, например для главной страницы. */
    exact?: boolean;
}

interface Props {
    brandName: string;
    brandHref: string;
    navigation: NavigationItem[];
}

const linkClassName =
    "rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-content)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

const activeLinkClassName =
    "bg-[var(--color-surface-hover)] text-[var(--color-content)]";
