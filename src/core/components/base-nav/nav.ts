import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

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
    driver: [
        {
            path: "/info",
            icon: PermContactCalendarIcon,
            name: "Кабинет",
        },
    ],
    agent: [],
    all: [],
};
