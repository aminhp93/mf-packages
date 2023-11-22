import { toast, ToastType } from "./toast-manager";

export const handleError = (error: any, customMessage: string = ""): void => {
  if (error.message) {
    toast(error.message, ToastType.Error);
  } else if (customMessage) {
    toast(customMessage, ToastType.Error);
  } else {
    toast("Unknown error occurred", ToastType.Error);
  }
};

export const handleSuccess = (response: any, customMessage: string = "") => {
  if (response.errors) {
    toast(response.errors?.[0]?.message || "Error", ToastType.Error);
  } else {
    toast(customMessage, ToastType.Success);
  }
};
