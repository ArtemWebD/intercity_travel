import { memo, type FC } from "react";
import type { IBaseInputProps } from "./types/IBaseInput";
import { TextField } from "@radix-ui/themes";

const BaseInput: FC<IBaseInputProps> = ({ fluid, ...props }) => {
    return (
        <TextField.Root
            {...props}
            size={"3"}
            className={fluid ? "w-full" : "" + (props.className ?? "")}
        />
    );
};

export default memo(BaseInput);
