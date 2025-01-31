export enum AppEnvironment {
    production = "production",
    test = "test",
    local = "local",
}

const isAppEnvironment = (value: any): value is AppEnvironment => {
    if (typeof value === "string") {
        return Object.values(AppEnvironment)
            .map(el => el.toString())
            .includes(value);
    }
    return false;
};

export const CURRENT_ENVIRONMENT = (() => {
    const environmentValue = process.env.REACT_APP_ENVIRONMENT;
    const defaultValue = AppEnvironment.local;
    return isAppEnvironment(environmentValue) ? environmentValue : defaultValue;
})();
