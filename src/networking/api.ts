import axios from "axios";

export default class ExampleApi {
    // eslint-disable-next-line class-methods-use-this
    private getClient() {
        return axios.create();
    }

    async exampleRequest() {
        const result = await this.getClient().get("");
        return result.data;
    }
}
