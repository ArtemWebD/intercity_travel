import { memo } from "react";
import BaseSection from "../../../core/components/base/BaseSection";
import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import AddIcon from "@mui/icons-material/Add";
import BaseButton from "../../../core/components/base/BaseButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const DriverInfoCars = () => {
    return (
        <BaseSection className="mt-4">
            <Flex justify={"between"} align={"center"}>
                <Text>Мои авто</Text>
                <BaseButton text="Добавить" icon={AddIcon} />
            </Flex>
            <Flex direction={"column"} gap={"4"} className="mt-3">
                <Box className="w-full h-[80px] rounded-lg !p-2 bg-gray-200">
                    <Flex height={"100%"} gap={"2"}>
                        <Box width={"67px"} height={"100%"} className="rounded-lg overflow-hidden">
                            <img
                                src="/images/driver-info/car.png"
                                alt="Авто"
                                className="min-w-full min-h-full object-cover"
                            />
                        </Box>
                        <Flex gap={"5"}>
                            <Flex direction={"column"} justify={"between"}>
                                <Text weight={"bold"}>Toyota Camry</Text>
                                <Text weight={"bold"}>А432МР70</Text>
                            </Flex>
                            <Badge
                                className="!bg-[var(--accent-12)] !text-[var(--gray-1)]"
                                highContrast
                            >
                                Активно
                            </Badge>
                        </Flex>
                        <MoreVertIcon
                            sx={{ fontSize: 20 }}
                            className="cursor-pointer ml-auto mt-auto mb-auto"
                        />
                    </Flex>
                </Box>
                <Box className="w-full h-[80px] rounded-lg !p-2 bg-gray-200">
                    <Flex height={"100%"} gap={"2"}>
                        <Box width={"67px"} height={"100%"} className="rounded-lg overflow-hidden">
                            <img
                                src="/images/driver-info/car.png"
                                alt="Авто"
                                className="min-w-full min-h-full object-cover"
                            />
                        </Box>
                        <Flex gap={"5"}>
                            <Flex direction={"column"} justify={"between"}>
                                <Text weight={"bold"}>Toyota Camry</Text>
                                <Text weight={"bold"}>А432МР70</Text>
                            </Flex>
                        </Flex>
                        <MoreVertIcon
                            sx={{ fontSize: 20 }}
                            className="cursor-pointer ml-auto mt-auto mb-auto"
                        />
                    </Flex>
                </Box>
            </Flex>
        </BaseSection>
    );
};

export default memo(DriverInfoCars);
