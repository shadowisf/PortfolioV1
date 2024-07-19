import {
  useToggleStates,
  collapseContainer,
  changeContainerVisibility,
} from "../components/NavUtils";
import { Element } from "react-scroll";
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

      {/* <div className="backgroundContainer">
        <Background1 className="backgroundSVG" />
        <Background2 className="backgroundSVG" />
      </div> */}

      {/* about */}
      <Element
        id="aboutHeader"
        name="about"
        className={`container topMargin noCursor divHeader ${
          isAboutOpen ? "active typedCollapsedAbout" : "typedEmpty"
        }`}
      ></Element>
      <section
        id="aboutContainer"
        className={`collapseContainer ${
          isAboutOpen ? "transitionDelay about expanded" : ""
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
      <Element
        id="projectHeader"
        name="project"
        className={`container topMargin noCursor divHeader ${
          isProjectOpen ? "active typedCollapsedProject" : "typedEmpty"
        }`}
      ></Element>
      <section
        id="projectContainer"
        className={`collapseContainer ${
          isProjectOpen ? "transitionDelay project expanded" : ""
        }`}
      >
        <Project />
      </section>

      {/* contact */}
      <Element
        id="contactHeader"
        name="contact"
        className={`container topMargin noCursor divHeader ${
          isContactOpen ? "active typedCollapsedContact" : "typedEmpty"
        }`}
      ></Element>
      <section
        id="contactContainer"
        className={`collapseContainer ${
          isContactOpen ? "transitionDelay contact expanded" : ""
        }`}
      >
        <Contact />
      </section>

      <ToolTip />
      <BottomCard />
    </>
  );
}
