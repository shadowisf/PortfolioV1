import { Fragment, useEffect } from "react";
import {
  useToggleStates,
  scrollTo,
  hideDiv,
  collapseDiv,
  scrollOptions,
} from "../components/NavUtils";
import { animateScroll, Element } from "react-scroll";
import NavBar from "../components/NavBar";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import WallOfQuotes from "../components/WallOfQuotes";
import { keyControls } from "../components/ColorUtils";

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

    //animateScroll.scrollTo(0, scrollOptions);
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
        scrollTo={(element) =>
          scrollTo(element, isAboutOpen, isProjectOpen, isContactOpen)
        }
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

      {/* wall of quotes */}

      <ToolTip />
      <BottomCard />
    </Fragment>
  );
};

export default Index;
