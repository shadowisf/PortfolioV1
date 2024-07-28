import { useState } from "react";
import { generateADACompliantColors } from "./ColorUtils";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const scrollBarColorChangeDelay = 700;

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
        <a
          className="toThinHover logo noCursor"
          onClick={() => generateADACompliantColors()}
        >
          les ranalan
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

        <Link
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
          }}
          to="/about"
        >
          about
        </Link>
        <Link
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
          }}
          to="/project"
        >
          projects
        </Link>
        <Link
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
          }}
          to="/contact"
        >
          contact
        </Link>
      </section>
    </>
  );
}
