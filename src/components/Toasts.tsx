import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function toastSuccess(msg: string) {
  toast.success(msg, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
}

export function toastIntro(msg: string) {
  toast.info(msg, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Slide,
    closeButton: false,
  });
}

export function toastFail(msg: string) {
  toast.error(msg, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Slide,
  });
}
