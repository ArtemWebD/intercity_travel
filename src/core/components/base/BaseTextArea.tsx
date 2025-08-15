import { TextArea, type TextAreaProps } from "@radix-ui/themes";
import { memo, type FC } from "react";

const BaseTextArea: FC<TextAreaProps> = ({ className, ...props }) => {
    return (
        <TextArea
            {...props}
            className={`resize-none h-[8rem] !text-xs !bg-gray-200 ${className ? className : ""}`}
        />
    );
};

export default memo(BaseTextArea);
