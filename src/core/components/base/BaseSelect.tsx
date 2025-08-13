import { Select } from "@radix-ui/themes";
import { memo, type FC } from "react";
import type { IBaseSelectProps } from "./types/IBaseSelect";
import "./styles/baseSelect.css";

const BaseSelect: FC<IBaseSelectProps> = ({ defaultValue, onValueChange, children }) => {
    return (
        <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
            <Select.Trigger />
            <Select.Content>{children}</Select.Content>
        </Select.Root>
    );
};

export default memo(BaseSelect);
