export default class ValidationHelper {
    static getRequired(field: string): string {
        return `Поле "${field}" обязательно`;
    }

    static getMaxLength(length: number | string): string {
        return `Максимальная количество символов ${length}`;
    }

    static getLength(length: number | string): string {
        return `Количество символов должно быть ${length}`;
    }

    static getMaxValue(value: number | string): string {
        return `Максимальное значение ${value}`;
    }

    static getMinValue(value: number | string): string {
        return `Минимальное значение ${value}`;
    }
}
