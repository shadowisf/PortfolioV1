import IconLetterE from "../assets/IconLetterE";
import IconLetterR from "../assets/IconLetterR";

export default function ToolTip() {
  return (
    <footer id="tooltip" className="tooltip">
      <span className="flexCenterV">
        <picture className="flexCenterV">
          <IconLetterE />
        </picture>
        <span className="withIcon">generate theme</span>
      </span>

      <span className="flexCenterV">
        <picture className="flexCenterV">
          <IconLetterR />
        </picture>
        <span className="withIcon">reset theme</span>
      </span>
    </footer>
  );
}
