import { Box, Button, Dialog, Flex } from "@radix-ui/themes";
import { createRef, memo, useEffect, useMemo, useState, type ChangeEvent, type FC } from "react";
import Cropper, { type ReactCropperElement } from "react-cropper";
import type { IBaseImageUploadProps } from "./types/IBaseImageUpload";
import "cropperjs/dist/cropper.css";

const BaseImageUpload: FC<IBaseImageUploadProps> = ({ onImage }) => {
    const [image, setImage] = useState("");
    const cropperRef = createRef<ReactCropperElement>();

    const id = useMemo(() => Math.random().toString().slice(1), []);

    function onChange(event: ChangeEvent<HTMLInputElement>): void {
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

        onImage(cropped);
        cancel();
    }

    function cancel(): void {
        setImage("");
    }

    return (
        <>
            <Box
                position={"absolute"}
                left={"0"}
                top={"0"}
                width={"100%"}
                height={"100%"}
                className="!cursor-pointer z-1"
            >
                <input
                    type="file"
                    name="image"
                    id={id}
                    accept=".png, .jpg"
                    className="hidden"
                    onChange={onChange}
                />
                <label
                    htmlFor={id}
                    className="block w-full h-full absolute top-0 left-0 cursor-pointer"
                />
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
                        <Button size={"3"} onClick={onSave}>
                            Сохранить
                        </Button>
                        <Button size={"3"} color="red" onClick={cancel}>
                            Отменить
                        </Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </>
    );
};

export default memo(BaseImageUpload);
