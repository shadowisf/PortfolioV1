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

  return (
    <Fragment>
      <nav>
        <a
          className="toThinHover logo noCursor highlightHover"
          onClick={() => generateADACompliantColors()}
        >
          les ranalan
        </a>

        <a
          className="toThinHover hamburgerButtonTC noCursor highlightHover"
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
