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

class StorageSyncRegistry {
    private static instance: StorageSyncRegistry | null = null;
    private listeners = new Map<string, Set<StorageListener<unknown>>>();

    private constructor() {}

    static getInstance(): StorageSyncRegistry {
        if (!StorageSyncRegistry.instance) {
            StorageSyncRegistry.instance = new StorageSyncRegistry();
        }
        return StorageSyncRegistry.instance;
    }

    subscribe<Value>(
        storageType: "local" | "session",
        key: string,
        listener: StorageListener<Value>
    ): () => void {
        const targetKey = this.getTargetKey(storageType, key);
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
    }

    notify<Value>(
        storageType: "local" | "session",
        key: string,
        value: Value | null
    ): void {
        const targetKey = this.getTargetKey(storageType, key);
        const listeners = this.listeners.get(targetKey);
        listeners?.forEach(listener => listener(value));
    }

    private getTargetKey(
        storageType: "local" | "session",
        key: string
    ): string {
        return `${storageType}:${key}`;
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
        StorageSyncRegistry.getInstance().notify(storageType, key, value);
        return true;
    };

    useEffect(() => {
        if (!storage) return;

        const unsubscribe = StorageSyncRegistry.getInstance().subscribe(
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
