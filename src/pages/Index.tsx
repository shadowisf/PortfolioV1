import NavBar from "../components/NavBar";
import About from "./About";
import { generateTheme } from "../utils/ColorUtils";
import { PixelGrid, pixelTransition } from "../components/PixelGrid";
import { useEffect } from "react";
import Contact from "./Contact";
import Project from "./Project";
import { ToastContainer } from "react-toastify";

export default function Index() {
  useEffect(() => {
    generateTheme();
    changePage("about");
  }, []);

  const { startTransition, changePage } = pixelTransition();

  return (
    <>
      <PixelGrid />

      <ToastContainer />

      <NavBar startTransition={startTransition} />

      <About startTransition={startTransition} />

      <Project />

      <Contact />
    </>
  );
}
