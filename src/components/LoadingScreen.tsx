import { useState } from "react";
import { animationDelay, scrollToElement } from "./NavUtils";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, animationDelay);

  scrollToElement("top");

  return isLoading ? (
    <>
      <div className="noMarginTop loadingScreen textCenter">
        <span className="typedLoading"></span>
      </div>
    </>
  ) : (
    <></>
  );
}
