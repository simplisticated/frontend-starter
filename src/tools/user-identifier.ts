import { v4 as uuidv4 } from "uuid";
import LOCAL_STORAGE from "../data/store/local-storage";

export function getOrCreateUserIdentifier(): string {
    const existingUserIdentifier = LOCAL_STORAGE.userIdentifier;
    if (existingUserIdentifier) return existingUserIdentifier;

    const userIdentifier = (() => {
        const value = uuidv4().replace(/-/g, "");
        const timestamp = new Date().getTime();
        return `${value}${timestamp}`;
    })();
    LOCAL_STORAGE.userIdentifier = userIdentifier;
    return userIdentifier;
}
