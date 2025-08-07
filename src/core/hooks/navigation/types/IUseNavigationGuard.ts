interface IRoute {
    path: string;
    children?: Omit<IRoute, "children">[];
}

export interface IUseNavigationGuardProps {
    authRoute: string;
    driverRoutes: IRoute[];
    agentRoutes: IRoute[];
    userRoutes: IRoute[];
}
