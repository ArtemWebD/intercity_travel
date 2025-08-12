import { memo, useEffect, useState, type FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { IBaseDatePickerProps } from "./types/IBaseDatePicker";

const BaseDatePicker: FC<IBaseDatePickerProps> = ({ onChange, isTime, value }) => {
    const [date, setDate] = useState<Date | null>(value ?? new Date());

    useEffect(() => {
        if (onChange) {
            onChange(date);
        }
    }, [date, onChange]);

    function changeHandler(date: Date | null): void {
        setDate(date);

        if (onChange && date) {
            onChange(date);
        }
    }

    return (
        <DatePicker
            selected={date}
            className="p-1 pl-2 pr-2 bg-gray-200 rounded-lg w-full text-sm !outline-none"
            dateFormat={!isTime ? "dd.MM.YYYY" : "HH:mm"}
            timeFormat="HH:mm"
            timeCaption="Время"
            onSelect={changeHandler}
            onChange={changeHandler}
            showTimeSelectOnly={isTime ?? undefined}
            showTimeSelect={isTime ?? undefined}
            timeIntervals={isTime ? 5 : undefined}
            disabledKeyboardNavigation={true}
            popperPlacement="bottom-start"
        />
    );
};

export default memo(BaseDatePicker);
