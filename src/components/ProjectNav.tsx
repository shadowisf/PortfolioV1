import { projectData } from "../pages/Project";

type ProjectNavProps = {
  className?: string;
  scrollToElement: (element: string) => void;
};

const ProjectNav: React.FC<ProjectNavProps> = ({
  className,
  scrollToElement: scrollTo,
}) => {
  return (
    <section id="projectNav" className={className}>
      <ul className="textCenter">
        {projectData.map((project, index) => (
          <li
            key={project.id}
            className={`scaleHover noCursor ${index === 0 ? "active" : ""}`}
            onClick={() => scrollTo(project.name)}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectNav;
