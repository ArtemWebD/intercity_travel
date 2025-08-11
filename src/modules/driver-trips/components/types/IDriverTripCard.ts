import type { CarTypes } from "../../../../store/driver/types/IDriverStore";
import type { TripType } from "./TripType";

export interface IDriverTripCardProps {
    carType: CarTypes;
    type: TripType;
    from: string;
    to: string;
    time: string;
    phone: string;
}
