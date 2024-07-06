import { Fragment, useEffect } from "react";
import mediumZoom from "medium-zoom";
import IconGithub from "../assets/IconGithub";
import IllustrationLineHorizontal from "../assets/IllustrationLineH";
import IconPDF from "../assets/IconPDF";
import { HyperLink, HyperLinkWithIcon } from "../components/HyperLink";
import { ProjectNav } from "../components/ProjectNav";

export const projectData = {
  projectName1: "portfolio",
  projectName2: "circuitcentral",
  projectName3: "apollo hospital",
  projectName4: "funculator",
  projectName5: "bell hospital",
  projectName6: "plug-ins",
};

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
      {/* portfolio */}
      <section className="container">
        <header className="largeHeader flexCenterH">
          {projectData.projectName1}
        </header>

        <span className="flexCenterH">2024</span>

        <ul className="architecture noCursor flexCenterH">
          <li>typescript (react)</li>
          <li>html</li>
          <li>css</li>
          <li>sass</li>
          <li>ui/ux</li>
        </ul>

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
      </section>

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* circuitcentral */}
      <section className="container bottomMargin">
        <header className="flexCenterH largeHeader">
          {projectData.projectName2}
        </header>

        <span className="flexCenterH">2024</span>

        <ul className="architecture noCursor flexCenterH">
          <li>c#</li>
          <li>microsoft sql server</li>
          <li>windows forms</li>
          <li>ui/ux</li>
          <li>crud</li>
        </ul>

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
      </section>

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* apollo hospital */}
      <section className="container bottomMargin">
        <header className="flexCenterH largeHeader">
          {projectData.projectName3}
        </header>

        <span className="flexCenterH">2023</span>

        <ul className="architecture noCursor flexCenterH">
          <li>python (flask)</li>
          <li>xampp</li>
          <li>html (django)</li>
          <li>css (bootstrap)</li>
          <li>javascript</li>
          <li>ui/ux</li>
          <li>crud</li>
        </ul>

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
      </section>

      <span className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* funculator */}
      <section className="container">
        <header className="flexCenterH largeHeader">
          {projectData.projectName4}
        </header>

        <span className="flexCenterH">2022</span>

        <ul className="architecture noCursor flexCenterH">
          <li>java</li>
          <li>swing</li>
          <li>ui/ux</li>
        </ul>

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
      </section>

      <span className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* bell hospital */}
      <section className="container">
        <header className="flexCenterH largeHeader">
          {projectData.projectName5}
        </header>

        <span className="flexCenterH">2022</span>

        <ul className="architecture noCursor flexCenterH">
          <li>java</li>
          <li>file handling</li>
          <li>cli</li>
        </ul>

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
      </section>

      <span className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </span>

      {/* plug-ins */}
      <section className="container">
        <header className="flexCenterH largeHeader">
          {projectData.projectName6}
        </header>

        <span className="flexCenterH">2022</span>

        <ul className="architecture noCursor flexCenterH">
          <li>php</li>
          <li>html</li>
          <li>xampp</li>
        </ul>

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
      </section>

      {/*
      <section className="container">
        <header className="flexCenterH largeHeader">project name</header>

        <span className="flexCenterH">year</span>

        <ul className="architecture noCursor flexCenterH">
          <li></li>
        </ul>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
          eum doloremque id architecto ullam quis iure animi sunt totam. Rerum
          quis, temporibus beatae ea illum amet? Laborum, iste earum.
        </p>

        <br />

        <div className="projectLinks">
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconGithub />
            </picture>

            <a className="hyperLink withIcon" href="" target="_blank">
              github
            </a>
          </span>

          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconPDF />
            </picture>

            <a className="hyperLink withIcon" href="" target="_blank">
              report
            </a>
          </span>
        </div>

        <br />

        <img src="" />
      </section>
      */}
    </Fragment>
  );
}
