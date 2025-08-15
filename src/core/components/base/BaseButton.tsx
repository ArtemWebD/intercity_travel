import { Button, Text } from "@radix-ui/themes";
import { memo, type FC } from "react";
import type { IBaseButtonProps } from "./types/IBaseButton";

const BaseButton: FC<IBaseButtonProps> = ({ text, className, icon: Icon, ...props }) => {
    return (
        <Button {...props} className={`!cursor-pointer ${className ? className : ""}`} highContrast>
            {Icon && <Icon sx={{ fontSize: 20 }} />}
            <Text>{text}</Text>
        </Button>
    );
};

export default memo(BaseButton);
