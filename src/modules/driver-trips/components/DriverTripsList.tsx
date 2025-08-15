import { useCallback, useState } from "react";
import DriverTripsTypeBar from "./DriverTripsTypeBar";
import { TripType } from "./types/TripType";
import { Flex } from "@radix-ui/themes";
import { CarTypes } from "../../../store/driver/types/IDriverStore";
import DriverTripCard from "./DriverTripCard";
import { motion } from "framer-motion";
import DateHelper from "../../../core/libs/date-helper/dateHelper";
import type { ITrip } from "./types/ITrip";
import DriverTripsModal from "./DriverTripsModal";

const trips = {
    [TripType.ACTIVE]: [
        {
            from: "Новокузнецк, Аэропорт",
            to: "Шерегеш, Весенняя 72",
            time: DateHelper.createDateWithTime({
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
                hours: 12,
            }).toISOString(),
            phone: "+7(923)777-23-32",
            carType: CarTypes.PASSENGER,
        },
    ],
    [TripType.UPCOMING]: [
        {
            from: "Новокузнецк, Вокзал",
            to: "Горноалтайск, отель Катунь",
            time: DateHelper.createDateWithTime({
                day: new Date().getDate() + 1,
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
                hours: 16,
                minutes: 30,
            }).toISOString(),
            phone: "+7(951)221-31-21",
            carType: CarTypes.MINIVAN,
        },
        {
            from: "Горноалтайск, отель Катунь",
            to: "Новокузнецк, Аэропорт",
            time: DateHelper.createDateWithTime({
                day: 15,
                month: 8,
                year: new Date().getFullYear(),
                hours: 5,
            }).toISOString(),
            phone: "+7(951)221-31-21",
            carType: CarTypes.PASSENGER_COMFORT,
        },
        {
            from: "Томск, 10 корпус ТПУ",
            to: "Красноярск, Строителей 4",
            time: DateHelper.createDateWithTime({
                day: 16,
                month: 8,
                year: new Date().getFullYear(),
                hours: 17,
            }).toISOString(),
            phone: "+7(112)775-55-15",
            carType: CarTypes.MINIVAN_COMFORT,
        },
    ],
    [TripType.COMPLETED]: [
        {
            from: "Мыски, Славы 43",
            to: "Таштагол, отель Горы",
            time: DateHelper.createDateWithTime({
                day: 10,
                month: 8,
                year: new Date().getFullYear(),
                hours: 18,
            }).toISOString(),
            phone: "+7(990)261-43-77",
            carType: CarTypes.BIG_BUS,
        },
        {
            from: "Кош-Агач, кемпинговый комплекс Юрта",
            to: "Стрежевой, Аэропорт",
            time: DateHelper.createDateWithTime({
                day: 6,
                month: 8,
                year: new Date().getFullYear(),
                hours: 11,
            }).toISOString(),
            phone: "+7(942)110-54-11",
            carType: CarTypes.BUS,
        },
    ],
};

const DriverTripsList = () => {
    const [type, setType] = useState<TripType>(TripType.ACTIVE);
    const [currentTrip, setCurrentTrip] = useState<ITrip | null>(null);

    const changeType = useCallback((type: TripType) => setType(type), [setType]);
    const onInfo = useCallback((trip: ITrip) => setCurrentTrip(trip), [setCurrentTrip]);
    const onCloseModal = useCallback(() => setCurrentTrip(null), [setCurrentTrip]);

    return (
        <>
            <DriverTripsTypeBar onChange={changeType} />
            <Flex direction={"column"} gap={"3"} className="mt-5">
                {trips[type].map((trip, i) => (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i / 10 }}
                        key={type + i}
                        className="w-full"
                    >
                        <DriverTripCard trip={trip} type={type} onInfo={onInfo} />
                    </motion.div>
                ))}
            </Flex>
            <DriverTripsModal
                opened={!!currentTrip}
                onClose={onCloseModal}
                trip={currentTrip ?? undefined}
            />
        </>
    );
};

export default DriverTripsList;
