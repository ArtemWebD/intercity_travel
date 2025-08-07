import { Box, Button, Flex } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { memo, type FC } from "react";
import type { IBaseFormProps } from "./types/IBaseForm";

const BaseForm: FC<IBaseFormProps> = ({
    onSubmit,
    children,
    buttonLabel,
    isCancel,
    onCancel,
    ...props
}) => {
    return (
        <Box
            {...props}
            className={`border border-gray-700 rounded-lg ${props.className ?? ""}`}
            p={"5"}
        >
            <Form.Root className="w-full" onSubmit={onSubmit}>
                {children}
                <Flex justify={"between"} mt={"5"}>
                    <Form.Submit asChild>
                        <Button type="submit" size={"3"} className="!cursor-pointer">
                            {buttonLabel}
                        </Button>
                    </Form.Submit>
                    {isCancel && (
                        <Button
                            type="button"
                            size={"3"}
                            color="gray"
                            className="!cursor-pointer"
                            onClick={onCancel}
                        >
                            Отмена
                        </Button>
                    )}
                </Flex>
            </Form.Root>
        </Box>
    );
};

export default memo(BaseForm);
