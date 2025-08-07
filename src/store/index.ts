import { createContext } from "react";
import AuthStore from "./auth/auth.store";
import ErrorStore from "./error/error.store";
import LoaderStore from "./loader/loader.store";

interface IStore {
    authStore: AuthStore;
    errorStore: ErrorStore;
    loaderStore: LoaderStore;
}

export const store: IStore = {
    authStore: new AuthStore(),
    errorStore: new ErrorStore(),
    loaderStore: new LoaderStore(),
};

export const StoreContext = createContext<IStore>(store);
