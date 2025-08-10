import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";
import { Theme } from "@radix-ui/themes";
import AppRouter from "./router/AppRouter";
import BaseLoader from "./core/components/base-loader/BaseLoader";
import BaseErrorMessage from "./core/components/base-error-message/BaseErrorMessage";
import "@radix-ui/themes/styles.css";
import WebApp from "@twa-dev/sdk";
import BaseNav from "./core/components/base-nav/BaseNav";

const App = () => {
    useEffect(() => {
        WebApp.ready();
    }, []);

    return (
        <Theme
            appearance="light"
            accentColor="gray"
            grayColor="mauve"
            radius="medium"
            className={`pt-[5rem] pb-[35px] min-h-screen flex flex-col`}
        >
            <AppRouter />
            <BaseNav />
            <BaseLoader />
            <BaseErrorMessage />
        </Theme>
    );
};

export default observer(App);
