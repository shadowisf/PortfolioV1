import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function toastSuccess(msg: string) {
  toast.success(msg, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    closeButton: true,
  });
}

export function toastFail(msg: string) {
  toast.error(msg, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Slide,
    closeButton: true,
  });
}
