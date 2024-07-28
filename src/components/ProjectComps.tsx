import React, { useState } from "react";
import { projectData } from "../pages/Project";
import { animateScroll } from "react-scroll";

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

  const scrollOptions = {
    duration: 500,
    smooth: true,
    offset: -100,
    ignoreCancelEvents: true,
  };

  animateScroll.scrollTo(0, scrollOptions);

  dataKeyElements?.forEach((element) => {
    const dataKey = element.getAttribute("data-key");
    const titleElement = element.querySelector(".title");
    const logoElement = element.querySelector(".logo");
    const contentElement = element.querySelector(".content");

    // selected box
    if (dataKey === number.toString()) {
      element.classList.remove("hidden");
      element.classList.add("active");
      titleElement?.classList.add("active");
      element.classList.remove("cardHover");
      element.classList.remove("toThinHover");
      logoElement?.classList.add("hidden");

      contentElement?.classList.remove("none");

      cardContainers?.forEach((element) => {
        element.classList.add("noGap");
      });

      setTimeout(() => {
        contentElement?.classList.remove("hidden");
      }, 1000);
    }
    // other boxes
    else if (dataKey !== number.toString()) {
      element.classList.add("hidden");
    }
  });
}

export function resetProject() {
  const dataKeyElements = document.querySelectorAll(".card");
  dataKeyElements?.forEach((element) => {
    element.classList.remove("active");
    element.classList.remove("hidden");
    element.classList.add("cardHover");
    element.classList.add("toThinHover");
  });
}

type ProjectCardProps = {
  img?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  dataKey?: number;
  dataID?: number;
  title?: string;
};

export function ProjectCard({
  img,
  children,
  onClick,
  dataKey,
  dataID,
}: ProjectCardProps) {
  const validDataID = dataID ?? 0;

  return (
    <div
      data-key={dataKey}
      className="cardHover card toThinHover"
      onClick={onClick}
    >
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

        <span className="toThinHover">go back</span>
      </section>
    </div>
  );
}
