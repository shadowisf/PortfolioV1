import { Fragment } from "react/jsx-runtime";
import { projectData } from "../pages/Project";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const slidePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const slideNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slideTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return {
    emblaRef,
    emblaApi,
    slidePrev,
    slideNext,
    slideTo,
  };
};

export default function ProjectNav({
  slideTo,
  slideNext,
  slidePrev,
  activeIndex,
}: ProjectNavProps) {
  return (
    <section id="projectNav" className="projectNav noCursor flexCenterV">
      <span className="scaleHover flexCenterV" onClick={slidePrev}>
        ← previous
      </span>

      <span className="flexCenterV">
        {projectData.map((project, index) => (
          <span
            key={project.id}
            className={index === activeIndex ? "active" : "scaleHover"}
            onClick={() => slideTo(index)}
            style={{ fontSize: "xxx-large" }}
          >
            {index === activeIndex ? "•" : "◦"}
          </span>
        ))}
      </span>

      <span className="scaleHover flexCenterV" onClick={slideNext}>
        next →
      </span>
    </section>
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
