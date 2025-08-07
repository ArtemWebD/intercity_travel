import { makeAutoObservable } from "mobx";

export default class LoaderStore {
    private isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    get getIsLoading(): boolean {
        return this.isLoading;
    }

    start(): void {
        this.isLoading = true;
    }

    end(): void {
        this.isLoading = false;
    }
}
