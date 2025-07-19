export default function AdvertisementPanel(props: Props) {
    const hasFixedHeight = typeof props.height === "number";

    const containerClasses = [
        "w-full mb-6 rounded-xl shadow-md overflow-hidden",
        hasFixedHeight
            ? `h-[${props.height}px] flex items-center justify-center`
            : "",
        props.backgroundColor ? `bg-[${props.backgroundColor}]` : "",
    ].join(" ");

    const imageClasses = hasFixedHeight
        ? "h-auto max-h-full max-w-full block"
        : "w-full h-auto object-cover block";

    const clickHandler = (event: any) => {
        if (props.clickHandler) {
            event.preventDefault();
            props.clickHandler();
        }
    };

    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            href={props.targetPath}
            target="_blank"
            rel={`noopener ${props.hideReferrer ? "noreferrer" : ""}`}
            className="block no-underline"
        >
            <div className={containerClasses} onClick={clickHandler}>
                <img src={props.image} alt="Реклама" className={imageClasses} />
            </div>
        </a>
    );
}

interface Props {
    image: string;
    height?: number;
    backgroundColor?: string;
    targetPath: string;
    hideReferrer?: boolean;
    clickHandler?: () => void;
}
