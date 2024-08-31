import { format as formatDateToString } from "date-fns/format";
import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";

/**
 * Format values for i18n translation keys variables.
 * Currently only takes care of Date instances.
 * @param value the value to format
 * @returns formatted value
 */
export function formatValues(value: any, options?: string | DateFormat) {
  if (value instanceof Date) {
    return formatDate(value, options as DateFormat);
  }
  return value;
}

export enum DateFormat {
  ShortDate = "ShortDate",
  LongDate = "LongDate",
  ShortDateTime = "ShortDateTime",
  ShortDateTimeWithSeconds = "ShortDateTimeWithSeconds",
  LongDateTime = "LongDateTime",
  ISO = "ISO",
  DistanceToNowStrict = "DistanceToNowStrict"
}

const DATE_FORMAT_OPTIONS: Record<DateFormat, string> = {
  [DateFormat.ShortDate]: "P",
  [DateFormat.LongDate]: "PPP",
  [DateFormat.ShortDateTime]: "P p",
  [DateFormat.ShortDateTimeWithSeconds]: "P pp",
  [DateFormat.LongDateTime]: "PPP p",
  [DateFormat.ISO]: "YYYY-MM-dd",
  [DateFormat.DistanceToNowStrict]: "-"
};

export function formatDate(date: Date, format: DateFormat = DateFormat.ShortDateTime): string {
  const options = DATE_FORMAT_OPTIONS[format];
  if (format === DateFormat.DistanceToNowStrict) return formatDistanceToNowStrict(date);
  return formatDateToString(date, options);
}
