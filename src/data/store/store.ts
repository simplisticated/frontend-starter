import { computed, makeObservable, observable, runInAction } from "mobx";

class Store {
    @observable
    public _example: string = "example";

    @computed
    public get example() {
        return this._example;
    }

    public set example(value: string) {
        runInAction(() => {
            this._example = value;
        });
    }

    constructor() {
        makeObservable(this);
    }
}

const STORE = new Store();

export default STORE;
