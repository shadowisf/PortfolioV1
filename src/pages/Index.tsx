import { Fragment, useState } from "react";
import { ExpandedState } from "../components/Types";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";

export default function Index() {
  const [expanded, setExpanded] = useState<ExpandedState>({
    project: false,
    contact: false,
    about: true,
  });

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
  };

  return (
    <Fragment>
      <NavBar toggleExpand={toggle} />

      {/* about */}
      <header
        className={`container topMargin bigHeader ${
          expanded.about ? "active typedCollapsedAbout" : " typedAbout"
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
        className={`container bigHeader ${
          expanded.project
            ? "active typedCollapsedProject"
            : "typedProject"
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
        className={`container bigHeader ${
          expanded.contact
            ? "active typedCollapsedContact"
            : "typedContact"
        }`}
        onClick={() => toggle("contact")}
      ></header>
      <div
        id="contact"
        className={`collapseContainer bottomMargin ${
          expanded.contact ? "transitionDelay contact expanded" : ""
        }`}
      >
        <Contact />
      </div>

      <ToolTip />
      <BottomCard />
    </Fragment>
  );
}
