import type { IModalProps } from "../../../../core/types/IModal";
import type { ITrip } from "./ITrip";

export interface IDriverTripsModalProps extends IModalProps {
    trip?: ITrip;
}
