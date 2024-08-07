import { ProjectCard } from "../components/ProjectUtils";
import { HyperLinkWithIcon } from "../components/Link";
import mediumZoom from "medium-zoom";
import { useEffect } from "react";
//
import { Github, PDF, LinkedIn } from "../components/Icon";
import CLILogo from "../assets/ImageCLILogo.PNG";
//
import PortfolioImage1 from "../assets/ImagePortfolio1.PNG";
import PortfolioImage2 from "../assets/ImagePortfolio2.PNG";
import PortfolioLogo from "../assets/ImagePortfolioLogo.PNG";
//
import CircuitCentralProposalPDF from "../assets/FileCircuitCentralProposal.PDF";
import CircuitCentralImplementationPDF from "../assets/FileCircuitCentralImplementation.PDF";
import CircuitCentralImage1 from "../assets/ImageCircuitCentral1.PNG";
import CircuitCentralImage2 from "../assets/ImageCircuitCentral2.PNG";
import CircuitCentralLogo from "../assets/ImageCircuitCentralLogo.PNG";
//
import ApolloHospitalPDF from "../assets/FileApolloHospital.PDF";
import ApolloHospitalProjectDocumentationPDF from "../assets/FileApolloHospitalProjectDocumentation.PDF";
import ApolloHospitalImage1 from "../assets/ImageApolloHospital1.PNG";
import ApolloHospitalImage2 from "../assets/ImageApolloHospital2.PNG";
import ApolloHospitalLogo from "../assets/ImageApolloHospitalLogo.PNG";
//
import FunCulatorPDF from "../assets/FileFunCulator.PDF";
import FunCulatorImage1 from "../assets/ImageFunCulator1.PNG";
import FunCulatorImage2 from "../assets/ImageFunCulator2.PNG";
import FunCulatorImage3 from "../assets/ImageFunCulator3.PNG";
import FunCulatorLogo from "../assets/ImageFunCulatorLogo.PNG";
//
import BellHospitalPDF from "../assets/FileBellHospital.PDF";
import BellHospitalImage1 from "../assets/ImageBellHospital1.PNG";
import BellHospitalImage2 from "../assets/ImageBellHospital2.PNG";
//
import PlugInsPDF from "../assets/FilePlugInsDatabase.PDF";
import PlugInsImage1 from "../assets/ImagePlugInsDatabase1.PNG";
import PlugInsImage2 from "../assets/ImagePlugInsDatabase2.PNG";
//
export const projectData = [
  {
    id: 0,
    name: "portfolio",
    year: "2024",
    architecture: [
      "typescript (react)",
      "html",
      "scss",
      "firebase",
      "git",
      "ui/ux",
    ],
  },
  {
    id: 1,
    name: "circuitcentral",
    year: "2024",
    architecture: [
      "c#",
      "windows forms",
      "microsoft sql server",
      "git",
      "ui/ux",
      "crud",
    ],
  },
  {
    id: 2,
    name: "apollo hospital",
    year: "2023",
    architecture: [
      "python (flask, django)",
      "html",
      "css (bootstrap)",
      "xampp",
      "ui/ux",
      "crud",
    ],
  },
  {
    id: 3,
    name: "funculator",
    year: "2022",
    architecture: ["java", "swing", "ui/ux"],
  },
  {
    id: 4,
    name: "bell hospital",
    year: "2022",
    architecture: ["java", "cli", "file handling", "crud"],
  },
  {
    id: 5,
    name: "plug-ins database",
    year: "2022",
    architecture: ["php", "html", "css", "xampp", "crud"],
  },
];

