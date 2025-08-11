import { Badge, Card, Flex, Text } from "@radix-ui/themes";
import { memo, useMemo, type FC } from "react";
import type { IDriverTripCardProps } from "./types/IDriverTripCard";
import CarHelper from "../../../core/libs/car-helper/carHelper";
import { TripType } from "./types/TripType";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BaseButton from "../../../core/components/base/BaseButton";
import DateHelper from "../../../core/libs/date-helper/dateHelper";

const DriverTripCard: FC<IDriverTripCardProps> = ({ from, phone, time, to, type, carType }) => {
    const CarIcon = useMemo(() => CarHelper.getIcon(carType), [carType]);

    return (
        <Card>
            <Flex justify={"between"} align={"center"}>
                <Flex align={"center"} gap={"1"}>
                    <Badge className="!bg-[var(--accent-12)] !text-[var(--gray-1)]" highContrast>
                        {type === TripType.ACTIVE && "Активно"}
                        {type === TripType.UPCOMING && "Запланировано"}
                        {type === TripType.COMPLETED && "Завершено"}
                    </Badge>
                    <CarIcon sx={{ fontSize: 24 }} className="text-gray-400" />
                </Flex>
                <MoreVertIcon sx={{ fontSize: 20 }} className="cursor-pointer" />
            </Flex>
            <Flex align={"center"} gap={"2"} className="mt-2">
                <RoomOutlinedIcon sx={{ fontSize: 15 }} className="text-green-600" />
                <Text size={"2"}>{from}</Text>
            </Flex>
            <Flex align={"center"} gap={"2"} className="mt-2">
                <RoomOutlinedIcon sx={{ fontSize: 15 }} className="text-red-600" />
                <Text size={"2"}>{to}</Text>
            </Flex>
            <Flex align={"center"} justify={"between"} className="mt-2">
                <Flex align={"center"} gap={"2"}>
                    <AccessTimeOutlinedIcon sx={{ fontSize: 15 }} className="text-gray-400" />
                    <Text size={"2"} className="!text-gray-500">
                        {DateHelper.formatDateWithRelativeDay(time)}
                    </Text>
                </Flex>
                <Flex align={"center"} gap={"2"}>
                    <LocalPhoneIcon sx={{ fontSize: 15 }} className="text-gray-400" />
                    <Text size={"2"} className="!text-gray-500">
                        {phone}
                    </Text>
                </Flex>
            </Flex>
            {type === TripType.ACTIVE && (
                <Flex justify={"center"} className="mt-4">
                    <BaseButton text="Завершить поездку" />
                </Flex>
            )}
        </Card>
    );
};

export default memo(DriverTripCard);
