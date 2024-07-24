import { useState } from "react";
import { animationDelay, scrollToElement } from "./NavUtils";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, animationDelay - 200);

  scrollToElement("top");

  return isLoading ? (
    <section className="loadingScreen textCenter">
      <span className="largeHeader typedLoading"></span>
    </section>
  ) : (
    <></>
  );
}
