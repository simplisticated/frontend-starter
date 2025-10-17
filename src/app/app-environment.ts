export enum AppEnvironment {
    production = "production",
    test = "test",
    local = "local",
}

export const isAppEnvironment = (value: any): value is AppEnvironment => {
    if (typeof value === "string") {
        return Object.values(AppEnvironment)
            .map(el => el.toString())
            .includes(value);
    }
    return false;
};
