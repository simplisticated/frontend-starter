import axios, { AxiosInstance } from "axios";

export default class ExampleApi {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: "",
        });
    }

    async exampleRequest() {
        const result = await this.client.get("");
        return result.data;
    }
}
