import { lazy } from "react";
import type { IAppRoutes } from "./types/IRoute";

export const routes: IAppRoutes = {
    user: [
        {
            path: "/rights",
            component: lazy(() => import("../modules/rights/views/RightsView")),
        },
    ],
    driver: [
        {
            path: "/info/*",
            component: lazy(() => import("../modules/driver-info/views/DriverInfoView")),
            children: [
                {
                    path: "",
                    component: lazy(
                        () => import("../modules/driver-info/views/DriverInfoMainPage"),
                    ),
                },
            ],
        },
        {
            path: "/trips",
            component: lazy(() => import("../modules/driver-trips/views/DriverTripsPage")),
        },
        {
            path: "/balance",
            component: lazy(() => import("../modules/balance/views/BalancePage")),
        },
        {
            path: "/calendar",
            component: lazy(() => import("../modules/calendar/views/CalendarPage")),
        },
    ],
    agent: [],
    all: [],
};
