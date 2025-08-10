import { memo, useMemo } from "react";
import BaseForm from "../../../core/components/base/BaseForm";
import { Form } from "radix-ui";
import BaseLabel from "../../../core/components/base/BaseLabel";
import { Flex, Select } from "@radix-ui/themes";
import BaseInput from "../../../core/components/base/BaseInput";
import { CarTypes } from "../../../store/driver/types/IDriverStore";
import CarHelper from "../../../core/libs/car-helper/carHelper";

const DriverInfoForm = () => {
    const carTypes = useMemo(
        () =>
            Object.values(CarTypes).map((value) => ({
                type: value,
                name: CarHelper.getName(value),
                icon: CarHelper.getIcon(value),
            })),
        [],
    );

    return (
        <BaseForm buttonLabel="Сохранить" className="h-full pt-0 mt-6">
            <Form.Field name="name">
                <BaseLabel>Имя</BaseLabel>
                <Flex mt={"1"} direction={"column"} gap={"1"}>
                    <BaseInput name="name" placeholder="Введите имя" />
                </Flex>
            </Form.Field>
            <Form.Field name="surname" className="mt-5">
                <BaseLabel>Фамилия</BaseLabel>
                <Flex mt={"1"} direction={"column"} gap={"1"}>
                    <BaseInput name="surname" placeholder="Введите фамилию" />
                </Flex>
            </Form.Field>
            <Form.Field name="phone" className="mt-5">
                <BaseLabel>Номер телефона</BaseLabel>
                <Flex direction={"column"} gap={"1"}>
                    <BaseInput
                        // {...registerWithMask("phone", ["+7 999-999-99-99"], { required: true })}
                        name="phone"
                        type="tel"
                        placeholder="Введите номер телефона"
                    />
                    {/* {errors.phone && <BaseFormMessage label={errors.phone?.message} />} */}
                </Flex>
            </Form.Field>
            <Form.Field name="type" className="mt-5 mb-6">
                <BaseLabel>Тип автомобиля</BaseLabel>
                <Flex direction={"column"} gap={"1"}>
                    <Select.Root size={"3"} defaultValue={carTypes[0].type}>
                        <Select.Trigger />
                        <Select.Content>
                            {carTypes.map((value) => (
                                <Select.Item
                                    key={value.type}
                                    value={value.type}
                                    className="!text-xs"
                                >
                                    <Flex gap={"1"} align={"center"}>
                                        <value.icon sx={{ fontSize: 20 }} />
                                        {value.name}
                                    </Flex>
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Root>
                    {/* {errors.phone && <BaseFormMessage label={errors.phone?.message} />} */}
                </Flex>
            </Form.Field>
        </BaseForm>
    );
};

export default memo(DriverInfoForm);
