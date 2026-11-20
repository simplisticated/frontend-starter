import { AppEnvironment } from "./app-environment";
import { ENV } from "./env";

function getAppConfiguration(environment: AppEnvironment) {
    return {
        brand: {
            name: "Frontend Starter",
            url: "/",
        },
        app: {
            iFrameAllowed: false,
        },
        pages: {
            home: {
                navbarTitle: "Главная",
                url: "/",
            },
        },
    };
}

/**
 * Набор гибко изменяемых значений, которые, в отличие от переменных окружения,
 * действуют для всех сборок продукта.
 */
export const APP_CONFIGURATION = getAppConfiguration(ENV.CURRENT_ENVIRONMENT);
