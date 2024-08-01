import { ToastContainer } from "react-toastify";
import { toastIntro, toastSuccess } from "../components/Toasts";
import ToolTip from "../components/ToolTip";
import { colorControls } from "../components/ColorUtils";

export default function Test() {
  colorControls();

  return (
    <section className="container">
      <button className="button" onClick={toastIntro}>
        intro
      </button>
      <button className="button" onClick={toastSuccess}>
        success
      </button>
      <ToastContainer />
      <ToolTip />
    </section>
  );
}
