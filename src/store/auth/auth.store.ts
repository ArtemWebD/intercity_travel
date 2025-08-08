import { makeAutoObservable } from "mobx";
import { Roles } from "./types/IAuthStore";

export default class AuthStore {
    private role: Roles | null = (localStorage.getItem("role") as Roles) ?? Roles.USER;

    constructor() {
        makeAutoObservable(this);
    }

    get getRole(): Roles | null {
        return this.role;
    }

    login(token: string, role: Roles): void {
        // localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        this.role = role;
    }

    logout(): void {
        localStorage.removeItem("role");
        this.role = null;
    }
}
