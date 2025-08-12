import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ButtonProps } from "@radix-ui/themes";
import type { ComponentType } from "react";

export interface IBaseButtonProps extends ButtonProps {
    text: string;
    icon?: ComponentType<SvgIconProps>;
    className?: string;
}
