import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

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
            icon: PersonOutlineOutlinedIcon,
            name: "Профиль",
        },
    ],
    agent: [],
    all: [],
};
