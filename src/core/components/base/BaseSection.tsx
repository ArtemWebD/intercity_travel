import { Box } from "@radix-ui/themes";
import { memo, type FC, type HTMLAttributes } from "react";

const BaseSection: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
    return (
        <Box
            {...props}
            width={"100%"}
            height={"100%"}
            p={"2"}
            pt={"3"}
            className={`border border-gray-500 rounded-lg ${className ? className : ""}`}
        >
            {children}
        </Box>
    );
};

export default memo(BaseSection);
