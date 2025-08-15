import { Box, Button, Flex } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { memo, type FC } from "react";
import type { IBaseFormProps } from "./types/IBaseForm";
import BaseButton from "./BaseButton";

const BaseForm: FC<IBaseFormProps> = ({
    onSubmit,
    children,
    buttonLabel,
    isCancel,
    onCancel,
    ...props
}) => {
    return (
        <Box {...props} className={`!w-full ${props.className ?? ""}`} p={"5"} pt={"0"}>
            <Form.Root className="w-full h-full flex flex-col" onSubmit={onSubmit}>
                {children}
                <Flex justify={"between"} className="!pb-4">
                    {isCancel && (
                        <BaseButton
                            text="Отмена"
                            className="!bg-transparent !border !border-gray-900 !text-gray-900"
                            type="button"
                            size={"3"}
                            onClick={onCancel}
                        />
                    )}
                    <Form.Submit asChild>
                        <BaseButton
                            type="submit"
                            text={buttonLabel ?? ""}
                            size={"3"}
                            className={`${isCancel ? "" : "!w-full"}`}
                        />
                    </Form.Submit>
                </Flex>
            </Form.Root>
        </Box>
    );
};

export default memo(BaseForm);
