import { useEffect, useState } from "react";

interface Item<Value> {
    value: Value | null;
    timestamp?: number;
}

function isItem(obj: any): obj is Item<any> {
    if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
        return [
            "value" in obj,
            "timestamp" in obj ? typeof obj.timestamp === "number" : true,
        ].every(value => value);
    }
    return false;
}

function readFromStorage<Value>(storage: Storage, key: string): Value | null {
    try {
        const data = storage.getItem(key);
        if (typeof data !== "string") return null;
        const parsed = JSON.parse(data);
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
            timestamp: Date.now(),
        };
        storage.setItem(key, JSON.stringify(item));
        return true;
    } catch {
        return false;
    }
}

type StorageListener<Value> = (value: Value | null) => void;

const STORAGE_SYNC_MANAGER = {
    listeners: new Map<string, Set<StorageListener<unknown>>>(),

    subscribe<Value>(
        storageType: "local" | "session",
        key: string,
        listener: StorageListener<Value>
    ) {
        const targetKey = `${storageType}:${key}`;
        const listeners =
            this.listeners.get(targetKey) ??
            new Set<StorageListener<unknown>>();
        listeners.add(listener as StorageListener<unknown>);
        this.listeners.set(targetKey, listeners);

        return () => {
            listeners.delete(listener as StorageListener<unknown>);
            if (listeners.size === 0) {
                this.listeners.delete(targetKey);
            }
        };
    },

    notify<Value>(
        storageType: "local" | "session",
        key: string,
        value: Value | null
    ) {
        const targetKey = `${storageType}:${key}`;
        const listeners = this.listeners.get(targetKey);
        listeners?.forEach(listener => listener(value));
    },
};

type ValueSetterParameter<Value> =
    | Value
    | null
    | ((previousValue: Value | null) => Value | null);

function useStorage<Value = string>(
    storageType: "local" | "session",
    key: string
): [Value | null, (value: ValueSetterParameter<Value>) => boolean] {
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

    const setValue = (value: ValueSetterParameter<Value>): boolean => {
        if (!storage) return false;

        const nextValue =
            typeof value === "function"
                ? (value as (previousValue: Value | null) => Value | null)(data)
                : value;

        const result = writeToStorage(storage, key, nextValue);
        if (!result) return false;
        setData(nextValue);
        STORAGE_SYNC_MANAGER.notify(storageType, key, nextValue);
        return true;
    };

    useEffect(() => {
        if (!storage) return;

        const unsubscribe = STORAGE_SYNC_MANAGER.subscribe(
            storageType,
            key,
            (nextValue: Value | null) => {
                setData(nextValue);
            }
        );

        return unsubscribe;
    }, [key, storage, storageType]);

    return [data, setValue];
}

export function useLocalStorage<Value = string>(key: string) {
    return useStorage<Value>("local", key);
}

export function useSessionStorage<Value = string>(key: string) {
    return useStorage<Value>("session", key);
}
