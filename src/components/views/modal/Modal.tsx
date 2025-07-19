import { useEffect, useState } from "react";

let openModalsCount = 0;

function updateBodyClass() {
    const className = "overflow-hidden";
    const body = document.querySelector("body");
    if (!body) return;

    if (openModalsCount > 0) {
        body.classList.add(className);
    } else {
        body.classList.remove(className);
    }
}

export default function Modal(props: ModalProps) {
    const classes = [
        "fixed inset-0 flex bg-black bg-opacity-50 items-center justify-center z-50",
        props.visible ? "" : "hidden",
    ].join(" ");

    useEffect(() => {
        if (props.visible) {
            openModalsCount += 1;
            updateBodyClass();
        }

        return () => {
            if (props.visible) {
                openModalsCount -= 1;
                updateBodyClass();
            }
        };
    }, [props.visible]);

    return (
        <div className={classes}>
            <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md relative">
                <button
                    id="close-modal"
                    className="absolute top-2 right-2 text-white text-xl"
                    type="button"
                    onClick={props.requestedToClose}
                >
                    &times;
                </button>
                <div>{props.content}</div>
            </div>
        </div>
    );
}

interface ModalProps {
    content?: JSX.Element | null;
    visible?: boolean;
    requestedToClose: () => void;
}

export function useModal(props: UseModalProps) {
    const [isVisible, setVisible] = useState(false);
    const show = () => {
        setVisible(true);
    };
    const hide = () => {
        setVisible(false);
    };
    const component = (
        <Modal
            content={props.content}
            visible={isVisible}
            requestedToClose={hide}
        />
    );
    return {
        component,
        show,
        hide,
    };
}

interface UseModalProps {
    content?: JSX.Element | null;
}
