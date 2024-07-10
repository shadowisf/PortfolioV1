import { Fragment, useEffect } from "react";
import mediumZoom from "medium-zoom";
import IconGithub from "../assets/IconGithub";
import IllustrationLineHorizontal from "../assets/IllustrationLineH";
import IconPDF from "../assets/IconPDF";
import { HyperLink, HyperLinkWithIcon } from "../components/HyperLink";
import { Element } from "react-scroll";
import ProjectNav, { ProjectContainer } from "../components/ProjectComps";
import { scrollToElement } from "../components/NavUtils";

export const projectData = [
  {
    id: 1,
    name: "portfolio",
    year: "2024",
    architecture: ["typescript (react)", "html", "css", "sass", "ui/ux"],
  },
  {
    id: 2,
    name: "circuitcentral",
    year: "2024",
    architecture: [
      "c#",
      "microsoft sql server",
      "windows forms",
      "ui/ux",
      "crud",
    ],
  },
  {
    id: 3,
    name: "apollo hospital",
    year: "2023",
    architecture: [
      "python (flask)",
      "xampp",
      "html (django)",
      "css (bootstrap)",
      "javascript",
      "ui/ux",
      "crud",
    ],
  },
  {
    id: 4,
    name: "funculator",
    year: "2022",
    architecture: ["java", "swing", "ui/ux"],
  },
  {
    id: 5,
    name: "bell hospital",
    year: "2022",
    architecture: ["java", "file handling", "cli"],
  },
  {
    id: 6,
    name: "plug-ins",
    year: "2022",
    architecture: ["php", "html", "xampp"],
  },
];

