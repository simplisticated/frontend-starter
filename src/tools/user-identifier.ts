import { v4 as uuidv4 } from "uuid";
import { readFromStorage, writeToStorage } from "./local-storage";
import { LocalStorageKey } from "../data/store/local-storage";

export function getOrCreateUserIdentifier(): string {
    const existingUserIdentifier = readFromStorage<string>(
        localStorage,
        LocalStorageKey.userIdentifier
    );
    if (existingUserIdentifier) return existingUserIdentifier;

    const userIdentifier = (() => {
        const value = uuidv4().replace(/-/g, "");
        const timestamp = new Date().getTime();
        return `${value}${timestamp}`;
    })();
    writeToStorage(
        localStorage,
        LocalStorageKey.userIdentifier,
        userIdentifier
    );
    return userIdentifier;
}
