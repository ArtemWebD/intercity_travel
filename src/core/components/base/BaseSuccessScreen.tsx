import { Flex, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { memo, type FC } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import type { IBaseSuccessScreenProps } from "./types/IBaseSuccessScreen";

const BaseSuccessScreen: FC<IBaseSuccessScreenProps> = ({ text = "Данные успешно сохранены" }) => {
    return (
        <motion.div
            key={"success"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full h-[50vh]"
        >
            <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                gap={"1"}
                width={"100%"}
                height={"100%"}
                className="text-green-600"
            >
                <CheckCircleOutlineIcon sx={{ fontSize: 80 }} />
                <Text size={"8"} align={"center"}>
                    {text}
                </Text>
            </Flex>
        </motion.div>
    );
};

export default memo(BaseSuccessScreen);
