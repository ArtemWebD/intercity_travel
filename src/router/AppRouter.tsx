import { Navigate, Route, Routes } from "react-router-dom";
import { useNavigationGuard } from "../core/hooks/navigation/useNavigationGuard";
import { routes } from "./routes";
import { observer } from "mobx-react-lite";
import BaseSuspense from "../core/components/base/BaseSuspense";

const AppRouter = () => {
    useNavigationGuard({
        authRoute: routes.auth.path,
        driverRoutes: routes.driver.map((route) => ({
            path: route.path,
            children: route.children?.map((route) => ({ path: route.path })),
        })),
        agentRoutes: routes.agent.map((route) => ({
            path: route.path,
            children: route.children?.map((route) => ({ path: route.path })),
        })),
        userRoutes: routes.user.map((route) => ({
            path: route.path,
            children: route.children?.map((route) => ({ path: route.path })),
        })),
    });

    return (
        <Routes>
            <Route
                path={routes.auth.path}
                element={<BaseSuspense component={<routes.auth.component />} />}
            />
            {[...routes.user, ...routes.driver, ...routes.agent].map((route, i) => (
                <Route
                    key={i}
                    path={route.path}
                    element={<BaseSuspense component={<route.component />} />}
                >
                    {route.children?.map((child, i) => (
                        <Route
                            key={i * 2}
                            path={child.path}
                            element={<BaseSuspense component={<child.component />} />}
                        />
                    ))}
                </Route>
            ))}
            <Route path="*" element={<Navigate to={routes.auth.path} replace />} />
        </Routes>
    );
};

export default observer(AppRouter);
