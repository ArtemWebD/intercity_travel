import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { memo, useCallback, useState } from "react";
import BaseImageUpload from "../../../core/components/base-image-upload/BaseImageUpload";
import EditIcon from "@mui/icons-material/Edit";

const DriverInfoHeader = () => {
    const [photo, setPhoto] = useState("/images/driver-info/user.webp");

    const changePhoto = useCallback((image: string) => setPhoto(image), [setPhoto]);

    return (
        <Flex align={"center"} gap={"5"}>
            <Box width={"100px"} height={"100px"} className="rounded-full overflow-hidden relative">
                <BaseImageUpload onImage={changePhoto} />
                <img alt="photo" src={photo} className="min-w-full min-h-full object-cover" />
            </Box>
            <Flex direction={"column"} gap={"2"} position={"relative"}>
                <Text size={"6"}>Иван Иванов</Text>
                <Text size={"3"} color="gray">
                    Водитель
                </Text>
                <IconButton size={"1"} className="!absolute !right-[-2rem] !top-0">
                    <EditIcon sx={{ fontSize: 15 }} />
                </IconButton>
            </Flex>
        </Flex>
    );
};

export default memo(DriverInfoHeader);
