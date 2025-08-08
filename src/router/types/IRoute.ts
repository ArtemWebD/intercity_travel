import type { JSX, LazyExoticComponent } from "react";

export interface IRoute {
    path: string;
    component: LazyExoticComponent<() => JSX.Element>;
}

export interface IAppRoutes {
    driver: IRoute[];
    agent: IRoute[];
    user: IRoute[];
}
