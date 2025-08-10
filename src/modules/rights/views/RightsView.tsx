import { Flex, Text } from "@radix-ui/themes";
import RightsForm from "../components/RightsForm";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BasePage from "../../../core/components/base/BasePage";

const RightsView = () => {
    const [isSubmited, setIsSubmited] = useState(false);

    const changeIsSubmited = useCallback((value = true) => setIsSubmited(value), [setIsSubmited]);

    useEffect(() => {
        if (isSubmited) {
            const timer = setTimeout(() => changeIsSubmited(false), 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isSubmited, changeIsSubmited]);

    return (
        <BasePage>
            <AnimatePresence mode="wait">
                {!isSubmited ? (
                    <motion.div
                        key={"form"}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full h-full"
                    >
                        <RightsForm onSubmited={changeIsSubmited} />
                    </motion.div>
                ) : (
                    <motion.div
                        key={"success"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="w-full h-full"
                    >
                        <Flex
                            justify={"center"}
                            align={"center"}
                            direction={"column"}
                            gap={"1"}
                            width={"100%"}
                            height={"100%"}
                            p={"5"}
                            className="text-green-600"
                        >
                            <CheckCircleOutlineIcon sx={{ fontSize: 80 }} />
                            <Text size={"8"} align={"center"}>
                                Данные успешно отправлены
                            </Text>
                        </Flex>
                    </motion.div>
                )}
            </AnimatePresence>
        </BasePage>
    );
};

export default RightsView;
