import { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IconQuoteLeft from "../assets/IconQuoteLeft";
import IconQuoteRight from "../assets/IconQuoteRight";

export default function Index() {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const collapseDiv = (div: string) => {
    if (div === "about") {
      setAboutOpen(!isAboutOpen);
      setProjectOpen(false);
      setContactOpen(false);
    }

    if (div === "project") {
      setAboutOpen(false);
      setProjectOpen(!isProjectOpen);
      setContactOpen(false);
    }

    if (div === "contact") {
      setAboutOpen(false);
      setProjectOpen(false);
      setContactOpen(!isContactOpen);
    }
  };

  return (
    <Fragment>
      <NavBar collapseDiv={collapseDiv} />

      {/* about */}
      <header
        className={`container topMargin bigHeader noCursor ${
          isAboutOpen ? "active typedCollapsedAbout" : "typedAbout"
        }`}
        onClick={() => collapseDiv("about")}
      ></header>
      <section
        className={`collapseContainer ${
          isAboutOpen ? "transitionDelay about expanded" : ""
        }`}
      >
        <About collapseDiv={collapseDiv} />
      </section>

      <br />

      {/* project */}
      <header
        className={`container bigHeader ${
          isProjectOpen ? "active typedCollapsedProject" : "typedProject"
        }`}
        onClick={() => collapseDiv("project")}
      ></header>
      <section
        className={`collapseContainer ${
          isProjectOpen ? "transitionDelay project expanded" : ""
        }`}
      >
        <Project />
      </section>

      <br />

      {/* contact */}
      <header
        className={`container bigHeader ${
          isContactOpen ? "active typedCollapsedContact" : "typedContact"
        }`}
        onClick={() => collapseDiv("contact")}
      ></header>
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
