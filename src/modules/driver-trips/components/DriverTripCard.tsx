import { Badge, Card, Flex, Popover, Text } from "@radix-ui/themes";
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
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DeleteIcon from "@mui/icons-material/Delete";

const DriverTripCard: FC<IDriverTripCardProps> = ({
    trip,
    type,
    onDelete,
    onInfo,
}) => {
    const { carType, from, phone, time, to } = useMemo(() => trip, [trip]);
    const CarIcon = useMemo(() => CarHelper.getIcon(carType), [carType]);

    function infoHandler(): void {
        if (onInfo) {
            onInfo(trip);
        }
    }

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
                <Popover.Root>
                    <Popover.Trigger>
                        <MoreVertIcon sx={{ fontSize: 20 }} className="cursor-pointer" />
                    </Popover.Trigger>
                    <Popover.Content>
                        <Flex direction={"column"} gap={"3"}>
                            <Flex align={"center"} gap={"1"} onClick={infoHandler}>
                                <LightbulbIcon sx={{ fontSize: 15 }} className="text-yellow-500" />
                                <Text size={"2"}>Информация</Text>
                            </Flex>
                            {type !== TripType.ACTIVE && (
                                <Flex align={"center"} gap={"1"} onClick={onDelete}>
                                    <DeleteIcon sx={{ fontSize: 15 }} className="text-red-500" />
                                    <Text size={"2"}>Удалить</Text>
                                </Flex>
                            )}
                        </Flex>
                    </Popover.Content>
                </Popover.Root>
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
