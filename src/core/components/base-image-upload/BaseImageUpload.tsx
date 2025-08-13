import { Box, Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { createRef, memo, useMemo, useState, type ChangeEvent, type FC } from "react";
import Cropper, { type ReactCropperElement } from "react-cropper";
import type { IBaseImageUploadProps } from "./types/IBaseImageUpload";
import "cropperjs/dist/cropper.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import BaseImage from "../base/BaseImage";
import BaseButton from "../base/BaseButton";

const BaseImageUpload: FC<IBaseImageUploadProps> = ({ onChange, isOverlay }) => {
    const [image, setImage] = useState("");
    const [savedImage, setSavedImage] = useState("");
    const cropperRef = createRef<ReactCropperElement>();

    const id = useMemo(() => Math.random().toString().slice(1), []);

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        event.preventDefault();

        if (!event.target) {
            return;
        }

        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result as string);
        };

        reader.readAsDataURL(file);
    }

    function onSave() {
        const cropped = cropperRef.current?.cropper?.getCroppedCanvas()?.toDataURL();

        if (!cropped) {
            return;
        }

        if (onChange) {
            onChange(cropped);
        }

        if (!isOverlay) {
            setSavedImage(cropped);
        }

        cancel();
    }

    function cancel(): void {
        setImage("");
    }

    return (
        <>
            <Box
                position={isOverlay ? "absolute" : "relative"}
                left={"0"}
                top={"0"}
                width={"100%"}
                height={isOverlay ? "100%" : "100px"}
                className={`!cursor-pointer z-1 overflow-hidden ${isOverlay ? "" : "bg-gray-200 rounded-lg"}`}
            >
                {!!savedImage && !isOverlay && (
                    <BaseImage
                        src={savedImage}
                        alt="Загруженное изображение"
                        className="absolute left-0 right-0 w-full h-full"
                    />
                )}
                <input
                    type="file"
                    name="image"
                    id={id}
                    accept=".png, .jpg"
                    className="hidden"
                    onChange={handleChange}
                />
                <label
                    htmlFor={id}
                    className="block w-full h-full absolute top-0 left-0 cursor-pointer"
                >
                    {!isOverlay && !!!savedImage && (
                        <Flex
                            justify={"center"}
                            align={"center"}
                            direction={"column"}
                            className="w-full h-full"
                        >
                            <CameraAltOutlinedIcon
                                sx={{ fontSize: 30 }}
                                className="text-gray-400"
                            />
                            <Text size={"3"}>Загрузить фото</Text>
                        </Flex>
                    )}
                </label>
            </Box>
            <Dialog.Root open={!!image}>
                <Dialog.Content>
                    <Dialog.Title>Обрежьте изображение</Dialog.Title>
                    <Flex justify={"center"} align={"center"} width={"75vw"}>
                        <Cropper
                            ref={cropperRef}
                            key={image}
                            src={image}
                            responsive={true}
                            style={{
                                width: "100%",
                                height: "400px",
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                            initialAspectRatio={1}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            autoCropArea={1}
                            guides={true}
                            ready={() => cropperRef.current?.cropper?.reset()}
                        />
                    </Flex>
                    <Flex justify={"between"} mt={"5"}>
                        <BaseButton
                            text="Отменить"
                            className="!bg-transparent !border !border-gray-900 !text-gray-900"
                            onClick={cancel}
                        />
                        <BaseButton text="Сохранить" onClick={onSave} />
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </>
    );
};

export default memo(BaseImageUpload);