export default function Project() {
  useEffect(() => {
    const zoom = mediumZoom("img", { background: "var(--background-color)" });
    // https://github.com/francoischalifour/medium-zoom

    return () => {
      zoom.detach();
    };
  }, []);

  return (
    <Fragment>
      <ProjectNav scrollToElement={scrollToElement} className="noMarginTop" />

      {/* portfolio */}
      <ProjectContainer dataID={1}>
        <p>
          this portfolio website showcases all things me;{" "}
          <u>my projects, research, and life history!</u> by creating this
          portfolio, i was able to fully learn and understand how html, css, and
          react are all implemented as a baseline for web development.
          <br />
          <br />
          <b>fun fact:</b> this entire portfolio is made out of vanilla css; no
          tailwind, no bootstrap, no foundation, just pure vanilla! (with some
          exceptions of course).
          <br />
          <br />
          <b>attributions:</b>{" "}
          <HyperLink href="https://github.com/brandonmcconnell">
            brandon mcconnell
          </HyperLink>
          {", "}
          <HyperLink href="https://github.com/francoischalifour">
            françois chalifour
          </HyperLink>
          {", "}
          <HyperLink href="https://www.instagram.com/pablostanley/">
            pablo stanley
          </HyperLink>
          {", "}
          <HyperLink href="https://awik.io">andreas wilk</HyperLink>
          {", "}
          <HyperLink href="https://github.com/fisshy">
            joachim (fisshy)
          </HyperLink>
          {", "}
          <HyperLink href="https://www.linkedin.com/in/frankmyles/">
            frank myles
          </HyperLink>
          {"."}
        </p>
      </ProjectContainer>

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* circuitcentral */}
      <ProjectContainer dataID={2}>
        <p>
          circuitcentral is an <u>e-commerce management system</u> that covers
          ordering products, viewing product catalogs, handling customer, staff,
          and supplier information, etc. its system features fundamental crud
          operations: create, read, update, and delete. additionally, it
          features search filtering on all records, error handling of all user
          events, input validation, and a login system for two user types.
        </p>

        <br />

        <div className="projectLinks">
          <HyperLinkWithIcon
            img={<IconGithub />}
            href="https://github.com/shadowisf/CircuitCentral"
          >
            github
          </HyperLinkWithIcon>

          <HyperLinkWithIcon
            img={<IconPDF />}
            href="src/assets/FileCircuitCentralProposal.PDF"
          >
            proposal report
          </HyperLinkWithIcon>

          <HyperLinkWithIcon
            img={<IconPDF />}
            href="src/assets/FileCircuitCentralImplementation.PDF"
          >
            implementation report
          </HyperLinkWithIcon>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="src/assets/ImageCircuitCentral1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="src/assets/ImageCircuitCentral2.PNG"
        />
      </ProjectContainer>

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* apollo hospital */}
      <ProjectContainer dataID={3}>
        <p>
          apollo hospital is a <u>hospital management system</u> that covers
          handling patient and doctor information, scheduling appointments with
          patients, manage patient's prescription and payables, etc. similarly
          to circuitcentral, its system features fundamental crud operations:
          create, read, update, delete. as well as a login system, error
          handling, input validation, and search filtering of patient records.
        </p>

        <br />

        <div className="projectLinks">
          <HyperLinkWithIcon
            img={<IconGithub />}
            href="https://github.com/shadowisf/ApolloHospital"
          >
            github
          </HyperLinkWithIcon>

          <HyperLinkWithIcon
            img={<IconPDF />}
            href="src/assets/FileApolloHospital.PDF"
          >
            report
          </HyperLinkWithIcon>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="src/assets/ImageApolloHospital1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="src/assets/ImageApolloHospital2.PNG"
        />
      </ProjectContainer>

      <span className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* funculator */}
      <ProjectContainer dataID={4}>
        <p>
          funculator is an <u>all-in-one calculator application</u> for
          students. its system features a login system and a menu that shows all
          possible maethematical operations a student needs; arithmetics,
          fibonacci sequences, area of different shapes, etc. the design
          aesthetic for this project was heavily inspired by vibrant pixel art
          and sprites.
        </p>

        <br />

        <div className="projectLinks">
          <HyperLinkWithIcon
            img={<IconGithub />}
            href="https://github.com/shadowisf/FunCulator"
          >
            github
          </HyperLinkWithIcon>

          <HyperLinkWithIcon
            img={<IconPDF />}
            href="/src/assets/FileFunCulator.PDF"
          >
            report
          </HyperLinkWithIcon>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="src/assets/ImageFunCulator1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="src/assets/ImageFunCulator2.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="src/assets/ImageFunCulator3.PNG"
        />
      </ProjectContainer>

      <span className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* bell hospital */}
      <ProjectContainer dataID={5}>
        <p>
          bell hospital is a <u>hospital management system</u> that is intended
          to be used with a command line interface (cli), with coverage to
          handling patient and doctor information, appointment scheduling, and
          medical records. its system feature crud operations: create, read,
          update, and delete. additionally, it has error handling and persistent
          data management since it utilizes span files through file handling.
        </p>

        <br />

        <div className="projectLinks">
          <HyperLinkWithIcon
            img={<IconGithub />}
            href="https://github.com/shadowisf/BellHospital"
          >
            github
          </HyperLinkWithIcon>

          <HyperLinkWithIcon
            img={<IconPDF />}
            href="src/assets/FileBellHospital.PDF"
          >
            report
          </HyperLinkWithIcon>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="src/assets/ImageBellHospital1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="src/assets/ImageBellHospital2.PNG"
        />
      </ProjectContainer>

      <span className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* plug-ins */}

      <ProjectContainer dataID={6}>
        <p>
          plug-ins is a fictitious (not real) company that required a database
          solution that utilizes forms. its system covers insertion of customer,
          product, and order information into a database. through that, search
          and display queries can be performed.
        </p>

        <br />

        <div className="projectLinks">
          <HyperLinkWithIcon
            img={<IconGithub />}
            href="https://github.com/shadowisf/PlugInsDatabase"
          >
            github
          </HyperLinkWithIcon>

          <HyperLinkWithIcon
            img={<IconPDF />}
            href="src/assets/FilePlugInsDatabase.PDF"
          >
            report
          </HyperLinkWithIcon>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="src/assets/ImagePlugInsDatabase1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="src/assets/ImagePlugInsDatabase2.PNG"
        />
      </ProjectContainer>
    </Fragment>
  );
}
