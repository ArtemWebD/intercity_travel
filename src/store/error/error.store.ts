import { makeAutoObservable } from "mobx";

export default class ErrorStore {
    private errors: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get getErrors(): string[] {
        return this.errors;
    }

    addError(error: string): void {
        this.errors.push(error);
        setTimeout(() => this.removeError(error), 3000);
    }

    removeError(error: string): void {
        this.errors = this.errors.filter((value) => value !== error);
    }
}
