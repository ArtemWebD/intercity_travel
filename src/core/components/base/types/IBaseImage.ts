import type { HTMLAttributes } from "react";

export interface IBaseImageProps extends HTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
}