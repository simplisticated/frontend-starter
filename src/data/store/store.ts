import { computed, makeObservable, observable, runInAction } from "mobx";

class Store {
    @observable
    public _isPageHidden: boolean = false;

    @computed
    public get isPageHidden() {
        return this._isPageHidden;
    }

    public set isPageHidden(hidden: boolean) {
        runInAction(() => {
            this._isPageHidden = hidden;
        });
    }

    constructor() {
        makeObservable(this);
    }
}

const STORE = new Store();

export default STORE;
