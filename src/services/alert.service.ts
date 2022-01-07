import { toast } from "react-toastify";

export class AlertService {
  public static Success(message: string) {
    toast(message, { closeButton: true, type: "success", autoClose: 3000 });
  }
  public static Error(message: string) {
    console.log(message);
    toast(message, { closeButton: true, type: "error", autoClose: 3000 });
  }
}
