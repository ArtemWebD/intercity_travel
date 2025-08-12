import type { ITripData } from "./ITrip";

export interface IDriverTripFormProps {
    initialValue?: ITripData;
    onSubmit?: () => void;
    onCancel?: () => void;
}
