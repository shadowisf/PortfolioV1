import {
  useToggleStates,
  collapseContainer,
  changeContainerVisibility,
} from "../components/NavUtils";
import NavBar from "../components/NavBar";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import { keyControls } from "../components/ColorUtils";
import { useEffect } from "react";

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
    }, 3500);
  }, []);

  return (
    <>
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

      {/*       <div className="backgroundContainer">
        <Background1 className="backgroundSVG" />
        <Background2 className="backgroundSVG" />
      </div> */}

      {/* about */}
      <section
        id="aboutHeader"
        className={`container topMargin noCursor divHeader ${
          isAboutOpen
            ? "typedCollapsedAbout"
            : "transitionDelayAfter deletedCollapsedAbout"
        }`}
      ></section>
      <section
        id="aboutContainer"
        className={`dashedBorderBottom collapseContainer ${
          isAboutOpen
            ? "transitionDelayAfter about expanded"
            : ""
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
          isProjectOpen
            ? "typedCollapsedProject"
            : "transitionDelayAfter deletedCollapsedProject"
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
          isContactOpen
            ? "typedCollapsedContact"
            : "transitionDelayAfter deletedCollapsedContact"
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
