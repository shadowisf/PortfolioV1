import IconLetterE from "../assets/IconLetterE";

export default function ToolTip() {
  return (
    <footer id="tooltip" className="tooltip noCursor">
      <span className="flexCenterV">
        <picture className="flexCenterV">
          <IconLetterE />
        </picture>
        &emsp;
        <span className="withIcon">generate theme</span>
      </span>
    </footer>
  );
}
