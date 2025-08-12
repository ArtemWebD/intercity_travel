import { memo, useCallback, useEffect, useState, type ChangeEvent, type FC } from "react";
import BaseInput from "./BaseInput";
import type { IBaseInputNumberProps } from "./types/IBaseInputNumber";

const BaseInputNumber: FC<IBaseInputNumberProps> = ({ value, onNumberChange, ...props }) => {
    const [number, setNumber] = useState<number>(value ? +value : 0);

    useEffect(() => {
        if (onNumberChange) {
            onNumberChange(number);
        }
    }, [number, onNumberChange]);

    const changeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setNumber(+event.target.value),
        [setNumber],
    );

    return (
        <BaseInput {...props} type="number" onChange={changeHandler} value={number?.toString()} />
    );
};

export default memo(BaseInputNumber);
