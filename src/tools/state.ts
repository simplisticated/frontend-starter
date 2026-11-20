import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState as useStateStandardFunction,
} from "react";
import { useStorage } from "./local-storage";

export function useState<S>(
    initialState: S | (() => S),
    stateId?: string,
    store?: "local" | "session"
): [S, Dispatch<SetStateAction<S>>, () => void] {
    const [storageData, setStorageData, updateFromStorage] = useStorage<S>(
        store ?? "local",
        stateId ?? ""
    );
    const standard = useStateStandardFunction<S>(initialState);
    const hasStateId = typeof stateId !== "undefined" && stateId.length > 0;

    useEffect(() => {
        if (!storageData && hasStateId) {
            setStorageData(initialState);
            console.log("set storage data", { initialState, stateId, store });
        }
    }, [initialState, stateId, store]);

    if (!hasStateId) {
        return [...standard, () => {}];
    }

    const initialValue =
        typeof initialState === "function"
            ? (initialState as () => S)()
            : initialState;
    const state = storageData ?? initialValue;
    const setter: Dispatch<SetStateAction<S>> = value => {
        setStorageData(prevStorageData => {
            const previousState =
                prevStorageData === null ||
                typeof prevStorageData === "undefined"
                    ? initialValue
                    : prevStorageData;
            return typeof value === "function"
                ? (value as (prevState: S) => S)(previousState)
                : value;
        });
    };

    return [state, setter, updateFromStorage];
}
