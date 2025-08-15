import type { IFormProps } from "../../../../core/types/IForm";
import type { ITripData } from "./ITrip";

export interface IDriverTripFormProps extends IFormProps {
    initialValue?: ITripData;
}
