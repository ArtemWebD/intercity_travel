import { Flex, Text } from "@radix-ui/themes";
import { memo, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../../store";
import { Roles } from "../../../store/auth/types/IAuthStore";
import { routes } from "./nav";

const BaseNav = () => {
    const { authStore } = useContext(StoreContext);
    const location = useLocation();

    return (
        <Flex
            justify={"between"}
            align={"center"}
            className={`w-full min-h-[56px] bg-[var(--mauve-1)] mt-auto p-2 pl-5 pr-5 sticky bottom-0 left-0 z-1 shadow-[0_-2px_10px_0px_rgba(255,255,255,0.02)]`}
        >
            {authStore.getRole === Roles.USER &&
                routes.user.map((route) => (
                    <Link
                        key={route.path}
                        to={route.path}
                        className={`flex flex-col justify-center items-center ${location.pathname === route.path ? "text-[var(--accent-9)]" : ""}`}
                    >
                        <route.icon sx={{ fontSize: 20 }} />
                        <Text size={"1"} align={"center"}>
                            {route.name}
                        </Text>
                    </Link>
                ))}
            {authStore.getRole === Roles.DRIVER &&
                routes.driver.map((route) => (
                    <Link
                        key={route.path}
                        to={route.path}
                        className={`flex flex-col justify-center items-center ${location.pathname === route.path ? "text-[var(--accent-9)]" : ""}`}
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

export default memo(BaseNav);
