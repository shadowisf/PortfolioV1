import React, { useState } from "react";
import { projectData } from "../pages/Project";

function getProjectName(id: number) {
  const project = projectData.find((project) => project.id === id);
  return project?.name ?? "?";
}

function getProjectYear(id: number) {
  const project = projectData.find((project) => project.id === id);
  return project?.year ?? "?";
}

function getProjectArchitecture(id: number) {
  const project = projectData.find((project) => project.id === id);
  return project?.architecture ?? [];
}

export function toggleProject(number: number) {
  const dataKeyElements = document.querySelectorAll("div[data-key]");
  const cardContainers = document.querySelectorAll(".projectCards");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  dataKeyElements?.forEach((element) => {
    const dataKey = element.getAttribute("data-key");
    const titleElement = element.querySelector(".title");
    const logoElement = element.querySelector(".logo");
    const contentElement = element.querySelector(".content");

    // selected box
    if (dataKey === number.toString()) {
      element.classList.remove("slowTransition");
      element.classList.remove("hidden");
      element.classList.add("active");
      titleElement?.classList.add("active");
      element.classList.remove("cardHover");
      element.classList.remove("toThinHover");
      logoElement?.classList.add("hidden");

      cardContainers?.forEach((element) => {
        element.classList.add("noGap");
      });

      setTimeout(() => {
        contentElement?.classList.remove("none");
      }, 900);

      setTimeout(() => {
        contentElement?.classList.remove("hidden");
      }, 1000);
    }
    // other boxes
    else if (dataKey !== number.toString()) {
      element.classList.add("hidden");
      element.classList.remove("slowTransition");
    }
  });
}

export function resetProject(delay: number) {
  const dataKeyElements = document.querySelectorAll("div[data-key]");

  const cardContainers = document.querySelectorAll(".projectCards");

  dataKeyElements?.forEach((element) => {
    const titleElement = element.querySelector(".title");
    const logoElement = element.querySelector(".logo");
    const contentElement = element.querySelector(".content");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      contentElement?.classList.add("hidden");
    }, delay / 2);

    setTimeout(() => {
      element.classList.add("slowTransition");

      element.classList.remove("active");
      element.classList.remove("hidden");
      element.classList.add("cardHover");
      element.classList.add("toThinHover");

      titleElement?.classList.remove("active");
      logoElement?.classList.remove("hidden");

      cardContainers?.forEach((element) => {
        element.classList.remove("noGap");
      });

      contentElement?.classList.add("none");
    }, delay);
  });
}

type ProjectCardProps = {
  img?: string;
  children?: React.ReactNode;
  dataID?: number;
};

export function ProjectCard({ img, children, dataID }: ProjectCardProps) {
  const validDataID = dataID ?? -1;
  const [isSelected, setSelected] = useState(false);

  function toggleSelected() {
    setSelected(!isSelected);
  }

  return (
    <div
      data-key={validDataID}
      className="cardHover card toThinHover"
      onClick={
        isSelected
          ? () => {}
          : () => {
              toggleProject(validDataID);
              toggleSelected();
            }
      }
    >
      <span
        id="backButton"
        className="toThinHover textCenter backButton noCursor"
        onClick={() => {
          toggleSelected();
          resetProject(0);
        }}
        style={
          isSelected
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
      >
        ← back to menu
      </span>

      <img className="logo" src={img} />

      <header className="title">
        {getProjectName(validDataID)} <br />
        <span className="year">{getProjectYear(validDataID)}</span>
      </header>

      <section className="content hidden none">
        <ul className="architecture noCursor flexCenterH">
          {getProjectArchitecture(validDataID).map((arch, index) => (
            <li key={index}>{arch}</li>
          ))}
        </ul>

        {children}

        <span style={{marginTop: "5rem"}}
          className="toThinHover flexCenterH textCenter noCursor"
          onClick={() => {
            resetProject(500);
            toggleSelected();
          }}
        >
          ↑ <br />
          back to menu
        </span>
      </section>
    </div>
  );
}
