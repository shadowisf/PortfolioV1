import { Fragment, useRef, useState } from "react";
import { ExpandedState } from "../components/Types";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IconQuoteLeft from "../assets/IconQuoteLeft";
import IconQuoteRight from "../assets/IconQuoteRight";

const initialExpandedState: ExpandedState = {
  project: false,
  contact: false,
  about: true,
};

export default function Index() {
  const [expanded, setExpanded] = useState<ExpandedState>(initialExpandedState);

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggle = (key: keyof ExpandedState) => {
    setExpanded((prevState) =>
      Object.keys(prevState).reduce(
        (acc: { [key in keyof ExpandedState]: boolean }, currentKey) => {
          acc[currentKey as keyof ExpandedState] =
            currentKey === key ? !prevState[key] : false;
          return acc;
        },
        {} as { [key in keyof ExpandedState]: boolean }
      )
    );

    if (!expanded[key]) {
      setTimeout(() => {
        let ref: React.RefObject<HTMLDivElement> | null = null;
        let offset = 75;

        switch (key) {
          case "about":
            ref = aboutRef;
            break;
          case "project":
            ref = projectRef;
            break;
          case "contact":
            ref = contactRef;
            break;
          default:
            break;
        }

        if (ref && ref.current) {
          const element = ref.current;
          const topOffset = element.offsetTop - offset;
          element.scrollIntoView({ behavior: "smooth" });
          window.scrollTo({
            top: topOffset,
            behavior: "smooth",
          });
        }
      }, 0);
    }
  };

  return (
    <Fragment>
      <NavBar toggleExpand={toggle} />

      {/* about */}
      <header
        ref={aboutRef}
        className={`container topMargin bigHeader noCursor ${
          expanded.about ? "active typedCollapsedAbout" : "typedAbout"
        }`}
        onClick={() => toggle("about")}
      ></header>
      <section
        className={`collapseContainer ${
          expanded.about ? "transitionDelay about expanded" : ""
        }`}
      >
        <About toggleExpand={toggle}/>
      </section>

      <br />

      {/* project */}
      <header
        ref={projectRef}
        className={`container bigHeader ${
          expanded.project ? "active typedCollapsedProject" : "typedProject"
        }`}
        onClick={() => toggle("project")}
      ></header>
      <section
        className={`collapseContainer ${
          expanded.project ? "transitionDelay project expanded" : ""
        }`}
      >
        <Project />
      </section>

      <br />

      {/* contact */}
      <header
        ref={contactRef}
        className={`container bigHeader ${
          expanded.contact ? "active typedCollapsedContact" : "typedContact"
        }`}
        onClick={() => toggle("contact")}
      ></header>
      <section
        className={`bottomMargin collapseContainer ${
          expanded.contact ? "transitionDelay contact expanded" : ""
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
