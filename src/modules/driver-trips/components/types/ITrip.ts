import type { CarTypes } from "../../../../store/driver/types/IDriverStore";

export interface ITrip {
    from: string;
    to: string;
    time: string;
    phone: string;
    carType: CarTypes;
}

export interface ITripData extends Omit<ITrip, "carType" | "time"> {
    time: Date;
    date: Date;
    passengers: number;
    price: number;
    info?: string;
}
