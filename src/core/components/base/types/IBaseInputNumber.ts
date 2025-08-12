import type { IBaseInputProps } from "./IBaseInput";

export interface IBaseInputNumberProps extends IBaseInputProps {
    onNumberChange?: (value: number) => void;
}
