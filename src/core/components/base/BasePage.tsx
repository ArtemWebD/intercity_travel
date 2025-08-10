import type { FC } from "react";
import type { IBasePageProps } from "./types/IBasePage";
import { Box } from "@radix-ui/themes";
import { motion } from "framer-motion";

const BasePage: FC<IBasePageProps> = ({ children }) => {
    return (
        <motion.div
            className="w-full h-full pl-5 pr-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <Box width={"100%"}>{children}</Box>
        </motion.div>
    );
};

export default BasePage;
