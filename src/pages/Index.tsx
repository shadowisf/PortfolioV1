import {
  useToggleStates,
  collapseContainer,
  changeContainerVisibility,
  animationDelay,
} from "../components/NavUtils";
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
import LoadingScreen from "../components/LoadingScreen";

export default function Index() {
  const {
    isAboutOpen,
    setAboutOpen,
    isProjectOpen,
    setProjectOpen,
    isContactOpen,
    setContactOpen,
  } = useToggleStates();

  // startup sequence
  useEffect(() => {
    generateADACompliantColors();

    changeContainerVisibility("project", "none", "0", 0);
    changeContainerVisibility("contact", "none", "0", 0);

    collapseContainer(
      "about",
      isAboutOpen,
      setAboutOpen,
      isProjectOpen,
      setProjectOpen,
      isContactOpen,
      setProjectOpen
    );

    setTimeout(() => {
      keyControls();
      document.documentElement.style.setProperty("--scroll-overflow", "scroll");
      document.documentElement.style.setProperty("--all-position", "auto");
      document.documentElement.style.setProperty("--all-height", "auto");
      document.documentElement.style.setProperty("--all-width", "auto");
    }, animationDelay);
  }, []);

  return (
    <>
      <LoadingScreen />

      <NavBar
        collapseContainer={(element) =>
          collapseContainer(
            element,
            isAboutOpen,
            setAboutOpen,
            isProjectOpen,
            setProjectOpen,
            isContactOpen,
            setContactOpen
          )
        }
      />

      {/* about */}
      <section
        id="aboutHeader"
        className={`container topMargin noCursor divHeader ${
          isAboutOpen ? "typedCollapsedAbout" : "deletedCollapsedAbout"
        }`}
      ></section>
      <section
        id="aboutContainer"
        className={`dashedBorderBottom collapseContainer ${
          isAboutOpen ? "transitionDelayAfter about expanded" : ""
        }`}
      >
        <About
          collapseContainer={(element) =>
            collapseContainer(
              element,
              isAboutOpen,
              setAboutOpen,
              isProjectOpen,
              setProjectOpen,
              isContactOpen,
              setContactOpen
            )
          }
        />
      </section>

      {/* project */}
      <section
        id="projectHeader"
        className={`container topMargin noCursor divHeader ${
          isProjectOpen ? "typedCollapsedProject" : "deletedCollapsedProject"
        }`}
      ></section>
      <section
        id="projectContainer"
        className={`dashedBorderBottom collapseContainer ${
          isProjectOpen ? "transitionDelayAfter project expanded" : ""
        }`}
      >
        <Project />
      </section>

      {/* contact */}
      <section
        id="contactHeader"
        className={`container topMargin noCursor divHeader ${
          isContactOpen ? "typedCollapsedContact" : "deletedCollapsedContact"
        }`}
      ></section>
      <section
        id="contactContainer"
        className={`dashedBorderBottom collapseContainer ${
          isContactOpen ? "transitionDelayAfter contact expanded" : ""
        }`}
      >
        <Contact />
      </section>

      <ToolTip />
      <BottomCard />
    </>
  );
}
