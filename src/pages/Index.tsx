import { Fragment, useState } from "react";
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
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const scrollOptions = {
    duration: 500,
    delay: 0,
    smooth: true,
    offset: -100,
    ignoreCancelEvents: false,
  };

  const collapseDiv = (div: string) => {
    let scrollDelay = 1500;
    let animationDelay = 2000;

    if (div === "about") {
      if (isContactOpen || isProjectOpen) {
        setContactOpen(false);
        setProjectOpen(false);

        setTimeout(() => {
          setAboutOpen(!isAboutOpen);
        }, animationDelay);
      } else {
        setAboutOpen(!isAboutOpen);
      }

      if (!isAboutOpen) {
        animateScroll.scrollTo(0);
        setTimeout(() => {
          scroller.scrollTo(div, scrollOptions);
        }, scrollDelay);
      } else {
        animateScroll.scrollTo(0);
      }
    }

    if (div === "project") {
      if (isContactOpen || isAboutOpen) {
        setContactOpen(false);
        setAboutOpen(false);

        setTimeout(() => {
          setProjectOpen(!isProjectOpen);
        }, animationDelay);
      } else {
        setProjectOpen(!isProjectOpen);
      }

      if (!isProjectOpen) {
        animateScroll.scrollTo(0);
        setTimeout(() => {
          scroller.scrollTo(div, scrollOptions);
        }, scrollDelay);
      } else {
        animateScroll.scrollTo(0);
      }
    }

    if (div === "contact") {
      if (isAboutOpen || isProjectOpen) {
        setAboutOpen(false);
        setProjectOpen(false);

        setTimeout(() => {
          setContactOpen(!isContactOpen);
        }, animationDelay);
      } else {
        setContactOpen(!isContactOpen);
      }

      if (!isContactOpen) {
        animateScroll.scrollTo(0);
        setTimeout(() => {
          scroller.scrollTo(div, scrollOptions);
        }, scrollDelay);
      } else {
        animateScroll.scrollTo(0);
      }
    }
  };

  return (
    <Fragment>
      <NavBar collapseDiv={collapseDiv} />

      {/* about */}
      <Element
        name="about"
        className={`container topMargin bigHeader noCursor ${
          isAboutOpen ? "active typedCollapsedAbout" : "typedAbout"
        }`}
        onClick={() => collapseDiv("about")}
      ></Element>
      <section
        className={`collapseContainer ${
          isAboutOpen ? "transitionDelay about expanded" : ""
        }`}
      >
        <About collapseDiv={collapseDiv} />
      </section>
      <br />

      {/* project */}
      <Element
        name="project"
        className={`container bigHeader ${
          isProjectOpen ? "active typedCollapsedProject" : "typedProject"
        }`}
        onClick={() => collapseDiv("project")}
      ></Element>
      <section
        className={`collapseContainer ${
          isProjectOpen ? "transitionDelay project expanded" : ""
        }`}
      >
        <Project />
      </section>

      <br />

      {/* contact */}
      <Element
        name="contact"
        className={`container bigHeader ${
          isContactOpen ? "active typedCollapsedContact" : "typedContact"
        }`}
        onClick={() => collapseDiv("contact")}
      ></Element>
      <section
        className={`bottomMargin collapseContainer ${
          isContactOpen ? "transitionDelay contact expanded" : ""
        }`}
      >
        <Contact />
      </section>

      <br />

      {/* otto octavius */}
      <section className="container vhalf quoteCard noCursor">
        <picture id="fs" className="flexCenterV">
          <IllustrationOttoOctavius />
        </picture>

        <picture id="hs" className="flexCenterH">
          <IllustrationOttoOctavius />
        </picture>

        <aside id="ottoText" className="gridCenterV textCenter">
          <p id="fs">
            <picture className="flexLeftH">
              <IconQuoteLeft />
            </picture>
            he told me you're <span className="smallHeader">brilliant.</span>
            <br />
            he also told me you're
            <br />
            <span className="smallHeader">lazy.</span>
            <picture className="flexRightH">
              <IconQuoteRight />
            </picture>
          </p>

          <p id="fs" className="textCenter">
            <b>-- otto octavius</b> <br /> (spiderman 2)
          </p>

          <p id="hs">
            <IconQuoteLeft /> he told me you're{" "}
            <span className="smallHeader">brilliant.</span>
            <br />
            he also told me you're <span className="smallHeader">
              lazy.
            </span>{" "}
            <IconQuoteRight />
          </p>

          <p id="hs" className="textCenter">
            <br />
            <br />
            <b>-- otto octavius</b> <br /> (spiderman 2)
          </p>
        </aside>
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
