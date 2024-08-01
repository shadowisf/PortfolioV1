import NavBar from "../components/NavBar";
import About from "./About";
import ToolTip from "../components/ToolTip";
import {
  generateADACompliantColors,
  colorControls,
} from "../components/ColorUtils";
import { useEffect } from "react";
import Project from "./Project";
import Contact from "./Contact";
import { PixelGrid, setActiveContainer } from "../components/NavUtils";
import { toastIntro } from "../components/Toasts";

export default function Index() {
  useEffect(() => {
    generateADACompliantColors();
    colorControls();
    setActiveContainer("about");
    toastIntro("click my name above to generate a new theme!");
  }, []);

  return (
    <>
      <NavBar />

      <PixelGrid />

      <About />
      <Project />
      <Contact />

      <ToolTip />
    </>
  );
}
