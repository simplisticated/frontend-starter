import { MAIN_PAGE_URL } from "../../pages/main/MainPage";

function NavbarItem(props: { title: string; url: string }) {
    const isCurrentRelativeUrl = (relativeUrl: string): boolean => {
        const currentUrlObject = new URL(document.location.href);
        currentUrlObject.search = "";
        const currentUrl = currentUrlObject.href;
        const baseUrl = `${currentUrlObject.protocol}//${currentUrlObject.host}`;
        return currentUrl.substring(baseUrl.length) === relativeUrl;
    };
    const isCurrentPage = isCurrentRelativeUrl(props.url);
    const classes = [
        isCurrentPage ? "hover:text-yellow-400" : "hover:text-white",
        isCurrentPage ? "text-yellow-500" : "",
        "whitespace-nowrap",
    ].join(" ");
    return (
        <a className={classes} href={props.url}>
            {props.title}
        </a>
    );
}

export default function HeaderView() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-md backdrop-blur-md bg-gray-900/70">
            <a href="/">
                <div className="flex items-center gap-2 md:gap-3">
                    <img
                        src="/images/logo/logo.png"
                        alt="logo"
                        className="h-6 md:h-8 w-auto"
                    />
                    <h1 className="text-2xl font-bold text-yellow-500">App</h1>
                </div>
            </a>

            <nav className="flex gap-4 text-sm text-gray-300 flex-wrap">
                <NavbarItem title="Главная" url={MAIN_PAGE_URL} />
            </nav>
        </header>
    );
}
