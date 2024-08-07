import NavBar from "../components/NavBar";
import About from "./About";
import { generateTheme } from "../components/ColorUtils";
import { useEffect } from "react";
import Project from "./Project";
import Contact from "./Contact";
import { PixelGrid, pixelTransition, changePage } from "../components/NavUtils";

export default function Index() {
  useEffect(() => {
    generateTheme();
    changePage("about");
  }, []);

  const { startTransition } = pixelTransition();

  return (
    <>
      <PixelGrid />

      <NavBar startTransition={startTransition} />

      <About startTransition={startTransition} />
      <Project />
      <Contact />
    </>
  );
}
