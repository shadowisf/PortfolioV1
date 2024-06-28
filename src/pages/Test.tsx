import { Fragment, useState } from "react";
import { ExpandedState } from "../components/Types";
import NavBar from "../components/NavBar";
import BotCard from "../components/BottomCard";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";

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
        className={`container bigHeader topMargin ${
          expanded.about ? "active typedCollapsedAbout" : "typedAbout"
        }`}
        onClick={() => toggle("about")}
      ></header>
      <div
        className={`collapseContainer ${
          expanded.about ? "initialDelay about expanded" : ""
        }`}
      >
        <About />
      </div>

      {/* project */}
      <header
        className={`container bigHeader ${
          expanded.project ? "active typedCollapsedProject" : "typedProject"
        }`}
        onClick={() => toggle("project")}
      ></header>
      <div
        className={`collapseContainer ${
          expanded.project ? "initialDelay project expanded" : ""
        }`}
      >
        <Project />
      </div>

      {/* contact */}
      <header
        className={`container bigHeader ${
          expanded.contact ? "active typedCollapsedContact" : "typedContact"
        }`}
        onClick={() => toggle("contact")}
      ></header>
      <div
        id="contact"
        className={`collapseContainer ${
          expanded.contact ? "initialDelay contact expanded" : ""
        }`}
      >
        <Contact />
      </div>

      <BotCard />
    </Fragment>
  );
}
