import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { observer } from "mobx-react-lite";
import BaseSuspense from "../core/components/base/BaseSuspense";
import { useContext, useMemo } from "react";
import { StoreContext } from "../store";
import { Roles } from "../store/auth/types/IAuthStore";

const AppRouter = () => {
    const { authStore } = useContext(StoreContext);
    const protectedRoutes = useMemo(() => {
        switch (authStore.getRole) {
            case Roles.USER:
                return routes.user;
            case Roles.DRIVER:
                return routes.driver;
            case Roles.AGENT:
                return routes.agent;
            default:
                return [];
        }
    }, [authStore.getRole]);

    return (
        <Routes>
            {[...routes.all, ...protectedRoutes].map((route, i) => (
                <Route
                    key={i}
                    path={route.path}
                    element={<BaseSuspense component={<route.component />} />}
                >
                    {route.children?.map((child, i) => (
                        <Route
                            key={i}
                            path={child.path}
                            element={<BaseSuspense component={<child.component />} />}
                        />
                    ))}
                </Route>
            ))}
            <Route
                path="*"
                element={<Navigate to={protectedRoutes[0]?.path ?? routes.all[0].path} replace />}
            />
        </Routes>
    );
};

export default observer(AppRouter);
