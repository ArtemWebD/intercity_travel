import { Dialog, Flex } from "@radix-ui/themes";
import { memo, useMemo, type FC } from "react";
import type { IDriverTripsModalProps } from "./types/IDriverTripsModal";
import DriverTripForm from "./DriverTripForm";
import DateHelper from "../../../core/libs/date-helper/dateHelper";
import useSubmited from "../../../core/hooks/submited/useSubmited";
import { AnimatePresence, motion } from "framer-motion";
import BaseSuccessScreen from "../../../core/components/base/BaseSuccessScreen";

const DriverTripsModal: FC<IDriverTripsModalProps> = ({ opened, onClose, trip }) => {
    const { submited, changeSubmited } = useSubmited();

    const initialValue = useMemo(() => {
        if (!trip) {
            return;
        }

        const { carType, time, ...data } = trip;

        return {
            ...data,
            date: DateHelper.getDateFromString(time),
            time: DateHelper.getDateFromString(time),
            passengers: 3,
            price: 5000,
            info: "Нужно детское кресло, с собой 3 комплекта горных лыж.",
        };
    }, [trip]);

    function closeHandler(open: boolean): void {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog.Root open={opened} onOpenChange={closeHandler}>
            <Dialog.Content>
                <Dialog.Title>Информация</Dialog.Title>
                <Flex width={"100%"} className="!h-[70vh]">
                    <AnimatePresence mode="wait">
                        {!submited ? (
                            <motion.div
                                key={"form"}
                                initial={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full h-full"
                            >
                                <DriverTripForm
                                    initialValue={initialValue}
                                    onCancel={onClose}
                                    onSubmit={changeSubmited}
                                />
                            </motion.div>
                        ) : (
                            <BaseSuccessScreen />
                        )}
                    </AnimatePresence>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default memo(DriverTripsModal);
