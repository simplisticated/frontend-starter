import { useEffect } from "react";
import { useState } from "./state";

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
    const uniqueIdentifier = useState<string>(() =>
        new Date().getTime().toString()
    )[0];
    const [state, setState] = useState<State>(
        { instances: [] },
        getStorageKey(componentId),
        "local"
    );
    const addInstance = (instance: Instance): void => {
        setState(prevState => {
            if (prevState.instances.some(item => item.id === instance.id)) {
                return prevState;
            }
            return {
                instances: [...prevState.instances, instance],
            };
        });
    };
    const confirmInstanceById = (id: string): void => {
        setState(prevState => {
            if (!prevState.instances.some(item => item.id === id)) {
                return prevState;
            }
            return {
                instances: prevState.instances.map(instance =>
                    instance.id === id
                        ? { ...instance, confirmationTimestamp: Date.now() }
                        : instance
                ),
            };
        });
    };
    const removeInstanceById = (id: string): void => {
        setState(prevState => ({
            instances: prevState.instances.filter(
                instance => instance.id !== id
            ),
        }));
    };
    useEffect(() => {
        setState(prevState => {
            if (prevState.instances.some(item => item.id === uniqueIdentifier)) {
                return prevState;
            }
            return {
                instances: [
                    ...prevState.instances,
                    { id: uniqueIdentifier, confirmationTimestamp: Date.now() },
                ],
            };
        });

        const confirmationTimerIdentifier = setInterval(() => {
            confirmInstanceById(uniqueIdentifier);
        }, CONFIRMATION_INTERVAL);

        const removalTimerIdentifier = setInterval(() => {
            setState(prevState => {
                const now = Date.now();
                const instancesToRemove = prevState.instances
                    .filter(
                        instance =>
                            now - instance.confirmationTimestamp >=
                            REMOVAL_INTERVAL
                    )
                    .map(instance => instance.id);
                if (instancesToRemove.length === 0) {
                    return prevState;
                }
                console.log(`Instances to remove: ${instancesToRemove}`);
                console.log(`Unique identifier: ${uniqueIdentifier}`);
                return {
                    instances: prevState.instances.filter(
                        instance => !instancesToRemove.includes(instance.id)
                    ),
                };
            });
        }, REMOVAL_INTERVAL);

        return () => {
            clearInterval(confirmationTimerIdentifier);
            clearInterval(removalTimerIdentifier);
            removeInstanceById(uniqueIdentifier);
        };
    }, [componentId, confirmInstanceById, removeInstanceById, uniqueIdentifier]);
    return {
        numberOfInstances: state.instances.length,
    };
}
