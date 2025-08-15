import type { Roles } from "../../../../store/auth/types/IAuthStore";

export interface IExpandProps {
    name: string;
    surname: string;
    role: Roles;
    phone: string;
    number: string;
}