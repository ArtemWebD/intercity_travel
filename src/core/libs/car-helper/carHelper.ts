import { CarTypes } from "../../../store/driver/types/IDriverStore";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";

export default class CarHelper {
    private static carNames = {
        [CarTypes.PASSENGER]: "Легковой автомобиль (до 4 человек)",
        [CarTypes.PASSENGER_COMFORT]: "Легковой автомобиль - комфорт (до 5 человек)",
        [CarTypes.MINIVAN]: "Минивэн (до 7 человек)",
        [CarTypes.MINIVAN_COMFORT]: "Минивэн - комфорт (до 8 человек)",
        [CarTypes.BUS]: "Средний автобус (до 20 человек)",
        [CarTypes.BIG_BUS]: "Большой автобус (до 55 человек)",
    };

    private static carIcons = {
        [CarTypes.PASSENGER]: DirectionsCarIcon,
        [CarTypes.PASSENGER_COMFORT]: DirectionsCarFilledIcon,
        [CarTypes.MINIVAN]: AirportShuttleIcon,
        [CarTypes.MINIVAN_COMFORT]: FamilyRestroomIcon,
        [CarTypes.BUS]: DirectionsBusIcon,
        [CarTypes.BIG_BUS]: DirectionsBusFilledIcon,
    };

    static getName(type: CarTypes): string {
        return CarHelper.carNames[type];
    }

    static getIcon(type: CarTypes): OverridableComponent<SvgIconTypeMap> {
        return CarHelper.carIcons[type];
    }
}
