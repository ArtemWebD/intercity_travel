import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { StoreContext } from "./store";
import { Theme } from "@radix-ui/themes";
import AppRouter from "./router/AppRouter";
import BaseLoader from "./core/components/base-loader/BaseLoader";
import BaseErrorMessage from "./core/components/base-error-message/BaseErrorMessage";
import "@radix-ui/themes/styles.css";
import WebApp from "@twa-dev/sdk";

const App = () => {
    const { authStore } = useContext(StoreContext);

    useEffect(() => {
        WebApp.ready();
    }, []);

    return (
        <Theme appearance="dark" accentColor="indigo" grayColor="mauve" radius="medium">
            <AppRouter />
            <BaseLoader />
            <BaseErrorMessage />
        </Theme>
    );
};

export default observer(App);
