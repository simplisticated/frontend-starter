import { Link } from "react-router-dom";

export default function NavigationBarLink(props: NavigationLinkProps) {
    const classes = [
        "nav-link",
        props.isActive ?? isCurrentRelativeUrl(props.url) ? "active" : "",
        props.isEnabled ? "" : "disabled",
    ].join(" ");

    if (props.reload) {
        return (
            <a className={classes} aria-current="page" href={props.url}>
                {props.title}
            </a>
        );
    }

    return (
        <Link className={classes} aria-current="page" to={props.url}>
            {props.title}
        </Link>
    );
}

export interface NavigationLinkProps {
    title: string;
    url: string;
    isActive?: boolean;
    isEnabled: boolean;
    reload?: boolean;
}

function isCurrentRelativeUrl(relativeUrl: string): boolean {
    const currentUrlObject = new URL(document.location.href);
    currentUrlObject.search = "";
    const currentUrl = currentUrlObject.href;
    const baseUrl = `${currentUrlObject.protocol}//${currentUrlObject.host}`;
    return currentUrl.substring(baseUrl.length) === relativeUrl;
}
