import { useRef } from "react";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function toastSuccess(msg: string) {
  toast.success(msg, {
    position: "top-center",
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

export function toastIntro(msg: string) {
  toast.info(msg, {
    delay: 10000,
    position: "top-left",
    autoClose: false,
    hideProgressBar: true,
    theme: "light",
    transition: Slide,
    closeButton: false,

    toastId: "intro",
  });
}

export function toastFail(msg: string) {
  toast.error(msg, {
    position: "top-center",
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
