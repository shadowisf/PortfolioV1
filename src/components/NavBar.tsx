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
          className="logo noCursor dotHoverTC"
          onClick={() => generateADACompliantColors()}
        >
          les ranalan
        </a>

        <a
          className="hamburgerButtonTC noCursor dotHoverTC"
          onClick={toggleHamburgerMenu}
        >
          menu
        </a>
      </nav>

      <section className={`hamburgerMenu ${isHamburgerMenuOpen ? "open" : ""}`}>
        <span
          className="hamburgerButtonBC noCursor dotHoverBC hamburgerMobileCloseButton"
          onClick={toggleHamburgerMenu}
        >
          close
        </span>

        <a
          className="dotHoverBC noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseContainer("about");
          }}
        >
          about
        </a>
        <a
          className="dotHoverBC noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseContainer("project");
          }}
        >
          projects
        </a>
        <a
          className="dotHoverBC noCursor"
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
