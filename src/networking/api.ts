import axios, { AxiosInstance } from "axios";

export default class ExampleApi {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create();
    }

    async exampleRequest() {
        const result = await this.client.get("");
        return result.data;
    }
}
