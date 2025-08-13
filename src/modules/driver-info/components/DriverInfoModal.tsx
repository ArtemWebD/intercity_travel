import { memo, type FC } from "react";
import { Dialog, Flex } from "@radix-ui/themes";
import DriverInfoCarForm from "./DriverInfoCarForm";
import { AnimatePresence, motion } from "framer-motion";
import useSubmited from "../../../core/hooks/submited/useSubmited";
import BaseSuccessScreen from "../../../core/components/base/BaseSuccessScreen";
import type { IModalProps } from "../../../core/types/IModal";

const DriverInfoModal: FC<IModalProps> = ({ opened, onClose }) => {
    const { submited, changeSubmited } = useSubmited();

    function onOpenChange(open: boolean): void {
        if (!open && onClose) {
            onClose();
        }
    }

    return (
        <Dialog.Root open={opened} onOpenChange={onOpenChange}>
            <Dialog.Content className="min-h-[50vh]">
                <Dialog.Title>Новое авто</Dialog.Title>
                <AnimatePresence mode="wait">
                    {!submited ? (
                        <motion.div
                            key={"form"}
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full h-full"
                        >
                            <Flex className="w-full">
                                <DriverInfoCarForm onSubmit={changeSubmited} onCancel={onClose} />
                            </Flex>
                        </motion.div>
                    ) : (
                        <BaseSuccessScreen />
                    )}
                </AnimatePresence>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default memo(DriverInfoModal);
