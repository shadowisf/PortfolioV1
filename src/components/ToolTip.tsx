import IconLetterE from "../assets/IconLetterE";
import { generateADACompliantColors } from "./ColorUtils";

export default function ToolTip() {
  return (
    <footer id="tooltip" className="tooltip noCursor">
      <span
        className="flexCenterV scaleHover"
        onClick={() => generateADACompliantColors()}
      >
        <picture className="flexCenterV">
          <IconLetterE />
        </picture>
        &emsp;
        <span className="withIcon">generate theme</span>
      </span>
    </footer>
  );
}
