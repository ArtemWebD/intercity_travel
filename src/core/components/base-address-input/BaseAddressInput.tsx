import { Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { memo, useCallback, useEffect, useState, type ChangeEvent, type FC } from "react";
import BaseInput from "../base/BaseInput";
import type { IBaseAddressInputProps } from "./types/IBaseAddressInputProps";
import AddressSuggestions from "../../libs/address-suggestions/addressSuggestions";
import { useCombobox } from "downshift";

const BaseAddressInput: FC<IBaseAddressInputProps> = ({ onChange, value }) => {
    const [input, setInput] = useState(value ?? "");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const { isOpen, getInputProps, getMenuProps, getItemProps, closeMenu } = useCombobox({
        items: suggestions,
    });

    useEffect(() => {
        if (onChange) {
            onChange(input);
        }

        if (input.trim().length < 3 || !isOpen) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(async () => {
            const result = await AddressSuggestions.getSuggestions(input);

            setSuggestions(result ?? []);
        }, 500);

        return () => clearTimeout(timeout);
    }, [input]);

    const onSetInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setInput(() => event.target.value);
        },
        [setInput],
    );

    const onSelect = (suggestion: string): void => {
        setInput(suggestion);
        closeMenu();
    };

    return (
        <Flex direction={"column"} position={"relative"} width={"100%"}>
            <BaseInput
                {...getInputProps()}
                value={input}
                onChange={onSetInput}
                placeholder="Введите адрес"
            />
            <Flex
                {...getMenuProps()}
                direction={"column"}
                gap={"2"}
                className={`${!isOpen && !!!suggestions.length ? "!hidden" : ""} p-1 bg-gray-50 rounded-lg w-full absolute bottom-0 left-0 z-1 translate-y-[100%] max-h-[150px] overflow-y-auto`}
            >
                {isOpen &&
                    suggestions.map((suggestion, i) => (
                        <Box
                            className="p-2 w-full"
                            key={i}
                            {...getItemProps({ item: suggestion, index: i })}
                            onClick={() => onSelect(suggestion)}
                        >
                            <Text size={"1"}>{suggestion}</Text>
                        </Box>
                    ))}
            </Flex>
        </Flex>
    );
};

export default memo(BaseAddressInput);
