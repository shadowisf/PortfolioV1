import { Fragment } from "react/jsx-runtime";
import { projectData } from "../pages/Project";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { isElementOfType } from "react-dom/test-utils";

type ProjectNavProps = {
  className?: string;
  scrollTo: (int: number) => void;
};

type ProjectContainerProps = {
  dataID: number;
  children: React.ReactNode;
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
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return {
    emblaRef,
    emblaApi,
    scrollPrev,
    scrollNext,
    scrollTo,
  };
};

export default function ProjectNav({ scrollTo }: ProjectNavProps) {
  return (
    <>
      <section id="projectNav" className="projectNav noCursor">
        {projectData.map((project, index) => (
          <span
            key={project.id}
            className={` ${index === 0 ? "active" : "scaleHover"}`}
            onClick={() => scrollTo(index)}
          >
            {index === 0 ? "•" : "◦"}
          </span>
        ))}
      </section>
    </>
  );
}

export function ProjectContainer({ dataID, children }: ProjectContainerProps) {
  return (
    <Fragment>
      <section
        id={getProjectName(dataID)}
        className="container noMarginTop embla_slide"
      >
        <div
          id="hs"
          className="container noMarginTop noMarginBottom textCenter"
        >
          <header className="scaleText">{getProjectName(dataID)}</header>
        </div>
        <header id="fs" className="largeHeader flexCenterH">
          {getProjectName(dataID)}
        </header>

        <span className="flexCenterH">{getProjectYear(dataID)}</span>

        <ul className="architecture noCursor flexCenterH">
          {getProjectArchitecture(dataID).map((arch, index) => (
            <li key={index}>{arch}</li>
          ))}
        </ul>

        <p>{children}</p>
      </section>
    </Fragment>
  );
}
