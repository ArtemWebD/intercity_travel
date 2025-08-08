import { Navigate, Route, Routes } from "react-router-dom";
import { useNavigationGuard } from "../core/hooks/navigation/useNavigationGuard";
import { routes } from "./routes";
import { observer } from "mobx-react-lite";
import BaseSuspense from "../core/components/base/BaseSuspense";

const AppRouter = () => {
    useNavigationGuard({
        driverRoutes: routes.driver.map((route) => route.path),
        agentRoutes: routes.agent.map((route) => route.path),
        userRoutes: routes.user.map((route) => route.path),
    });

    return (
        <Routes>
            {[...routes.user, ...routes.driver, ...routes.agent].map((route, i) => (
                <Route
                    key={i}
                    path={route.path}
                    element={<BaseSuspense component={<route.component />} />}
                />
            ))}
            <Route path="*" element={<Navigate to={routes.user[0].path} replace />} />
        </Routes>
    );
};

export default observer(AppRouter);
