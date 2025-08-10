import { Flex, Select } from "@radix-ui/themes";
import BaseForm from "../../../core/components/base/BaseForm";
import { Form } from "radix-ui";
import BaseInput from "../../../core/components/base/BaseInput";
import BaseLabel from "../../../core/components/base/BaseLabel";
import { memo, useMemo, type FC } from "react";
import { Roles } from "../../../store/auth/types/IAuthStore";
import { maxLength, minLength, nonNullish, object, pipe, string } from "valibot";
import ValidationHelper from "../../../core/libs/validation-helper/validationHelper";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import type { IExpandProps } from "../service/types/IRightsService";
import BaseFormMessage from "../../../core/components/base/BaseFormMessage";
import { useHookFormMask } from "use-mask-input";
import WebApp from "@twa-dev/sdk";
import type { IRightsFormProps } from "./types/IRightsForm";

const RightsForm: FC<IRightsFormProps> = ({ onSubmited }) => {
    const roles = useMemo(
        () => [
            {
                role: Roles.DRIVER,
                name: "Водитель",
            },
            {
                role: Roles.AGENT,
                name: "Агент",
            },
        ],
        [],
    );

    const FormSchema = object({
        name: pipe(
            string(ValidationHelper.getRequired("Имя")),
            minLength(1, ValidationHelper.getRequired("Имя")),
            maxLength(100, ValidationHelper.getMaxLength(100)),
        ),
        surname: pipe(
            string(ValidationHelper.getRequired("Фамилия")),
            minLength(1, ValidationHelper.getRequired("Фамилия")),
            maxLength(100, ValidationHelper.getMaxLength(100)),
        ),
        role: nonNullish(
            pipe(
                string(ValidationHelper.getRequired("Роль")),
                minLength(1, ValidationHelper.getRequired("Роль")),
            ),
            ValidationHelper.getRequired("Роль"),
        ),
        phone: pipe(
            string(ValidationHelper.getRequired("Номер телефона")),
            minLength(1, ValidationHelper.getRequired("Номер телефона")),
        ),
        number: pipe(
            string(ValidationHelper.getRequired("Пригласительный номер")),
            minLength(1, ValidationHelper.getRequired("Пригласительный номер")),
            maxLength(200, ValidationHelper.getMaxLength(200)),
        ),
    });
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<IExpandProps>({
        //@ts-ignore
        resolver: valibotResolver(FormSchema),
        defaultValues: {
            role: roles[0].role,
            name: WebApp?.initDataUnsafe?.user?.first_name,
            surname: WebApp?.initDataUnsafe?.user?.last_name,
        },
    });
    const registerWithMask = useHookFormMask(register);

    watch("role");

    async function onSubmit(data: IExpandProps) {
        if (onSubmited) {
            onSubmited();
        }
    }

    return (
        <BaseForm
            buttonLabel="Отправить"
            className="w-full h-full"
            // @ts-ignore
            onSubmit={handleSubmit(onSubmit)}
        >
            <Flex gap={"2"}>
                <Form.Field name="name" className="w-[50%]">
                    <BaseLabel>Имя</BaseLabel>
                    <Flex direction={"column"} gap={"1"}>
                        <BaseInput {...register("name")} name="name" placeholder="Введите имя" />
                        {errors.name && <BaseFormMessage label={errors.name?.message} />}
                    </Flex>
                </Form.Field>
                <Form.Field name="surname" className="w-[50%]">
                    <BaseLabel>Фамилия</BaseLabel>
                    <Flex direction={"column"} gap={"1"}>
                        <BaseInput
                            {...register("surname")}
                            name="surname"
                            placeholder="Введите фамилию"
                        />
                        {errors.surname && <BaseFormMessage label={errors.surname?.message} />}
                    </Flex>
                </Form.Field>
            </Flex>
            <Form.Field name="role" className="mt-5">
                <BaseLabel>Кто вы?</BaseLabel>
                <Flex direction={"column"} gap={"1"}>
                    <Select.Root
                        defaultValue={roles[0].role}
                        onValueChange={(value) => setValue("role", value as Roles)}
                    >
                        <Select.Trigger />
                        <Select.Content>
                            {roles.map((role) => (
                                <Select.Item key={role.role} value={role.role}>
                                    {role.name}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Root>
                    {errors.role && <BaseFormMessage label={errors.role?.message} />}
                </Flex>
            </Form.Field>
            <Form.Field name="phone" className="mt-5">
                <BaseLabel>Номер телефона</BaseLabel>
                <Flex direction={"column"} gap={"1"}>
                    <BaseInput
                        {...registerWithMask("phone", ["+7 999-999-99-99"], { required: true })}
                        name="phone"
                        type="tel"
                        placeholder="Введите номер телефона"
                    />
                    {errors.phone && <BaseFormMessage label={errors.phone?.message} />}
                </Flex>
            </Form.Field>
            <Form.Field name="number" className="mt-5 mb-6">
                <BaseLabel>Пригласительный номер</BaseLabel>
                <Flex direction={"column"} gap={"1"}>
                    <BaseInput
                        {...register("number")}
                        name="number"
                        type="number"
                        placeholder="Введите пригласительный номер"
                    />
                    {errors.number && <BaseFormMessage label={errors.number?.message} />}
                </Flex>
            </Form.Field>
        </BaseForm>
    );
};

export default memo(RightsForm);
