import { Fragment, useRef, useState } from "react";
import { ExpandedState } from "../components/Types";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";

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

    // Scroll only when expanding a section
    if (!expanded[key]) {
      setTimeout(() => {
        let ref: React.RefObject<HTMLDivElement> | null = null;
        let offset = 25; // Adjust offset value as needed

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
      }, 1400); // Adjust delay time as needed (500ms here)
    }
  };

  return (
    <Fragment>
      <NavBar toggleExpand={toggle} />

      {/* about */}
      <header
        ref={aboutRef}
        className={`container topMargin bigHeader ${
          expanded.about ? "active typedCollapsedAbout" : "typedAbout"
        }`}
        onClick={() => toggle("about")}
      ></header>
      <div
        className={`collapseContainer ${
          expanded.about ? "transitionDelay about expanded" : ""
        }`}
      >
        <About />
      </div>

      {/* project */}
      <header
        ref={projectRef}
        className={`container bigHeader ${
          expanded.project ? "active typedCollapsedProject" : "typedProject"
        }`}
        onClick={() => toggle("project")}
      ></header>
      <div
        className={`collapseContainer ${
          expanded.project ? "transitionDelay project expanded" : ""
        }`}
      >
        <Project />
      </div>

      {/* contact */}
      <header
        ref={contactRef}
        className={`container bigHeader ${
          expanded.contact ? "active typedCollapsedContact" : "typedContact"
        }`}
        onClick={() => toggle("contact")}
      ></header>
      <div
        className={`bottomMargin collapseContainer ${
          expanded.contact ? "transitionDelay contact expanded" : ""
        }`}
      >
        <Contact />
      </div>

      <section className="container quoteCard">
        <picture className="image flexCenterV">
          <IllustrationOttoOctavius />
        </picture>
        <text className="aboutText textCenter">
          <span>
            <span className="smallHeader">"</span>he tells me you're{" "}
            <span className="smallHeader">brilliant.</span> he also tells me
            you're <span className="smallHeader">lazy."</span>

            <br />
            <br />
            <br />

            <b>-- otto octavius</b> <br /> (spiderman 2)
          </span>
        </text>
      </section>

      <ToolTip />
      <BottomCard />
    </Fragment>
  );
}

{
  /* 
FOR MAKING TWO-TONE PNG
https://onlinetools.com/image/create-two-color-image

FOR PNG TO SVG 
https://www.pngtosvg.com

FOR SVG COMPRESSION
https://jakearchibald.github.io/svgomg/
*/
}
