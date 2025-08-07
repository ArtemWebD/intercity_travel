import { observer } from "mobx-react-lite";
import { memo, useContext } from "react";
import { StoreContext } from "../../../store";
import { Flex, Spinner } from "@radix-ui/themes";

const BaseLoader = () => {
    const { loaderStore } = useContext(StoreContext);

    return (
        <>
            {loaderStore.getIsLoading && (
                <Flex
                    width={"100vw"}
                    height={"100vh"}
                    justify={"center"}
                    align={"center"}
                    className="fixed left-0 top-0 z-10 bg-[rgba(0,0,0,0.5)]"
                >
                    <Spinner size={"3"} className="!w-[40px] !h-[40px]" />
                </Flex>
            )}
        </>
    );
};

export default memo(observer(BaseLoader));
