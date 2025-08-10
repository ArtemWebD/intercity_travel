import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconProps, SvgIconTypeMap } from "@mui/material/SvgIcon";
import type { ComponentType } from "react";

export interface IBaseButtonProps {
    text: string;
    icon?: ComponentType<SvgIconProps>;
    className?: string;
}