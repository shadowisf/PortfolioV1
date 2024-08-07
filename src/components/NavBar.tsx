import { useState } from "react";
import { generateTheme } from "./ColorUtils";
import { Palette } from "./Icon";

type NavBarProps = {
  startTransition: (container: string, delay: number) => void;
};

export default function NavBar({ startTransition: start }: NavBarProps) {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const scrollBarColorChangeDelay = 700;
  const pixelTransitionDelay = 700;

  if (isHamburgerMenuOpen) {
    setTimeout(() => {
      document.documentElement.style.setProperty(
        "--track-scrollbar-color",
        "var(--text-color)"
      );
    }, scrollBarColorChangeDelay);
  } else {
    setTimeout(() => {
      document.documentElement.style.setProperty(
        "--track-scrollbar-color",
        "transparent"
      );
    }, 0);
  }

  return (
    <>
      <nav>
        <span className="logoAndTheme">
          <a
            id="aboutLink"
            className="toThinHover noCursor"
            onClick={() => start("about", 0)}
          >
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
          onClick={toggleHamburgerMenu}
        >
          menu
        </a>
      </nav>

      <section className={`hamburgerMenu ${isHamburgerMenuOpen ? "open" : ""}`}>
        <span
          className="hamburgerButtonBC noCursor toThinHover hamburgerMobileCloseButton"
          onClick={toggleHamburgerMenu}
        >
          close
        </span>

        <a
          id="aboutLink"
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            start("about", pixelTransitionDelay);
          }}
        >
          about
        </a>
        <a
          id="projectLink"
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            start("project", pixelTransitionDelay);
          }}
        >
          projects
        </a>
        <a
          id="contactLink"
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            start("contact", pixelTransitionDelay);
          }}
        >
          contact
        </a>
      </section>
    </>
  );
}
