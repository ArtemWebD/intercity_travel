import { Flex, Spinner } from "@radix-ui/themes";
import { memo } from "react";

const BaseSpinner = () => {
    return (
        <Flex width={"100vw"} height={"100vh"} justify={"center"} align={"center"}>
            <Spinner size={"3"} />
        </Flex>
    );
};

export default memo(BaseSpinner);
