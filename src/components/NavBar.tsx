import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import IconColor from "../assets/IconColor";
import IconHamburger from "../assets/IconHamburger";
import IconClose from "../assets/IconClose";

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

  return (
    <Fragment>
      <nav className="navbar">
        <label className="logo">
          <Link to="/">lpr.</Link>
        </label>

        <button className="colorButton" onClick={generateADACompliantColors}>
          <IconColor />
          <span>change theme.</span>
        </button>

        <ul className="navlink">
          <li>
            <Link to="/work">work.</Link>
          </li>
          <li>
            <Link to="/contact">contact.</Link>
          </li>
          <li>
            <Link to="/about">about.</Link>
          </li>
        </ul>

        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <IconClose /> : <IconHamburger />}
        </button>
      </nav>

      <div className={`hamburgerMenu ${isOpen ? "open" : ""}`}>
        <ul className="hamburgerNavlink">
          <li>
            <Link to="/work">work.</Link>
          </li>
          <li>
            <Link to="/contact">contact.</Link>
          </li>
          <li>
            <Link to="/about">about.</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default NavBar;
