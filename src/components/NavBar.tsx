import { useState } from "react";
import { generateADACompliantColors } from "./ColorUtils";
import { pixelTransition } from "./NavUtils";
import { toast, ToastContainer } from "react-toastify";

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
      <ToastContainer />
      <nav>
        <a
          className="toThinHover logo noCursor"
          onClick={() => {
            generateADACompliantColors();
            toast.dismiss({ id: "intro", containerId: "" });
          }}
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
