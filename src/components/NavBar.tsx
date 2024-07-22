import { Fragment, useState } from "react";
import { generateADACompliantColors } from "./ColorUtils";

type NavBarProps = {
  collapseContainer: (element: string) => void;
};

export default function NavBar({ collapseContainer }: NavBarProps) {
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
    <Fragment>
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

        <a
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseContainer("about");
          }}
        >
          about
        </a>
        <a
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseContainer("project");
          }}
        >
          projects
        </a>
        <a
          className="toThinHover noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseContainer("contact");
          }}
        >
          contact
        </a>
      </section>
    </Fragment>
  );
}
