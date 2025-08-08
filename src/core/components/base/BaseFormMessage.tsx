import { Form } from "radix-ui";
import { memo, type FC } from "react";
import type { IBaseFormMessageProps } from "./types/IBaseFormMessage";

const BaseFormMessage: FC<IBaseFormMessageProps> = ({ className, label }) => {
    return (
        <Form.Message className={`block text-xs text-red-400 ${className ?? ""}`}>
            {label}
        </Form.Message>
    );
};

export default memo(BaseFormMessage);
