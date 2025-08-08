import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export const routes = {
    user: [
        {
            path: "/drive",
            icon: DirectionsCarIcon,
            name: "Поездки",
        },
        {
            path: "/rights",
            icon: AdminPanelSettingsIcon,
            name: "Расширение прав",
        },
    ],
};
