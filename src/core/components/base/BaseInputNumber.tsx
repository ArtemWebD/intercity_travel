import { memo, useCallback, useEffect, useState, type ChangeEvent, type FC } from "react";
import BaseInput from "./BaseInput";
import type { IBaseInputNumberProps } from "./types/IBaseInputNumber";

const BaseInputNumber: FC<IBaseInputNumberProps> = ({
    value,
    measure,
    onNumberChange,
    ...props
}) => {
    const [number, setNumber] = useState<number>(value ? +value : 0);

    useEffect(() => {
        if (onNumberChange) {
            onNumberChange(number);
        }
    }, [number, onNumberChange]);

    const changeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = +event.target.value.replace(measure ?? "", "").trim();

            if (isNaN(value)) {
                return;
            }

            setNumber(value);
        },
        [setNumber],
    );

    return (
        <BaseInput
            {...props}
            type={!!measure ? "text" : "number"}
            onChange={changeHandler}
            value={number?.toString() + `${measure ? " " + measure : ""}`}
        />
    );
};

export default memo(BaseInputNumber);
