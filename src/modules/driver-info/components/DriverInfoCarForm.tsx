import { memo, useCallback, useMemo, type FC } from "react";
import BaseForm from "../../../core/components/base/BaseForm";
import { Form } from "radix-ui";
import BaseLabel from "../../../core/components/base/BaseLabel";
import { Flex, Select } from "@radix-ui/themes";
import { CarTypes } from "../../../store/driver/types/IDriverStore";
import CarHelper from "../../../core/libs/car-helper/carHelper";
import BaseInput from "../../../core/components/base/BaseInput";
import BaseInputNumber from "../../../core/components/base/BaseInputNumber";
import BaseSelect from "../../../core/components/base/BaseSelect";
import BaseImageUpload from "../../../core/components/base-image-upload/BaseImageUpload";
import {
    maxLength,
    maxValue,
    minLength,
    minValue,
    nonNullish,
    number,
    object,
    pipe,
    string,
} from "valibot";
import ValidationHelper from "../../../core/libs/validation-helper/validationHelper";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import BaseFormMessage from "../../../core/components/base/BaseFormMessage";
import type { IFormProps } from "../../../core/types/IForm";

const DriverInfoCarForm: FC<IFormProps> = ({ onSubmit, onCancel }) => {
    const carTypesOptions = useMemo(
        () =>
            Object.values(CarTypes).map((type) => ({
                type,
                text: CarHelper.getName(type),
            })),
        [],
    );

    const FormSchema = useMemo(
        () =>
            object({
                type: nonNullish(
                    string(ValidationHelper.getRequired("Класс авто")),
                    ValidationHelper.getRequired("Класс авто"),
                ),
                model: pipe(
                    string(ValidationHelper.getRequired("Модель авто")),
                    minLength(1, ValidationHelper.getRequired("Модель авто")),
                    maxLength(200, ValidationHelper.getMaxLength(200)),
                ),
                year: nonNullish(
                    pipe(
                        number(ValidationHelper.getRequired("Год выпуска")),
                        minValue(1980, ValidationHelper.getMinValue(1980)),
                        maxValue(
                            new Date().getFullYear(),
                            ValidationHelper.getMaxValue(new Date().getFullYear()),
                        ),
                    ),
                    ValidationHelper.getRequired("Год выпуска"),
                ),
                photo: nonNullish(
                    pipe(
                        string(ValidationHelper.getRequired("Фото машины")),
                        minLength(1, ValidationHelper.getRequired("Фото машины")),
                    ),
                    ValidationHelper.getRequired("Фото машины"),
                ),
            }),
        [],
    );
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: valibotResolver(FormSchema),
        defaultValues: {
            type: carTypesOptions[0].type,
            photo: "",
        },
    });

    watch(["type", "photo", "year"]);

    const setType = useCallback((type: string) => setValue("type", type), [setValue]);
    const setPhoto = useCallback((photo: string) => setValue("photo", photo), [setValue]);
    const setYear = useCallback((year: number) => setValue("year", year), [setValue]);

    async function submitHandler() {
        if (onSubmit) {
            onSubmit();
        }
    }

    return (
        <BaseForm
            className="!p-0"
            buttonLabel="Добавить"
            isCancel={true}
            onCancel={onCancel}
            onSubmit={handleSubmit(submitHandler)}
        >
            <Form.Field name="type">
                <BaseLabel>Класс авто</BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseSelect defaultValue={carTypesOptions[0].type} onValueChange={setType}>
                        {carTypesOptions.map((option) => (
                            <Select.Item key={option.type} value={option.type}>
                                {option.text}
                            </Select.Item>
                        ))}
                    </BaseSelect>
                    {errors.type && <BaseFormMessage label={errors.type?.message} />}
                </Flex>
            </Form.Field>
            <Form.Field name="model" className="mt-2">
                <BaseLabel>Модель авто</BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseInput {...register("model")} placeholder="Введите модель авто" />
                    {errors.model && <BaseFormMessage label={errors.model?.message} />}
                </Flex>
            </Form.Field>
            <Form.Field name="year" className="mt-2">
                <BaseLabel>Год выпуска</BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseInputNumber placeholder="Введите год выпуска" onNumberChange={setYear} />
                    {errors.year && <BaseFormMessage label={errors.year?.message} />}
                </Flex>
            </Form.Field>
            <Form.Field name="photo" className="mt-2 mb-5">
                <BaseLabel>Фото машины</BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseImageUpload isOverlay={false} onChange={setPhoto} />
                    {errors.photo && <BaseFormMessage label={errors.photo?.message} />}
                </Flex>
            </Form.Field>
        </BaseForm>
    );
};

export default memo(DriverInfoCarForm);
