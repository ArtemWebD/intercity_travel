import type { ITrip } from "./ITrip";
import type { TripType } from "./TripType";

export interface IDriverTripCardProps {
    trip: ITrip;
    type: TripType;
    onInfo?: (trip: ITrip) => void;
    onDelete?: () => void;
}
