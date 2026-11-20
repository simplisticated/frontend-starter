import { APP_CONFIGURATION } from "../../app/configuration";
import { Footer } from "./Footer";
import { Navbar, type NavigationItem } from "./Navbar";

export function MainLayout(props: Props) {
    return (
        <div
            id="top"
            className="flex min-h-screen flex-col bg-[var(--color-canvas)] text-[var(--color-content)]"
        >
            <a
                href="#main-content"
                className="sr-only z-50 rounded-md bg-[var(--color-surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--color-content)] shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-canvas)]"
            >
                Перейти к основному содержимому
            </a>

            <Navbar
                brandName={APP_CONFIGURATION.brand.name}
                brandHref={APP_CONFIGURATION.brand.url}
                navigation={NAVIGATION}
            />

            <main id="main-content" className="flex-1">
                {props.content}
            </main>

            <Footer />
        </div>
    );
}

export interface Props {
    content: JSX.Element;
}

const NAVIGATION: NavigationItem[] = [
    {
        label: APP_CONFIGURATION.pages.home.navbarTitle,
        to: APP_CONFIGURATION.pages.home.url,
    },
];
