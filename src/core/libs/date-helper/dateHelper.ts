import type { ICreateDateWithTimeProps } from "./types/IDateHelper";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import isTomorrow from "dayjs/plugin/isTomorrow";

export default class DateHelper {
    static createDateWithTime({
        day,
        month,
        year,
        hours,
        minutes,
    }: ICreateDateWithTimeProps): Date {
        dayjs.extend(utc);
        const date = dayjs.utc(`${year}-${month}-${day} ${hours ?? "00"}:${minutes ?? "00"}:00`);

        return date.toDate();
    }

    static getISODateWithZeroUtc(date: Date | string): string {
        dayjs.extend(utc);

        const dayjsObj = dayjs.utc(date);
        const fixedDate = dayjsObj.startOf("day").utcOffset(0, true);

        return fixedDate.format("YYYY-MM-DDTHH:mm:ss[Z]");
    }

    static formatDateWithRelativeDay(date: Date | string): string {
        dayjs.extend(isToday);
        dayjs.extend(isYesterday);
        dayjs.extend(isTomorrow);
        dayjs.extend(utc);

        const dayJsObject = dayjs.utc(date);

        if (dayJsObject.isToday()) {
            return `Сегодня ${dayJsObject.format("HH:mm")}`;
        }

        if (dayJsObject.isYesterday()) {
            return `Вчера ${dayJsObject.format("HH:mm")}`;
        }

        if (dayJsObject.isTomorrow()) {
            return `Завтра ${dayJsObject.format("HH:mm")}`;
        }

        return dayJsObject.format("DD.MM.YYYY HH:mm");
    }

    static getDateFromString(date: string): Date {
        dayjs.extend(utc);
        const offset = -dayjs(date).utcOffset() / 60;
        let dayjsObj = dayjs(date).utc();
        dayjsObj = dayjsObj.add(offset, "hour");

        return dayjsObj.toDate();
    }
}
