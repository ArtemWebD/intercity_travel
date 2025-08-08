import { lazy } from "react";
import type { IAppRoutes } from "./types/IRoute";

export const routes: IAppRoutes = {
    auth: {
        path: "/auth",
        component: lazy(() => import("../modules/rights/views/RightsView")),
    },
    user: [],
    driver: [],
    agent: [],
};
