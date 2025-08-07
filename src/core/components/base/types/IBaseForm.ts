import type { FormEventHandler, HTMLAttributes } from "react";

export interface IBaseFormProps extends HTMLAttributes<HTMLDivElement> {
    buttonLabel?: string;
    isCancel?: boolean;
    onCancel?: () => void;
    onSubmit?: FormEventHandler;
}
