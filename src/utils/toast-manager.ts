import { toast as toastify } from "react-toastify";

export enum ToastType {
  // eslint-disable-next-line no-unused-vars
  Info = "info",
  // eslint-disable-next-line no-unused-vars
  Warning = "warning",
  // eslint-disable-next-line no-unused-vars
  Success = "success",
  // eslint-disable-next-line no-unused-vars
  Error = "error",
}

export const toast = (
  message: string,
  type: ToastType = ToastType.Info,
  autoClose: number | false = 5000
): void => {
  toastify(message, {
    position: "bottom-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type,
  });
};
