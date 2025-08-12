import type { ITrip } from "./ITrip";

export interface IDriverTripsModalProps {
    opened: boolean;
    onClose: () => void;
    trip?: ITrip;
}
