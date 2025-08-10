import type { FC } from "react";
import type { IBasePageProps } from "./types/IBasePage";
import { Box, Heading } from "@radix-ui/themes";
import { motion } from "framer-motion";

const BasePage: FC<IBasePageProps> = ({ children, title, titleAlign }) => {
    return (
        <motion.div
            className="w-full h-full pl-5 pr-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {title && (
                <Heading as="h1" size={"7"} className="!mb-9" align={titleAlign}>
                    {title}
                </Heading>
            )}
            <Box width={"100%"}>{children}</Box>
        </motion.div>
    );
};

export default BasePage;
