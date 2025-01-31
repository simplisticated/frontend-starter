import { AppEnvironment, CURRENT_ENVIRONMENT } from "./environment";

export const getAppConfiguration = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    environment: AppEnvironment
) => ({
    app: {
        iFrameContainer: {
            isEnabled: false,
            placeholder: undefined,
        },
    },
    api: {
        baseUrl: "",
    },
    externalServices: {
        exampleService: {
            enabled: false,
            apiKey: "",
        },
    },
});

export const APP_CONFIGURATION = getAppConfiguration(CURRENT_ENVIRONMENT);
