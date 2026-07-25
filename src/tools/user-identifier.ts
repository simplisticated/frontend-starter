import { v4 as uuidv4 } from "uuid";
import { readFromStorage, writeToStorage } from "./local-storage";

export function getOrCreateUserIdentifier(): string {
    const existingUserIdentifier = readFromStorage<string>(
        localStorage,
        "user-identifier"
    );
    if (existingUserIdentifier) return existingUserIdentifier;

    const userIdentifier = (() => {
        const value = uuidv4().replace(/-/g, "");
        const timestamp = new Date().getTime();
        return `${value}${timestamp}`;
    })();
    writeToStorage(localStorage, "user-identifier", userIdentifier);
    return userIdentifier;
}
