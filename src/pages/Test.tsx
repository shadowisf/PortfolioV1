import CircuitCentralLogo from "../assets/ImageCircuitCentralLogo.PNG";
import FunCulatorLogo from "../assets/ImageFunCulatorLogo.PNG";
import { ProjectCard } from "../components/ProjectComps";

export default function Test() {
  return (
    <>
      <div className="projectCards">
        <ProjectCard img={CircuitCentralLogo}>circuitcentral</ProjectCard>

        <ProjectCard img={FunCulatorLogo}>funculator</ProjectCard>

        <div className="card toThinHover">funculator</div>

        <div className="card toThinHover">bell hospital</div>

        <div className="card toThinHover">plug-ins database</div>

        <div className="card toThinHover">portfolio</div>

        <div className="card toThinHover">apollo hospital</div>
      </div>
    </>
  );
}
