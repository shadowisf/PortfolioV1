import { Fragment } from "react/jsx-runtime";
import { projectData } from "../pages/Project";

type ProjectNavProps = {
  className?: string;
  scrollToElement: (element: string) => void;
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

export default function ProjectNav({ scrollToElement }: ProjectNavProps) {
  return (
    <section id="projectNav" className="projectNav noCursor">
      {projectData.map((project, index) => (
        <span
          key={project.id}
          className={` ${index === 0 ? "active" : "scaleHover"}`}
          onClick={() => scrollToElement(project.name)}
        >
          {index === 0 ? "•" : "◦"}
        </span>
      ))}
    </section>
  );
}

export function ProjectContainer({ dataID, children }: ProjectContainerProps) {
  return (
    <Fragment>
      <section
        id={getProjectName(dataID)}
        className="container noMarginTop"
      >
        <header className="largeHeader flexCenterH">
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
