import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
  collapseDiv: (element: string) => void;
  scrollTo: (element: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({ collapseDiv, scrollTo }) => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [isBordersExist, setBordersExist] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getLuminance = (color: string) => {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;
    const sRGB = [r, g, b].map((channel) =>
      channel <= 0.03928
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4)
    );
    return sRGB[0] * 0.2126 + sRGB[1] * 0.7152 + sRGB[2] * 0.0722;
  };

  const calculateContrastRatio = (
    foregroundColor: string,
    backgroundColor: string
  ) => {
    const calculateContrast = (foreground: any, background: any) => {
      const l1 = getLuminance(foreground);
      const l2 = getLuminance(background);
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    };

    return calculateContrast(foregroundColor, backgroundColor);
  };

  const generateADACompliantColors = () => {
    let bgColor, textColor;
    do {
      bgColor = getRandomColor();
      textColor = getRandomColor();
    } while (
      calculateContrastRatio(textColor, bgColor) < 7 || // AAA for normal text
      calculateContrastRatio(textColor, bgColor) < 4.5 || // AA for large text
      calculateContrastRatio(bgColor, textColor) < 7 // Ensure AAA-level contrast for both combinations
    );

    // Set text color variable
    document.documentElement.style.setProperty("--text-color", textColor);

    // Set background color variable
    document.documentElement.style.setProperty("--background-color", bgColor);
  };

  document.addEventListener("keydown", function (event) {
    // generate theme
    if (event.key === "E" || event.key === "e") {
      generateADACompliantColors();
    }

    // reset theme
    if (event.key === "R" || event.key === "r") {
      document.documentElement.style.setProperty("--text-color", "black");

      document.documentElement.style.setProperty(
        "--background-color",
        "antiquewhite"
      );
    }

    // mass borders
    if (event.key === "T" || event.key === "t") {
      if (!isBordersExist) {
        document.documentElement.style.setProperty("--border", "solid");
        setBordersExist(true);
      } else {
        document.documentElement.style.setProperty("--border", "none");
        setBordersExist(false);
      }
    }

    // unbind keys
    if (event.key === "Tab" || event.key === " ") {
      event.preventDefault();
    }
  });

  return (
    <Fragment>
      <nav id="navNormal">
        <Link className="logo noCursor dotHoverTC" to="/">
          les ranalan
        </Link>

        <span
          className="hamburgerButtonTC noCursor dotHoverTC"
          onClick={toggleHamburgerMenu}
        >
          menu
        </span>
      </nav>

      <Link id="navFixed" className="logo noCursor noNav dotHoverTC" to="/">
        les ranalan
      </Link>

      <span
        id="navFixed"
        className="hamburgerButtonTC noCursor noNav dotHoverTC"
        onClick={toggleHamburgerMenu}
      >
        menu
      </span>

      <div className={`hamburgerMenu ${isHamburgerMenuOpen ? "open" : ""}`}>
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
            collapseDiv("about");
            scrollTo("about");
          }}
        >
          about
        </a>
        <a
          className="dotHoverBC noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseDiv("project");
            scrollTo("project");
          }}
        >
          projects
        </a>
        <a
          className="dotHoverBC noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseDiv("contact");
            scrollTo("contact");
          }}
        >
          contact
        </a>
      </div>
    </Fragment>
  );
};

export default NavBar;
