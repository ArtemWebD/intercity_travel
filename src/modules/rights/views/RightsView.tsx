import { Flex, Text } from "@radix-ui/themes";
import RightsForm from "../components/RightsForm";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
        <Flex
            width={"100vw"}
            height={"100vh"}
            p={"2"}
            pt={"9"}
            justify={"center"}
            align={"center"}
            className="relative before:content-[''] before:w-screen before:h-screen before:fixed before:top-0 before:left-0 before:z-[-1] before:opacity-[0.075] before:bg-[url(/images/expand-rights/background.png)] before:bg-no-repeat before:bg-contain before:bg-center"
        >
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
        </Flex>
    );
};

export default RightsView;
