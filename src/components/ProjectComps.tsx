import { Fragment } from "react/jsx-runtime";
import { projectData } from "../pages/Project";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { scrollToElement } from "./NavUtils";

type ProjectNavProps = {
  slideTo: (index: number) => void;
  slideNext: () => void;
  slidePrev: () => void;
  activeIndex: number;
};

type ProjectContainerProps = {
  dataID: number;
  children: React.ReactNode;
};

type ProjectCardProps = {
  img?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

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

export const useEmblaStuff = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    watchDrag: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = useCallback(() => {
    if (emblaApi && activeIndex != 0) {
      const newIndex =
        (activeIndex - 1 + projectData.length) % projectData.length;
      setActiveIndex(newIndex);
      emblaApi.scrollPrev();
    }
  }, [emblaApi, activeIndex]);

  const slideNext = useCallback(() => {
    if (emblaApi && activeIndex != projectData.length - 1) {
      const newIndex = (activeIndex + 1) % projectData.length;
      setActiveIndex(newIndex);
      emblaApi.scrollNext();
    }
  }, [emblaApi, activeIndex]);

  const slideTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        setActiveIndex(index);
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, activeIndex]
  );

  return {
    emblaRef,
    emblaApi,
    slidePrev,
    slideNext,
    slideTo,
    activeIndex,
    setActiveIndex,
  };
};

export default function ProjectNav({
  slideTo,
  slideNext,
  slidePrev,
  activeIndex,
}: ProjectNavProps) {
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");
  const maxIndex = projectData.length - 1;

  if (activeIndex === 0) {
    backButton?.classList.add("disabled");
  } else {
    backButton?.classList.remove("disabled");
  }

  if (activeIndex === maxIndex) {
    nextButton?.classList.add("disabled");
  } else {
    nextButton?.classList.remove("disabled");
  }

  slideTo(activeIndex);

  return (
    <section className="projectNav noCursor">
      <span
        className="toThinHover flexCenterH"
        id="backButton"
        onClick={slidePrev}
      >
        <b>← back</b>
      </span>

      <span
        className="flexCenterV"
        style={{ gap: "10px", fontFamily: "var(--primary-font)" }}
      >
        {projectData.map((project, index) => (
          <span
            className={
              index === activeIndex
                ? "flexCenterV projectNavCircle active"
                : "flexCenterV projectNavCircle"
            }
            key={project.id}
            onClick={() => slideTo(index)}
            title={project.name}
          >
            {index === activeIndex ? "◉" : "○"}
          </span>
        ))}
      </span>

      <span
        className="toThinHover flexCenterH"
        id="nextButton"
        onClick={slideNext}
      >
        <b>next →</b>
      </span>
    </section>
  );
}

export function ProjectContainer({ dataID, children }: ProjectContainerProps) {
  return (
    <Fragment>
      <section
        id={getProjectName(dataID)}
        className="embla__slide"
        style={{ paddingLeft: "0.85px" }}
      >
        {/* <div id="hs" className="textCenter">
          <header className="scaleText">{getProjectName(dataID)}</header>
        </div> */}

        <header
          style={{ fontSize: "8vw" }}
          id="hs"
          className="largeHeader textCenter"
        >
          {getProjectName(dataID)}
        </header>
        <header id="fs" className="largeHeader flexCenterH">
          {getProjectName(dataID)}
        </header>

        <span className="flexCenterH">{getProjectYear(dataID)}</span>

        <ul className="architecture noCursor flexCenterH">
          {getProjectArchitecture(dataID).map((arch, index) => (
            <li key={index}>{arch}</li>
          ))}
        </ul>

        {children}

        <footer
          style={{ marginTop: "100px", textAlign: "center" }}
          className="flexCenterH"
        >
          <span className="toThinHover" onClick={() => scrollToElement("top")}>
            ↑ <br /> back to top
          </span>
        </footer>

        <br />
        <br />
        <br />
      </section>
    </Fragment>
  );
}

export function ProjectCard({ img, children, onClick }: ProjectCardProps) {
  return (
    <div className="card toThinHover" onClick={onClick}>
      <img className="logo" src={img} />
      <header className=" title">{children}</header>
    </div>
  );
}
