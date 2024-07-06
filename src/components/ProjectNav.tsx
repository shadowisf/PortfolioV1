import { projectData } from "../pages/Project";

export const ProjectNav = ({ className }: { className?: string }) => {
  return (
    <section id="projectNav" className={className}>
      <ul className="textCenter">
        <li className="active noCursor">{projectData.projectName1}</li>
        <li className="scaleHover noCursor">{projectData.projectName2}</li>
        <li className="scaleHover noCursor">{projectData.projectName3}</li>
        <li className="scaleHover noCursor">{projectData.projectName4}</li>
        <li className="scaleHover noCursor">{projectData.projectName5}</li>
        <li className="scaleHover noCursor">{projectData.projectName6}</li>
      </ul>
    </section>
  );
};
