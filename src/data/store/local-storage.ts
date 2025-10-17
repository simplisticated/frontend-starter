import { S } from "@simplisticated/easy-storage";

class LocalStorage {
    private store = S.local;

    public get userIdentifier(): string | null {
        return this.store.get(LocalStorageKey.userIdentifier) ?? null;
    }

    public set userIdentifier(value: string) {
        this.store.set(LocalStorageKey.userIdentifier, value);
    }
}

const LOCAL_STORAGE = new LocalStorage();
export default LOCAL_STORAGE;

enum LocalStorageKey {
    userIdentifier = "user-identifier",
}
