import { makeAutoObservable } from "mobx";
import type { Roles } from "./types/IAuthStore";

export default class AuthStore {
    private isAuth = localStorage.getItem("isAuth") === "true";
    private role: Roles | null = (localStorage.getItem("role") as Roles) ?? null;

    constructor() {
        makeAutoObservable(this);
    }

    get getIsAuth(): boolean {
        return this.isAuth;
    }

    login(token: string, role: Roles): void {
        // localStorage.setItem("token", token);
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("role", role);
        this.isAuth = true;
        this.role = role;
    }

    logout(): void {
        localStorage.removeItem("isAuth");
        localStorage.removeItem("role");
        this.isAuth = false;
        this.role = null;
    }
}
