import { Flex, Text } from "@radix-ui/themes";
import { memo, useEffect, useState, type FC } from "react";
import { TripType } from "./types/TripType";
import type { IDriverTripsTypeBarProps } from "./types/IDriverTripsTypeBar";

const DriverTripsTypeBar: FC<IDriverTripsTypeBarProps> = ({ onChange }) => {
    const [type, setType] = useState(TripType.ACTIVE);

    useEffect(() => {
        if (onChange) {
            onChange(type);
        }
    }, [type, onChange]);

    return (
        <Flex className="rounded-full p-1 bg-gray-200">
            <Flex
                width={"33%"}
                justify={"center"}
                align={"center"}
                className={`${type === TripType.ACTIVE ? "bg-gray-50" : ""} rounded-full pt-2 pb-2 cursor-pointer transition`}
                onClick={() => setType(TripType.ACTIVE)}
            >
                <Text size={"2"} weight={type === TripType.ACTIVE ? "bold" : "medium"}>
                    Активные
                </Text>
            </Flex>
            <Flex
                width={"33%"}
                justify={"center"}
                align={"center"}
                className={`${type === TripType.UPCOMING ? "bg-gray-50" : ""} rounded-full pt-2 pb-2 cursor-pointer transition`}
                onClick={() => setType(TripType.UPCOMING)}
            >
                <Text size={"2"} weight={type === TripType.UPCOMING ? "bold" : "medium"}>
                    Предстоящие
                </Text>
            </Flex>
            <Flex
                width={"33%"}
                justify={"center"}
                align={"center"}
                className={`${type === TripType.COMPLETED ? "bg-gray-50" : ""} rounded-full pt-2 pb-2 cursor-pointer transition`}
                onClick={() => setType(TripType.COMPLETED)}
            >
                <Text size={"2"} weight={type === TripType.COMPLETED ? "bold" : "medium"}>
                    Завершенные
                </Text>
            </Flex>
        </Flex>
    );
};

export default memo(DriverTripsTypeBar);
