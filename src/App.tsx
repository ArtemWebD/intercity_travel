import { observer } from "mobx-react-lite";
import { useEffect } from "react";
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
            appearance="dark"
            accentColor="indigo"
            grayColor="mauve"
            radius="medium"
            className={`pt-[5rem] pb-[40px] min-h-screen flex flex-col before:content-[''] before:w-screen before:h-screen before:fixed before:top-0 before:left-0 before:z-[-1] before:opacity-[0.075] before:bg-[url(/images/expand-rights/background.png)] before:bg-no-repeat before:bg-contain before:bg-center`}
        >
            <AppRouter />
            <BaseNav />
            <BaseLoader />
            <BaseErrorMessage />
        </Theme>
    );
};

export default observer(App);
