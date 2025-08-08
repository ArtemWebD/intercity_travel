import { useLocation, useNavigate } from "react-router-dom";
import type { IUseNavigationGuardProps } from "./types/IUseNavigationGuard";
import { useContext, useLayoutEffect } from "react";
import { StoreContext } from "../../../store";
import { Roles } from "../../../store/auth/types/IAuthStore";

/**
 * Хук, управляющий доступом в зависимости от состояния авторизации.
 * Внимание: родитель должен быть обернут в observer()
 * @param param0 Роуты приложения
 */
export const useNavigationGuard = ({
    agentRoutes,
    driverRoutes,
    userRoutes,
}: IUseNavigationGuardProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { authStore } = useContext(StoreContext);

    useLayoutEffect(() => {
        if (authStore.getRole !== Roles.AGENT && agentRoutes.includes(location.pathname)) {
            navigate(userRoutes[0]);
        }

        if (authStore.getRole !== Roles.DRIVER && driverRoutes.includes(location.pathname)) {
            navigate(userRoutes[0]);
        }

        if (authStore.getRole !== Roles.USER && userRoutes.includes(location.pathname)) {
            navigate(driverRoutes[0]);
        }
    }, [authStore.getRole, agentRoutes, driverRoutes, userRoutes, location.pathname]);
};
