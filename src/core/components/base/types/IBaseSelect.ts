import type { JSX } from "react";

export interface IBaseSelectProps {
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children?: JSX.Element | JSX.Element[];
}
