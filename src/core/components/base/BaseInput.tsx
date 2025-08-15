import { memo, type FC } from "react";
import type { IBaseInputProps } from "./types/IBaseInput";
import { TextField } from "@radix-ui/themes";

const BaseInput: FC<IBaseInputProps> = ({ fluid, ...props }) => {
    return (
        <TextField.Root
            {...props}
            size={"2"}
            className={`!text-sm !bg-gray-200 !outline-none ${fluid ? "w-full" : "" + (props.className ?? "")}`}
        />
    );
};

export default memo(BaseInput);
