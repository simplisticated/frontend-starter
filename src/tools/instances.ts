import { useEffect, useRef } from "react";
import { useState } from "./state";

const CURRENT_INSTANCE_IDENTIFIER = new Date().getTime().toString();
const CONFIRMATION_INTERVAL = 200;
const REMOVAL_INTERVAL = 1000;

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
    const [state, setState, updateFromStorage] = useState<State>(
        { instances: [] },
        getStorageKey(componentId),
        "local"
    );
    const stateRef = useRef(state);
    useEffect(() => {
        stateRef.current = state;
    }, [state]);
    const getInstanceById = (id: string): Instance | null => {
        updateFromStorage();
        return (
            stateRef.current.instances.find(instance => instance.id === id) ??
            null
        );
    };
    const addInstance = (instance: Instance): void => {
        updateFromStorage();
        const existingInstance = getInstanceById(instance.id);
        if (!existingInstance) {
            setState(prevState => ({
                instances: [...prevState.instances, instance],
            }));
        }
    };
    const confirmInstanceById = (id: string): void => {
        updateFromStorage();
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
    const removeInstancesById = (identifiers: string[]): void => {
        updateFromStorage();
        setState(prevState => ({
            instances: prevState.instances.filter(
                instance => !identifiers.includes(instance.id)
            ),
        }));
    };
    useEffect(() => {
        updateFromStorage();
        const currentInstance = getInstanceById(CURRENT_INSTANCE_IDENTIFIER);
        if (!currentInstance) {
            addInstance({
                id: CURRENT_INSTANCE_IDENTIFIER,
                confirmationTimestamp: Date.now(),
            });
        }
        const confirmationTimerIdentifier = setInterval(() => {
            confirmInstanceById(CURRENT_INSTANCE_IDENTIFIER);
        }, CONFIRMATION_INTERVAL);
        const removalTimerIdentifier = setInterval(() => {
            updateFromStorage();
            const now = Date.now();
            const instancesToRemove = stateRef.current.instances
                .filter(
                    instance =>
                        now - instance.confirmationTimestamp >= REMOVAL_INTERVAL
                )
                .map(instance => instance.id);
            if (instancesToRemove.length > 0) {
                console.log(`Instances to remove: ${instancesToRemove}`);
                console.log(
                    `Unique identifier: ${CURRENT_INSTANCE_IDENTIFIER}`
                );
                removeInstancesById(instancesToRemove);
            }
        }, REMOVAL_INTERVAL);
        return () => {
            clearInterval(confirmationTimerIdentifier);
            clearInterval(removalTimerIdentifier);
            removeInstancesById([CURRENT_INSTANCE_IDENTIFIER]);
        };
    }, [componentId]);
    return {
        numberOfInstances: state.instances.length,
    };
}
