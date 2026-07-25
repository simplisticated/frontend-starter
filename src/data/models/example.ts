export interface ExampleModel {
    id: string;
    exampleValue: string;
}

export const isExampleModel = (obj: any): obj is ExampleModel => {
    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
        const requirements = [
            "id" in obj && typeof obj.id === "string",
            "exampleValue" in obj && typeof obj.exampleValue === "string",
        ];
        return !requirements.includes(false);
    }
    return false;
};
