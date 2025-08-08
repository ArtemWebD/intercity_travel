export default class ValidationHelper {
    static getRequired(field: string): string {
        return `Поле "${field}" обязательно`;
    }

    static getMaxLength(length: number | string): string {
        return `Максимальная количество символов ${length}`;
    }
}
