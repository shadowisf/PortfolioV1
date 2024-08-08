import { useState, useEffect } from "react";
import { generateTheme } from "../utils/ColorUtils";
import { Palette } from "./Icon";

type NavBarProps = {
  startTransition: (destination: string, delay: number) => void;
};

export default function NavBar({ startTransition: start }: NavBarProps) {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  }

  useEffect(() => {
    const scrollBarColorChangeDelay = isHamburgerMenuOpen ? 700 : 0;
    const scrollBarColor = isHamburgerMenuOpen
      ? "var(--text-color)"
      : "transparent";

    const timer = setTimeout(() => {
      document.documentElement.style.setProperty(
        "--track-scrollbar-color",
        scrollBarColor
      );
    }, scrollBarColorChangeDelay);

    return () => clearTimeout(timer);
  }, [isHamburgerMenuOpen]);

  const pixelTransitionDelay = 700;

  return (
    <>
      <nav>
        <span className="logoAndTheme">
          <a className="toThinHover noCursor" onClick={() => start("about", 0)}>
            <span id="fs">les ranalan</span>
            <span id="hs">les r.</span>
          </a>

          <a
            id="fs"
            className="themeButton flexCenterV noCursor"
            onClick={generateTheme}
          >
            <Palette />
          </a>
        </span>

        <a
          id="hs"
          className="themeButton flexCenterV noCursor"
          onClick={generateTheme}
        >
          <Palette />
        </a>

        <a
          className="toThinHover hamburgerButtonTC noCursor"
          onClick={toggleHamburger}
        >
          menu
        </a>
      </nav>

      <section className={`hamburgerMenu ${isHamburgerMenuOpen ? "open" : ""}`}>
        <span
          className="hamburgerButtonBC noCursor toThinHover hamburgerMobileCloseButton"
          onClick={toggleHamburger}
        >
          close
        </span>

        <a
          id="aboutLink"
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburger();
            start("about", pixelTransitionDelay);
          }}
        >
          about
        </a>
        <a
          id="projectLink"
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburger();
            start("project", pixelTransitionDelay);
          }}
        >
          projects
        </a>
        <a
          id="contactLink"
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburger();
            start("contact", pixelTransitionDelay);
          }}
        >
          contact
        </a>
      </section>
    </>
  );
}
