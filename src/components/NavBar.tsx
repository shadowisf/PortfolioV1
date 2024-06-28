import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExpandedState } from "./Types";

type NavBarProps = {
  toggleExpand: (key: keyof ExpandedState) => void;
};

const NavBar: React.FC<NavBarProps> = ({ toggleExpand }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

  const getCursorSvg = () => {
    const backgroundColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--background-color")
      .trim();
    const cursorSvg = `
      <svg xmlns='http://www.w3.org/2000/svg' height='40' viewBox='0 -960 960 960' width='40' fill='${backgroundColor}'>
        <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
      </svg>`;
    return `url("data:image/svg+xml;base64,${btoa(cursorSvg)}"), auto`;
  };

  const updateCursorStyle = () => {
    document.body.style.cursor = getCursorSvg();
  };

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "e" || event.key === "E") {
        generateADACompliantColors();
        if (isOpen) {
          updateCursorStyle();
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      updateCursorStyle();
    } else {
      document.body.style.cursor = "auto";
    }
  }, [isOpen]);

  return (
    <Fragment>
      <nav className="navbar">
        <Link className="logo dotHoverTC" to="/">
          les ranalan
        </Link>

        <span className="hamburgerButtonTC dotHoverTC" onClick={toggleMenu}>
          menu
        </span>
      </nav>

      <div
        className={`hamburgerMenu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span
          id="hs"
          className="hamburgerButtonBC dotHoverBC hamburgerMobileCloseButton"
          onClick={toggleMenu}
        >
          close
        </span>
        <a
          className="dotHoverBC"
          onClick={() => {
            toggleMenu();
            toggleExpand("about");
          }}
        >
          about
        </a>
        <a
          className="dotHoverBC"
          onClick={() => {
            toggleMenu();
            toggleExpand("project");
          }}
        >
          projects
        </a>
        <a
          className="dotHoverBC"
          onClick={() => {
            toggleMenu();
            toggleExpand("contact");
          }}
        >
          contact
        </a>
      </div>
    </Fragment>
  );
};

export default NavBar;
