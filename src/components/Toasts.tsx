import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function toastSuccess(e: { preventDefault: () => void }) {
  e.preventDefault();

  toast.success("message sent! thank you for contacting me!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
}

export function toastIntro(e: { preventDefault: () => void }) {
  e.preventDefault();

  toast.info("hint: click my name on the top left to generate a new theme!", {
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

export function toastFail(e: { preventDefault: () => void }, error: string) {
  e.preventDefault();

  toast.error(error, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
}
