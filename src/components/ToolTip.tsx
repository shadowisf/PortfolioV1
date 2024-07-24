import { useState } from "react";
import IconLetterE from "../assets/IconLetterE";
import { animationDelay } from "./NavUtils";

export default function ToolTip() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, animationDelay - 200);

  return isLoading ? (
    <></>
  ) : (
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
