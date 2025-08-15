import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles/tripsCalendar.css";
import BaseSection from "../../../core/components/base/BaseSection";
import { Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import DateHelper from "../../../core/libs/date-helper/dateHelper";
import BaseButton from "../../../core/components/base/BaseButton";
import AddIcon from "@mui/icons-material/Add";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { motion } from "framer-motion";
import useModal from "../../../core/hooks/modal/useModal";
import DriverTripsModal from "../../driver-trips/components/DriverTripsModal";

const TripsCalendar = () => {
    const [date, setDate] = useState(DateHelper.getToday());
    const { modal, openModal, closeModal } = useModal();

    return (
        <>
            <Calendar
                value={date}
                onChange={(value) => setDate(value as Date)}
                className={"trips-calendar rounded-lg !border-none shadow-xl"}
            />
            <BaseSection className="mt-5">
                <Flex justify={"between"} align={"center"}>
                    <Text size={"4"} weight={"medium"}>
                        <motion.div
                            key={date.toISOString()}
                            initial={{ rotateX: 90, opacity: 0 }}
                            animate={{ rotateX: 0, opacity: 1 }}
                            exit={{ rotateX: 90, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120 }}
                        >
                            {DateHelper.getDateString(date)}
                        </motion.div>
                    </Text>
                    <BaseButton text="Добавить" icon={AddIcon} onClick={openModal} />
                </Flex>
                <Flex
                    justify={"center"}
                    align={"center"}
                    direction={"column"}
                    className="mt-9 mb-9 text-gray-500 text-center text-sm"
                >
                    <PinDropOutlinedIcon sx={{ fontSize: 50 }} />
                    <Text weight={"medium"}>Нет поездок на этот день</Text>
                    <Text weight={"medium"}>Выберите другой или добавьте новую поездку</Text>
                </Flex>
            </BaseSection>
            <DriverTripsModal opened={modal} onClose={closeModal} />
        </>
    );
};

export default TripsCalendar;
