import NavBar from "../components/NavBar";
import About from "./About";
import { generateTheme } from "../utils/ColorUtils";
import { useEffect } from "react";
import {
  changePage,
  PixelGrid,
  pixelTransition,
} from "../components/PixelGrid";
import React, { Suspense } from "react";

const Project = React.lazy(() => import("./Project"));
const Contact = React.lazy(() => import("./Contact"));

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

      <Suspense fallback={<div>loading...</div>}>
        <Project />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
        <Contact />
      </Suspense>
    </>
  );
}
