import { memo, useCallback, type FC } from "react";
import BaseForm from "../../../core/components/base/BaseForm";
import { Form } from "radix-ui";
import BaseLabel from "../../../core/components/base/BaseLabel";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Flex, Text } from "@radix-ui/themes";
import BaseDatePicker from "../../../core/components/base/BaseDatePicker";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import BaseAddressInput from "../../../core/components/base-address-input/BaseAddressInput";
import BaseInputNumber from "../../../core/components/base/BaseInputNumber";
import PersonIcon from "@mui/icons-material/Person";
import BaseInput from "../../../core/components/base/BaseInput";
import PhoneIcon from "@mui/icons-material/Phone";
import BaseTextArea from "../../../core/components/base/BaseTextArea";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import type { ITripData } from "./types/ITrip";
import {
    date,
    maxLength,
    maxValue,
    minLength,
    minValue,
    nonNullish,
    nullish,
    number,
    object,
    pipe,
    string,
} from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";
import ValidationHelper from "../../../core/libs/validation-helper/validationHelper";
import BaseFormMessage from "../../../core/components/base/BaseFormMessage";
import type { IDriverTripFormProps } from "./types/IDriverTripForm";

const DriverTripForm: FC<IDriverTripFormProps> = ({
    initialValue,
    onCancel,
    onSubmit: onSubmited,
}) => {
    const FormSchema = object({
        date: nonNullish(
            date(ValidationHelper.getRequired("Дата")),
            ValidationHelper.getRequired("Дата"),
        ),
        time: nonNullish(
            date(ValidationHelper.getRequired("Время")),
            ValidationHelper.getRequired("Время"),
        ),
        from: pipe(
            string(ValidationHelper.getRequired("Откуда")),
            minLength(1, ValidationHelper.getRequired("Откуда")),
            maxLength(200, ValidationHelper.getMaxLength(200)),
        ),
        to: pipe(
            string(ValidationHelper.getRequired("Куда")),
            minLength(1, ValidationHelper.getRequired("Куда")),
            maxLength(200, ValidationHelper.getMaxLength(200)),
        ),
        passengers: pipe(
            number(ValidationHelper.getRequired("Пассажиры")),
            minValue(1, ValidationHelper.getRequired("Пассажиры")),
            maxValue(100, ValidationHelper.getMaxValue(100)),
        ),
        price: pipe(
            number(ValidationHelper.getRequired("Цена")),
            minValue(1, ValidationHelper.getRequired("Цена")),
            maxValue(100000, ValidationHelper.getMaxValue(100000)),
        ),
        phone: pipe(
            string(ValidationHelper.getRequired("Контакты")),
            minLength(16, ValidationHelper.getLength(16)),
            maxLength(16, ValidationHelper.getLength(16)),
        ),
        info: nullish(pipe(string(), maxLength(500, ValidationHelper.getMaxLength(500)))),
    });
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<ITripData>({
        //@ts-ignore
        resolver: valibotResolver(FormSchema),
        defaultValues: {
            ...initialValue,
        },
    });
    const registerWithMask = useHookFormMask(register);

    watch(["date", "time", "from", "to", "passengers", "price"]);

    const onDateChange = useCallback(
        (date: Date | null) => {
            if (date) {
                setValue("date", date);
            }
        },
        [setValue],
    );
    const onTimeChange = useCallback(
        (time: Date | null) => {
            if (time) {
                setValue("time", time);
            }
        },
        [setValue],
    );
    const onFromChange = useCallback((from: string) => setValue("from", from), [setValue]);
    const onToChange = useCallback((to: string) => setValue("to", to), [setValue]);
    const onPassengersChange = useCallback(
        (passengers: number) => setValue("passengers", passengers),
        [setValue],
    );
    const onPriceChange = useCallback((price: number) => setValue("price", price), [setValue]);

    async function onSubmit() {
        if (onSubmited) {
            onSubmited();
            reset();
        }
    }

    return (
        <BaseForm
            buttonLabel="Сохранить"
            className="!p-0 !h-full"
            isCancel={true}
            onSubmit={handleSubmit(onSubmit)}
            onCancel={onCancel}
        >
            <Flex justify={"between"}>
                <Form.Field name="date" className="w-[40%]">
                    <BaseLabel className="flex items-center gap-1">
                        <CalendarTodayIcon sx={{ fontSize: 16 }} className="text-gray-400" />
                        <Text weight={"medium"}>Дата</Text>
                    </BaseLabel>
                    <Flex direction={"column"} gap={"1"} className="mt-1">
                        <BaseDatePicker value={initialValue?.date} onChange={onDateChange} />
                        {errors.date && <BaseFormMessage label={errors.date?.message} />}
                    </Flex>
                </Form.Field>
                <Form.Field name="time" className="w-[40%]">
                    <BaseLabel className="flex items-center gap-1">
                        <AccessTimeIcon sx={{ fontSize: 16 }} className="text-gray-400" />
                        <Text weight={"medium"}>Время</Text>
                    </BaseLabel>
                    <Flex direction={"column"} gap={"1"} className="mt-1">
                        <BaseDatePicker
                            value={initialValue?.time}
                            isTime={true}
                            onChange={onTimeChange}
                        />
                        {errors.time && <BaseFormMessage label={errors.time?.message} />}
                    </Flex>
                </Form.Field>
            </Flex>
            <Form.Field name="from" className="mt-2">
                <BaseLabel className="flex items-center gap-1">
                    <RoomOutlinedIcon sx={{ fontSize: 16 }} className="text-green-500" />
                    <Text weight={"medium"}>Откуда</Text>
                </BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseAddressInput value={initialValue?.from} onChange={onFromChange} />
                    {errors.from && <BaseFormMessage label={errors.from?.message} />}
                </Flex>
            </Form.Field>
            <Form.Field name="to" className="mt-2">
                <BaseLabel className="flex items-center gap-1">
                    <RoomOutlinedIcon sx={{ fontSize: 16 }} className="text-red-500" />
                    <Text weight={"medium"}>Куда</Text>
                </BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseAddressInput value={initialValue?.to} onChange={onToChange} />
                    {errors.to && <BaseFormMessage label={errors.to?.message} />}
                </Flex>
            </Form.Field>
            <Flex justify={"between"} className="mt-2">
                <Form.Field name="passengers" className="w-[40%]">
                    <BaseLabel className="flex items-center gap-1">
                        <PersonIcon sx={{ fontSize: 16 }} className="text-gray-400" />
                        <Text weight={"medium"}>Пассажиры</Text>
                    </BaseLabel>
                    <Flex direction={"column"} gap={"1"} className="mt-1">
                        <BaseInputNumber
                            value={initialValue?.passengers}
                            onNumberChange={onPassengersChange}
                        />
                        {errors.passengers && (
                            <BaseFormMessage label={errors.passengers?.message} />
                        )}
                    </Flex>
                </Form.Field>
                <Form.Field name="price" className="w-[40%]">
                    <BaseLabel>
                        <Text weight={"medium"}>Цена</Text>
                    </BaseLabel>
                    <Flex direction={"column"} gap={"1"} className="mt-1">
                        <BaseInputNumber
                            value={initialValue?.price}
                            placeholder="Введите цену"
                            onNumberChange={onPriceChange}
                        />
                        {errors.price && <BaseFormMessage label={errors.price?.message} />}
                    </Flex>
                </Form.Field>
            </Flex>
            <Form.Field name="phone" className="mt-2">
                <BaseLabel className="flex items-center gap-1">
                    <PhoneIcon sx={{ fontSize: 16 }} className="text-gray-400" />
                    <Text weight={"medium"}>Контакты пассажира</Text>
                </BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseInput
                        {...registerWithMask("phone", ["+7 999 999 99-99"], { required: true })}
                        value={initialValue?.phone}
                        type="tel"
                        placeholder="Номер телефона"
                    />
                    {errors.phone && <BaseFormMessage label={errors.phone?.message} />}
                </Flex>
            </Form.Field>
            <Form.Field name="info" className="mt-2 mb-5">
                <BaseLabel className="flex items-center gap-1">
                    <Text weight={"medium"}>Дополнительная информация</Text>
                </BaseLabel>
                <Flex direction={"column"} gap={"1"} className="mt-1">
                    <BaseTextArea {...register("info")} />
                    {errors.info && <BaseFormMessage label={errors.info?.message} />}
                </Flex>
            </Form.Field>
        </BaseForm>
    );
};

export default memo(DriverTripForm);
