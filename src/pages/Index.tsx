import { Fragment, useEffect } from "react";
import {
  useToggleStates,
  scrollToPage,
  hideDiv,
  collapseDiv,
} from "../components/NavUtils";
import { Element } from "react-scroll";
import NavBar from "../components/NavBar";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import { keyControls } from "../components/ColorUtils";
import { Background1, Background2 } from "../components/Background";
import { ProjectNav } from "../components/ProjectNav";

const Index: React.FC = () => {
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
    hideDiv("projectHeader", "projectContainer", "now");
    hideDiv("contactHeader", "contactContainer", "now");

    collapseDiv(
      "about",
      isAboutOpen,
      setAboutOpen,
      isProjectOpen,
      setProjectOpen,
      isContactOpen,
      setContactOpen
    );

    setTimeout(() => {
      keyControls();
    }, 3500);
  }, []);

  return (
    <Fragment>
      <NavBar
        collapseDiv={(element) =>
          collapseDiv(
            element,
            isAboutOpen,
            setAboutOpen,
            isProjectOpen,
            setProjectOpen,
            isContactOpen,
            setContactOpen
          )
        }
        scrollToPage={(element) => scrollToPage(element)}
      />

      <div className="backgroundContainer">
        <Background1 className="backgroundSVG" />
        <Background2 className="backgroundSVG" />
      </div>

      <ProjectNav
        className={`container projectNav ${
          isProjectOpen ? "transitionDelay show" : "hidden"
        } `}
      />

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
          collapseDiv={(element) =>
            collapseDiv(
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
    </Fragment>
  );
};

export default Index;
