import { makeObservable, observable } from "mobx";
import { ExampleModel } from "../models/example";

class Store {
    @observable
    public example?: ExampleModel;

    constructor() {
        makeObservable(this);
    }
}

const STORE = new Store();

export default STORE;
