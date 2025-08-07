import { Card, Flex, Text } from "@radix-ui/themes";
import { observer } from "mobx-react-lite";
import { memo, useContext } from "react";
import { StoreContext } from "../../../store";

const BaseErrorMessage = () => {
    const { errorStore } = useContext(StoreContext);

    return (
        <Flex
            direction={"column"}
            gap={"2"}
            width={"300px"}
            maxWidth={"100%"}
            className="fixed top-2 right-2 z-10"
        >
            {errorStore.getErrors.map((error, i) => (
                <Card key={i} className="w-full">
                    <Text as="div" size={"2"} color="ruby">
                        {error}
                    </Text>
                </Card>
            ))}
        </Flex>
    );
};

export default memo(observer(BaseErrorMessage));
