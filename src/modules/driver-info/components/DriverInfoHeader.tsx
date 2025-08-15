import { Badge, Box, Button, Flex, Text } from "@radix-ui/themes";
import { memo } from "react";
import BaseSection from "../../../core/components/base/BaseSection";
import StarIcon from "@mui/icons-material/Star";
import AnimatedNumber from "../../../core/components/animated-number/AnimatedNumber";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import BaseButton from "../../../core/components/base/BaseButton";
import BaseImage from "../../../core/components/base/BaseImage";

const DriverInfoHeader = () => {
    return (
        <BaseSection className="!flex flex-col justify-center items-center">
            <Box className="w-[90px] h-[90px] rounded-full overflow-hidden mb-3">
                <BaseImage src="/images/driver-info/user.webp" alt="Фото профиля" />
            </Box>
            <Text size={"4"}>Иванов Иван</Text>
            <Flex className="mt-3 mb-3" align={"center"} gap={"1"}>
                <Badge className="!font-bold" size={"1"} highContrast>
                    Водитель
                </Badge>
                <Flex align={"center"}>
                    <StarIcon sx={{ fontSize: 20, color: "#FDC700" }} />
                    <Text weight={"bold"} size={"2"} className="w-[25px]">
                        <AnimatedNumber value={4.9} digits={1} />
                    </Text>
                </Flex>
            </Flex>
            <Text size={"2"} className="!font-semibold">
                Работаю с Января 2025
            </Text>
            <BaseButton text="Редактировать профиль" icon={EditSquareIcon} className="!mt-4" />
        </BaseSection>
    );
};

export default memo(DriverInfoHeader);
