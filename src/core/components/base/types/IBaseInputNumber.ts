import type { IBaseInputProps } from "./IBaseInput";

export interface IBaseInputNumberProps extends IBaseInputProps {
    measure?: string;
    onNumberChange?: (value: number) => void;
}
