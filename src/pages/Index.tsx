import { Fragment, useEffect } from "react";
import { keyControls } from "../components/ColorUtils";
import {
  useToggleStates,
  scrollTo,
  hideDiv,
  collapseDiv,
  scrollOptions,
} from "../components/NavUtils";
import { animateScroll, Element } from "react-scroll";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import WallOfQuotes from "../components/WallOfQuotes";

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

    keyControls();

    collapseDiv(
      "about",
      isAboutOpen,
      setAboutOpen,
      isProjectOpen,
      setProjectOpen,
      isContactOpen,
      setContactOpen
    );
    animateScroll.scrollTo(0, scrollOptions);
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
        className={`bottomMarginHUGE collapseContainer ${
          isContactOpen ? "transitionDelay contact expanded" : ""
        }`}
      >
        <Contact />
      </section>

      {/* wall of quotes */}
      <WallOfQuotes />

      <ToolTip />
      <BottomCard />
    </Fragment>
  );
};

export default Index;
