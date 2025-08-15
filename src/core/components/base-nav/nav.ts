import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

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
        {
            path: "/balance",
            icon: AccountBalanceWalletOutlinedIcon,
            name: "Кошелёк",
        },
        {
            path: "/trips",
            icon: DirectionsCarFilledOutlinedIcon,
            name: "Поездки",
        },
        {
            path: "/calendar",
            icon: CalendarTodayOutlinedIcon,
            name: "Календарь",
        },
    ],
    agent: [],
    all: [],
};
