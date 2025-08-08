import { lazy } from "react";
import type { IAppRoutes } from "./types/IRoute";

export const routes: IAppRoutes = {
    user: [
        {
            path: "/rights",
            component: lazy(() => import("../modules/rights/views/RightsView")),
        },
    ],
    driver: [],
    agent: [],
};
