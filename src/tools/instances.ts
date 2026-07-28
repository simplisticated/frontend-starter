import { useEffect } from "react";
import { useState } from "./state";

const UNIQUE_IDENTIFIER = new Date().getTime().toString();
const CONFIRMATION_INTERVAL = 500;
const REMOVAL_INTERVAL = 2000;

function getStorageKey(componentId: string): string {
    return `component-${componentId}`;
}

interface Instance {
    id: string;
    confirmationTimestamp: number;
}

interface State {
    instances: Instance[];
}

interface Response {
    numberOfInstances: number;
}

export function useInstances(componentId: string): Response {
    const [state, setState] = useState<State>(
        { instances: [] },
        getStorageKey(componentId),
        "local"
    );
    const getInstanceById = (id: string): Instance | null => {
        return state.instances.find(instance => instance.id === id) ?? null;
    };
    const addInstance = (instance: Instance): void => {
        const existingInstance = getInstanceById(instance.id);
        if (!existingInstance) {
            setState(prevState => ({
                instances: [...prevState.instances, instance],
            }));
        }
    };
    const confirmInstanceById = (id: string): void => {
        const instance = getInstanceById(id);
        if (instance) {
            setState(prevState => ({
                instances: prevState.instances.map(instance =>
                    instance.id === id
                        ? { ...instance, confirmationTimestamp: Date.now() }
                        : instance
                ),
            }));
        }
    };
    const removeInstanceById = (id: string): void => {
        setState(prevState => ({
            instances: prevState.instances.filter(
                instance => instance.id !== id
            ),
        }));
    };
    useEffect(() => {
        const currentInstance = getInstanceById(UNIQUE_IDENTIFIER);
        if (!currentInstance) {
            addInstance({
                id: UNIQUE_IDENTIFIER,
                confirmationTimestamp: Date.now(),
            });
        }
        const confirmationTimerIdentifier = setInterval(() => {
            confirmInstanceById(UNIQUE_IDENTIFIER);
        }, CONFIRMATION_INTERVAL);
        const removalTimerIdentifier = setInterval(() => {
            const now = Date.now();
            const instancesToRemove = state.instances
                .filter(
                    instance =>
                        now - instance.confirmationTimestamp >= REMOVAL_INTERVAL
                )
                .map(instance => instance.id);
            console.log(`Instances to remove: ${instancesToRemove}`);
            console.log(`Unique identifier: ${UNIQUE_IDENTIFIER}`);
            if (instancesToRemove.length > 0) {
                setState(prevState => ({
                    instances: prevState.instances.filter(instance =>
                        instancesToRemove.includes(instance.id)
                    ),
                }));
            }
        }, REMOVAL_INTERVAL);
        return () => {
            clearInterval(confirmationTimerIdentifier);
            clearInterval(removalTimerIdentifier);
            removeInstanceById(UNIQUE_IDENTIFIER);
        };
    }, [componentId]);
    return {
        numberOfInstances: state.instances.length,
    };
}
