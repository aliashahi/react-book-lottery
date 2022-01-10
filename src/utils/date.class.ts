import moment from "moment";
import { DATE_FORMAT } from "../constants";

export class DateHandler {
  public static createDateFormatToShow(date: Date): string {
    return moment(new Date(date).toLocaleDateString()).format(DATE_FORMAT);
  }
}
