import type { FormLabelProps } from "@radix-ui/react-form";
import { Form } from "radix-ui";
import { memo, type FC } from "react";

const BaseLabel: FC<FormLabelProps> = ({ children, className, ...props }) => {
    return (
        <Form.Label
            {...props}
            className={`!text-sm !text-gray-400 pl-1 ${className ? className : ""}`}
        >
            {children}
        </Form.Label>
    );
};

export default memo(BaseLabel);
