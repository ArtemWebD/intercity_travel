import { useLocation, useNavigate } from "react-router-dom";
import type { IUseNavigationGuardProps } from "./types/IUseNavigationGuard";
import { useContext, useLayoutEffect, useMemo } from "react";
import { StoreContext } from "../../../store";
// import AuthService from "../../../modules/auth/services/auth.service";

/**
 * Хук, управляющий доступом в зависимости от состояния авторизации.
 * Внимание: родитель должен быть обернут в observer()
 * @param param0 Роуты приложения
 */
export const useNavigationGuard = ({
    authRoute,
    agentRoutes,
    driverRoutes,
    userRoutes,
}: IUseNavigationGuardProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { authStore, loaderStore } = useContext(StoreContext);

    const protectedRoutes = useMemo(
        () => [...agentRoutes, ...driverRoutes, ...userRoutes].map((route) => route.path),
        [agentRoutes, driverRoutes, userRoutes],
    );

    useLayoutEffect(() => {
        checkIsAuth();
    }, []);

    useLayoutEffect(() => {
        if (!authStore.getIsAuth && protectedRoutes.includes(location.pathname)) {
            navigate(authRoute);
        }

        if (authStore.getIsAuth && location.pathname === authRoute) {
            navigate(getFirstRoute());
        }
    }, [
        authStore.getIsAuth,
        protectedRoutes,
        location.pathname,
        getFirstRoute,
    ]);

    async function checkIsAuth(): Promise<void> {
        try {
            loaderStore.start();

            // const token = await AuthService.refresh();

            // authStore.login(token);
        } catch (error) {
        } finally {
            loaderStore.end();
        }
    }

    function getFirstRoute(): string {
        return "/";
    }
};
