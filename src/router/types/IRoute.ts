import type { JSX, LazyExoticComponent } from "react";

export interface IRoute {
    path: string;
    component: LazyExoticComponent<() => JSX.Element>;
    children?: Omit<IRoute, "children">[];
}

export interface IAppRoutes {
    auth: IRoute;
    driver: IRoute[];
    agent: IRoute[];
    user: IRoute[];
}
