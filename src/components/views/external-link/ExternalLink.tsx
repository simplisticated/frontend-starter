import ANALYTICS from "../../../app/analytics";

export default function ExternalLink(props: Props) {
    const clickHandler = () => {
        ANALYTICS.externalLink(props.url);
    };
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            href={props.url}
            target="_blank"
            rel={`noopener ${props.hideReferrer ? "noreferrer" : ""}`}
            className={props.classes}
            onClick={clickHandler}
        >
            {props.content}
        </a>
    );
}

interface Props {
    url: string;
    content: string | JSX.Element;
    classes?: string;
    hideReferrer?: boolean;
}
