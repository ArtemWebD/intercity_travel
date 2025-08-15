export interface IBaseDatePickerProps {
    isTime?: boolean;
    value?: Date;
    onChange?: (date: Date | null) => void;
}
