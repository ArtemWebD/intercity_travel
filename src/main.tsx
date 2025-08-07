import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./App.tsx";
import { store, StoreContext } from "./store/index.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreContext.Provider value={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreContext.Provider>
    </StrictMode>,
);
