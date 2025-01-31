/* eslint-disable react/jsx-props-no-spreading */
import NavigationBarLink, { NavigationLinkProps } from "./NavigationBarLink";

export default function HeaderView() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        App
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {NAVIGATION_LINKS.map(item => (
                                <li
                                    className="nav-item"
                                    key={`navigation-item-${item.title}`}
                                >
                                    <NavigationBarLink {...item} />
                                </li>
                            ))}
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </header>
    );
}

const NAVIGATION_LINKS: NavigationLinkProps[] = [
    {
        title: "Main",
        url: "/",
        isEnabled: true,
    },
    {
        title: "Example",
        url: "/example",
        isEnabled: true,
    },
];
