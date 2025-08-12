import { Flex, Spinner } from "@radix-ui/themes";
import { memo } from "react";

const BaseSpinner = () => {
    return (
        <Flex
            width={"100vw"}
            height={"100vh"}
            justify={"center"}
            align={"center"}
            className="!fixed !left-0 !top-0 !z-[999]"
        >
            <Spinner size={"3"} className="!w-[2rem] !h-[2rem]" />
        </Flex>
    );
};

export default memo(BaseSpinner);
