import { Children, type FC } from "react";
import type { IBasePageProps } from "./types/IBasePage";
import { Box, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";

const BasePage: FC<IBasePageProps> = ({ title, children }) => {
    return (
        <motion.div
            className="w-full h-full pl-5 pr-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Box width={"100%"}>
                {title && (
                    <Text size={"4"} className="!block !mb-9">
                        {title}
                    </Text>
                )}
                {Children.toArray(children).map((child, i) => (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + i / 10 }}
                        key={"pageChild" + i}
                    >
                        {child}
                    </motion.div>
                ))}
            </Box>
        </motion.div>
    );
};

export default BasePage;
