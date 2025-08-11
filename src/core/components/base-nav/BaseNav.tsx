import { Flex, Text } from "@radix-ui/themes";
import { memo, useContext, useMemo } from "react";
import { Link, matchPath, Route, useLocation } from "react-router-dom";
import { StoreContext } from "../../../store";
import { Roles } from "../../../store/auth/types/IAuthStore";
import { routes } from "./nav";
import { observer } from "mobx-react-lite";
import RouteHelper from "../../libs/route-helper/routeHelper";

const BaseNav = () => {
    const { authStore } = useContext(StoreContext);
    const location = useLocation();

    const protectedRoutes = useMemo(() => {
        switch (authStore.getRole) {
            case Roles.USER:
                return routes.user;
            case Roles.AGENT:
                return routes.agent;
            case Roles.DRIVER:
                return routes.driver;
            default:
                return [];
        }
    }, [authStore.getRole]);

    function isMatch(path: string): boolean {
        return matchPath(path, location.pathname) !== null;
    }

    return (
        <Flex
            justify={"between"}
            align={"center"}
            className={`w-full min-h-[56px] bg-[var(--mauve-1)] mt-auto p-2 pl-5 pr-5 sticky bottom-0 left-0 z-1 shadow-[0_-2px_10px_0px_rgba(255,255,255,0.02)]`}
        >
            {[...routes.all, ...protectedRoutes].map((route) => (
                <Link
                    key={route.path}
                    to={RouteHelper.clearPath(route.path)}
                    className={`flex flex-col justify-center items-center ${isMatch(route.path) ? "font-bold" : "text-gray-500 font-medium"}`}
                >
                    <route.icon sx={{ fontSize: 20 }} />
                    <Text size={"1"} align={"center"}>
                        {route.name}
                    </Text>
                </Link>
            ))}
        </Flex>
    );
};

export default memo(observer(BaseNav));
