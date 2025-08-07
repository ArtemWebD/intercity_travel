import type { FC } from "react";
import type { IBasePageProps } from "./types/IBasePage";
import { Box, Heading } from "@radix-ui/themes";

const BasePage: FC<IBasePageProps> = ({ children, title }) => {
    return (
        <Box width={"100%"}>
            {title && (
                <Heading as="h1" size={"6"} className="p-4 !mb-9 border border-gray-800 rounded-lg">
                    {title}
                </Heading>
            )}
            <Box width={"100%"} p={"7"} className="border border-gray-800 rounded-lg">
                {children}
            </Box>
        </Box>
    );
};

export default BasePage;
