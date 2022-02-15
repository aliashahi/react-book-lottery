import { toast, ToastOptions } from "react-toastify";
const CommonConfigs: ToastOptions = {
  closeButton: true,
  autoClose: 3000,
  theme: "colored",
};
export class AlertService {
  public static Success(message: string) {
    toast(message, { ...CommonConfigs, type: "success" });
  }
  public static Error(message: string) {
    toast(message, { ...CommonConfigs, type: "error" });
  }
}
