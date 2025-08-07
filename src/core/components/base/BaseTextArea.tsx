import { TextArea, type TextAreaProps } from "@radix-ui/themes";
import { memo, type FC } from "react";

const BaseTextArea: FC<TextAreaProps> = ({ className, ...props }) => {
    return <TextArea {...props} className={`resize-none ${className ? className : ""}`} />;
};

export default memo(BaseTextArea);
