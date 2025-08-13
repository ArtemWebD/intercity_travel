import { memo } from "react";
import BaseSection from "../../../core/components/base/BaseSection";
import { Flex, Text } from "@radix-ui/themes";
import AnimatedNumber from "../../../core/components/animated-number/AnimatedNumber";

const CurrentBalance = () => {
    return (
        <BaseSection>
            <Text size={"4"}>Текущий баланс</Text>
            <Flex justify={"end"} className="mt-5 pr-3">
                <Text>
                    <AnimatedNumber value={250} digits={0} duration={0.75} /> ₽
                </Text>
            </Flex>
        </BaseSection>
    );
};

export default memo(CurrentBalance);