export default function Project() {
  useEffect(() => {
    const zoom = mediumZoom(".image", {
      background: "var(--background-color)",
    });
    // https://github.com/francoischalifour/medium-zoom

    return () => {
      zoom.detach();
    };
  }, []);

  return (
    <main id="project" className="container topMargin bottomMargin">
      <section className="projectCards noMarginBottom">
        {/* portfolio */}
        <ProjectCard dataID={0} img={PortfolioLogo}>
          <div>
            <p>
              this portfolio website showcases all things me;{" "}
              <u>my projects, research, and life history!</u> by creating this
              portfolio, i was able to fully learn and understand how html, css,
              and javascript/typescript are all implemented as a baseline for
              web development.
              <br />
              <br />
              <b>my role:</b> this was a solo project. every tech stack was
              implemented by me.
            </p>
          </div>

          <br />
          <br />

          <b>attributions:</b>
          <div className="projectLinks">
            {/* typedcss */}
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/brandonmcconnell"
              alt={true}
            >
              brandon mcconnell
            </HyperLinkWithIcon>

            {/* react-toastify */}
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/fkhadra"
              alt={true}
            >
              fadi khadra
            </HyperLinkWithIcon>

            {/* medium zoom */}
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/francoischalifour"
              alt={true}
            >
              françois chalifour
            </HyperLinkWithIcon>

            {/* theme engine */}
            <HyperLinkWithIcon
              img={<LinkedIn />}
              href="https://www.linkedin.com/in/frankmyles/"
              alt={true}
            >
              frank myles
            </HyperLinkWithIcon>

            {/* gsap */}
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/jackdoyle"
              alt={true}
            >
              jack doyle
            </HyperLinkWithIcon>

            {/* remix icons */}
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/xiaochunjimmy"
              alt={true}
            >
              zhang xiaochun
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img className="image" src={PortfolioImage1}></img>
            <img className="image" src={PortfolioImage2}></img>
          </div>
        </ProjectCard>

        {/* circuitcentral */}
        <ProjectCard dataID={1} img={CircuitCentralLogo}>
          <div>
            <p>
              circuitcentral is an <u>e-commerce management system</u> that
              covers ordering products, viewing product catalogs, handling
              customer, staff, and supplier information, etc. its system
              features fundamental crud operations: create, read, update, and
              delete. additionally, it features search filtering on all records,
              error handling of all user events, input validation, and a login
              system for two user types.
              <br />
              <br />
              <b>my role:</b> this was a solo project. every tech stack was
              implemented by me.
            </p>
          </div>

          <br />

          <div className="projectLinks">
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/shadowisf/CircuitCentral"
              alt={true}
            >
              repository
            </HyperLinkWithIcon>

            <HyperLinkWithIcon
              img={<PDF />}
              href={CircuitCentralProposalPDF}
              alt={true}
            >
              proposal report
            </HyperLinkWithIcon>

            <HyperLinkWithIcon
              img={<PDF />}
              href={CircuitCentralImplementationPDF}
              alt={true}
            >
              implementation report
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img className="image" src={CircuitCentralImage1} />
            <img className="image" src={CircuitCentralImage2} />
          </div>
        </ProjectCard>
      </section>
      <section
        style={{ marginTop: "1rem" }}
        className="projectCards noMarginBottom"
      >
        {/* apollo hospital */}
        <ProjectCard dataID={2} img={ApolloHospitalLogo}>
          <div>
            <p>
              apollo hospital is a <u>hospital management system</u> that covers
              handling patient and doctor information, scheduling appointments
              with patients, manage patient's prescription and payables, etc.
              similarly to circuitcentral, its system features fundamental crud
              operations: create, read, update, delete. as well as a login
              system, error handling, input validation, and search filtering of
              patient records.
              <br />
              <br />
              <b>my role:</b> this was a group project. i designed and
              implemented the front-end: overall theme, buttons, navbar, modals,
              home page, user pages, etc. additionally, i implemented half of
              the back-end: database schema, error handling, callouts, etc.
            </p>
          </div>

          <br />

          <div className="projectLinks">
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/shadowisf/ApolloHospital"
              alt={true}
            >
              repository
            </HyperLinkWithIcon>

            <HyperLinkWithIcon
              img={<PDF />}
              href={ApolloHospitalPDF}
              alt={true}
            >
              report
            </HyperLinkWithIcon>

            <HyperLinkWithIcon
              img={<PDF />}
              href={ApolloHospitalProjectDocumentationPDF}
              alt={true}
            >
              project documentation
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img className="image" src={ApolloHospitalImage1} />
            <img className="image" src={ApolloHospitalImage2} />
          </div>
        </ProjectCard>

        {/* funculator */}
        <ProjectCard dataID={3} img={FunCulatorLogo}>
          <div>
            <p>
              funculator is an <u>all-in-one calculator application</u> for
              students. its system features a login system and a menu that shows
              all possible maethematical operations a student needs;
              arithmetics, fibonacci sequences, area of different shapes, etc.
              the design aesthetic for this project was heavily inspired by
              vibrant pixel art and sprites.
              <br />
              <br />
              <b>my role:</b> this was a group project. i designed and
              implemented the front-end; the general theme, buttons, menu,
              calculator avatar, etc. additionally, i implemented half of the
              back-end; factorial, fibonacci, average, min & max.
            </p>
          </div>

          <br />

          <div className="projectLinks">
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/shadowisf/FunCulator"
              alt={true}
            >
              repository
            </HyperLinkWithIcon>

            <HyperLinkWithIcon
              img={<PDF />}
              href={FunCulatorPDF}
              alt={true}
            >
              report
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img className="image" src={FunCulatorImage1} />
            <img className="image" src={FunCulatorImage2} />
            <img className="image" src={FunCulatorImage3} />
          </div>
        </ProjectCard>
      </section>
      <section
        style={{ marginTop: "1rem" }}
        className="projectCards noMarginBottom"
      >
        {/* bell hospital */}
        <ProjectCard dataID={4} img={CLILogo}>
          <div>
            <p>
              bell hospital is a <u>hospital management system</u> that is
              intended to be used with a command line interface (cli), with
              coverage to handling patient and doctor information, appointment
              scheduling, and medical records. its system feature crud
              operations: create, read, update, and delete. additionally, it has
              error handling and persistent data management since it utilizes
              span files through file handling.
              <br />
              <br />
              <b>my role:</b> this was a solo project. every tech stack was
              implemented by me.
            </p>
          </div>

          <br />

          <div className="projectLinks">
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/shadowisf/BellHospital"
              alt={true}
            >
              repository
            </HyperLinkWithIcon>

            <HyperLinkWithIcon
              img={<PDF />}
              href={BellHospitalPDF}
              alt={true}
            >
              report
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img className="image" src={BellHospitalImage1} />
            <img className="image" src={BellHospitalImage2} />
          </div>
        </ProjectCard>

        {/* plug-ins database */}
        <ProjectCard dataID={5} img={CLILogo}>
          <div>
            <p>
              plug-ins is a fictitious (not real) company that required a
              database solution that utilizes forms. its system covers insertion
              of customer, product, and order information into a database.
              through that, search and display queries can be performed.
              <br />
              <br />
              <b>my role:</b> this was a solo project. every tech stack was
              implemented by me.
            </p>
          </div>

          <br />

          <div className="projectLinks">
            <HyperLinkWithIcon
              img={<Github />}
              href="https://github.com/shadowisf/PlugInsDatabase"
              alt={true}
            >
              repository
            </HyperLinkWithIcon>

            <HyperLinkWithIcon img={<PDF />} href={PlugInsPDF} alt={true}>
              report
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img className="image" src={PlugInsImage1} />
            <img className="image" src={PlugInsImage2} />
          </div>
        </ProjectCard>
      </section>
    </main>
  );
}
