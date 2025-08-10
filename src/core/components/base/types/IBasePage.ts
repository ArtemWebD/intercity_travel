import type { ReactNode } from "react";

export interface IBasePageProps {
    children?: ReactNode | ReactNode[];
    title?: string;
    titleAlign?: "center" | "left" | "right";
}
