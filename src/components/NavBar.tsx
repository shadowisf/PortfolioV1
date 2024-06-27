import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
    const calculateContrast = (foreground: string, background: string) => {
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

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "e" || event.key === "E") {
        generateADACompliantColors();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const cursorStyle = {
    cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='40' viewBox='0 -960 960 960' width='40'%3E%3Cpath d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' fill='%23var(--text-color)' /%3E%3C/svg%3E"), auto`,
  };

  return (
    <Fragment>
      <nav className="navbar">
        <Link className="logo dotHoverTC" to="/">
          les ranalan
        </Link>

        <span
          className={`${
            isOpen
              ? "hamburgerButtonBC dotHoverBC"
              : "hamburgerButtonTC dotHoverTC"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? "close" : "menu"}
        </span>
      </nav>

      <div
        style={cursorStyle}
        className={`hamburgerMenu ${isOpen ? "open" : ""}`}
      >
        <Link className="dotHoverBC" to="/about">
          about
        </Link>
        <Link className="dotHoverBC" to="/projects">
          projects
        </Link>
        <Link className="dotHoverBC" to="/contact">
          contact
        </Link>
      </div>
    </Fragment>
  );
};

export default NavBar;
