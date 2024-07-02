import { Fragment, useEffect, useState } from "react";
import { scroller, Element, animateScroll } from "react-scroll";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IconQuoteLeft from "../assets/IconQuoteLeft";
import IconQuoteRight from "../assets/IconQuoteRight";
{
  /* https://github.com/fisshy/react-scroll */
}

export default function Index() {
  useEffect(() => {
    hideDiv("contactHeader", "contactContainer", "now");
    hideDiv("projectHeader", "projectContainer", "now");

    collapseDiv("about");
    animateScroll.scrollTo(0, scrollOptions);
  }, []);

  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const scrollOptions = {
    duration: 500,
    smooth: true,
    offset: -100,
    ignoreCancelEvents: false,
  };

  const animationDelay = 1100;

  const scrollTo = (element: string) => {
    if (
      (element === "about" && isAboutOpen) ||
      (element === "project" && isProjectOpen) ||
      (element === "contact" && isContactOpen)
    ) {
      setTimeout(() => {
        scroller.scrollTo(element, scrollOptions);
      }, 0);
    } else {
      animateScroll.scrollTo(0, scrollOptions);
    }
  };

  const hideDiv = (
    elementHeader: string,
    elementContainer: string,
    when?: string
  ) => {
    let divHeader = document.getElementById(elementHeader);
    let divContainer = document.getElementById(elementContainer);

    if (divHeader && divContainer && when === "delay") {
      setTimeout(() => {
        divHeader.style.display = "none";
        divContainer.style.display = "none";
        divHeader.style.opacity = "0";
        divContainer.style.opacity = "0";
      }, 1000);
    } else if (divHeader && divContainer && when === "now") {
      setTimeout(() => {
        divHeader.style.display = "none";
        divContainer.style.display = "none";
        divHeader.style.opacity = "0";
        divContainer.style.opacity = "0";
      }, 0);
    }
  };

  const showDiv = (
    elementHeader: string,
    elementContainer: string,
    when?: string
  ) => {
    let divHeader = document.getElementById(elementHeader);
    let divContainer = document.getElementById(elementContainer);

    if (divHeader && divContainer && when === "delay") {
      setTimeout(() => {
        divHeader.style.display = "block";
        divContainer.style.display = "block";
        divContainer.style.opacity = "1";
        divHeader.style.opacity = "1";
      }, 1000);
    } else if (divHeader && divContainer && when === "now") {
      setTimeout(() => {
        divHeader.style.display = "block";
        divContainer.style.display = "block";
        divContainer.style.opacity = "1";
        divHeader.style.opacity = "1";
      }, 0);
    }
  };

  const collapseDiv = (element: string) => {
    if (element === "about" && !isAboutOpen) {
      setContactOpen(false);
      setProjectOpen(false);

      showDiv("aboutHeader", "aboutContainer", "delay");
      hideDiv("contactHeader", "contactContainer", "delay");
      hideDiv("projectHeader", "projectContainer", "delay");

      setTimeout(() => {
        setAboutOpen(!isAboutOpen);
      }, animationDelay);

      scrollTo(element);
    }

    if (element === "project" && !isProjectOpen) {
      setContactOpen(false);
      setAboutOpen(false);

      showDiv("projectHeader", "projectContainer", "delay");
      hideDiv("contactHeader", "contactContainer", "delay");
      hideDiv("aboutHeader", "aboutContainer", "delay");

      setTimeout(() => {
        setProjectOpen(!isProjectOpen);
      }, animationDelay);

      scrollTo(element);
    }

    if (element === "contact" && !isContactOpen) {
      setAboutOpen(false);
      setProjectOpen(false);

      showDiv("contactHeader", "contactContainer", "delay");
      hideDiv("projectHeader", "projectContainer", "delay");
      hideDiv("aboutHeader", "aboutContainer", "delay");

      setTimeout(() => {
        setContactOpen(!isContactOpen);
      }, animationDelay);

      scrollTo(element);
    }
  };

  return (
    <Fragment>
      <NavBar collapseDiv={collapseDiv} scrollTo={scrollTo} />

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
        className={`bottomMarginHUGE collapseContainer ${
          isAboutOpen ? "transitionDelay about expanded" : ""
        }`}
      >
        <About collapseDiv={collapseDiv} />
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
        className={`bottomMarginHUGE collapseContainer ${
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
      <section className="topMargin container">
        <header className="largeHeader flexCenterH">the wall of quotes!</header>

        <br />

        <section className="vhalf quoteCard">
          <picture className="flexCenterH">
            <IllustrationOttoOctavius />
          </picture>

          <aside id="ottoText" className="gridCenterV textCenter">
            <p id="fs">
              <picture className="flexLeftH">
                <IconQuoteLeft />
              </picture>
              he told me you're <span className="mediumHeader">brilliant.</span>
              <br />
              he also told me <br /> you're{" "}
              <span className="mediumHeader">lazy.</span>
              <picture className="flexRightH">
                <IconQuoteRight />
              </picture>
            </p>

            <p id="fs" className="textCenter">
              <b className="smallHeader">otto octavius</b> <br /> (spiderman 2)
            </p>

            <p id="hs">
              <br />
              <IconQuoteLeft /> he told me you're <br />
              <span className="mediumHeader">brilliant.</span>
              <br />
              he also told me you're <br />{" "}
              <span className="mediumHeader">lazy.</span> <IconQuoteRight />
            </p>

            <p id="hs" className="textCenter">
              <br />
              <b className="smallHeader">otto octavius</b> <br /> (spiderman 2)
            </p>
          </aside>
        </section>
      </section>
      <ToolTip />
      <BottomCard />
    </Fragment>
  );
}

{
  /* 
BLACK AND WHITE PNG CONVERTER
https://onlinetools.com/image/create-two-color-image

PNG TO SVG CONVERTER
https://www.pngtosvg.com

SVG OPTIMIZATION AND COMPRESSION
https://jakearchibald.github.io/svgomg/

SVG ICONS
https://remixicon.com/
https://www.flaticon.com/
*/
}
