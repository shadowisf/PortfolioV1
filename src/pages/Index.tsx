import NavBar from "../components/NavBar";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import {
  generateADACompliantColors,
  keyControls,
} from "../components/ColorUtils";
import { useEffect } from "react";

export default function Index() {
  // startup sequence
  useEffect(() => {
    generateADACompliantColors();
    keyControls();
  }, []);

  return (
    <>
      <NavBar />
    

      <ToolTip />
      <BottomCard />
    </>
  );
}
