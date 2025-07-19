import { useEffect, useState } from "react";

interface Item<Value> {
    value: Value | null;
    timestamp?: number;
}

function isItem(obj: any): obj is Item<any> {
    if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
        return ![
            "value" in obj,
            "timestamp" in obj ? typeof obj.timestamp === "number" : true,
        ].includes(false);
    }
    return false;
}

function readFromStorage<Value>(storage: Storage, key: string): Value | null {
    try {
        const data = storage.getItem(key);
        if (typeof data !== "string") return null;
        const parsed = JSON.parse(atob(data));
        return isItem(parsed) ? parsed.value : null;
    } catch {
        return null;
    }
}

function writeToStorage<Value>(
    storage: Storage,
    key: string,
    value: Value | null
): boolean {
    try {
        const item: Item<Value> = {
            value,
        };
        const data = btoa(JSON.stringify(item));
        storage.setItem(key, data);
        return true;
    } catch {
        return false;
    }
}

function useStorage<Value = string>(
    storageType: "local" | "session",
    key: string
): [Value | null, (value: Value | null) => boolean] {
    const storage = (() => {
        if (typeof window === "undefined") return null;
        switch (storageType) {
            case "local":
                return localStorage;
            case "session":
                return sessionStorage;
            default:
                return null;
        }
    })();

    const [data, setData] = useState<Value | null>(() => {
        if (!storage) return null;
        return readFromStorage(storage, key);
    });

    const setValue = (value: Value | null): boolean => {
        if (!storage) return false;
        const result = writeToStorage(storage, key, value);
        if (!result) return false;
        setData(value);
        return true;
    };

    useEffect(() => {
        if (!storage) return;
        const handler = (event: StorageEvent) => {
            if (event.key === key && event.storageArea === storage) {
                setData(readFromStorage(storage, key));
            }
        };
        window.addEventListener("storage", handler);
        return () => window.removeEventListener("storage", handler);
    }, [key, storage]);

    return [data, setValue];
}

export function useLocalStorage<Value = string>(key: string) {
    return useStorage<Value>("local", key);
}

export function useSessionStorage<Value = string>(key: string) {
    return useStorage<Value>("session", key);
}
