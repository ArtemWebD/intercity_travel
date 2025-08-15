import { memo, useCallback, useMemo, useState } from "react";
import BaseSection from "../../../core/components/base/BaseSection";
import { Box, Flex, Text } from "@radix-ui/themes";
import BaseInputNumber from "../../../core/components/base/BaseInputNumber";
import BaseButton from "../../../core/components/base/BaseButton";

const AddBalance = () => {
    const [count, setCount] = useState(10);

    const isError = useMemo(() => count < 10 || count >= 100000, [count]);

    const changeCount = useCallback((value: number) => setCount(value), [setCount]);

    return (
        <>
            <BaseSection className="mt-4">
                <Text size={"4"}>Сумма пополнения</Text>
                <Box className="mt-3 mb-3">
                    <BaseInputNumber
                        value={count}
                        onNumberChange={changeCount}
                        measure="₽"
                        className="!text-[1.1rem]"
                    />
                    {isError && (
                        <Text size={"1"} color="red">
                            Сумма пополнения должна быть в диапазоне от 10 до 100000 рублей
                        </Text>
                    )}
                </Box>
            </BaseSection>
            <Flex justify={"end"} className="mt-4">
                <BaseButton text="Пополнить" size={"3"} />
            </Flex>
        </>
    );
};

export default memo(AddBalance);
