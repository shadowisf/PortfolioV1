import { useState } from "react";
import { generateADACompliantColors } from "./ColorUtils";
import { pixelTransition } from "./NavUtils";
import { Palette } from "./Icon";

export default function NavBar() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const { start } = pixelTransition();

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
          <a className="toThinHover noCursor" onClick={() => start("about", 0)}>
            <span id="fs">les ranalan</span>
            <span id="hs">les r.</span>
          </a>

          <a
            id="fs"
            className="themeButton flexCenterV noCursor"
            onClick={generateADACompliantColors}
          >
            <Palette />
          </a>
        </span>

        <a
          id="hs"
          className="themeButton flexCenterV noCursor"
          onClick={generateADACompliantColors}
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
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            start("about", pixelTransitionDelay);
          }}
        >
          about
        </a>
        <a
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            start("project", pixelTransitionDelay);
          }}
        >
          projects
        </a>
        <a
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
