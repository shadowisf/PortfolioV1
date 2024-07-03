import { Fragment, useEffect } from "react";
import mediumZoom from "medium-zoom";
import IconGithub from "../assets/IconGithub";
import IllustrationLineHorizontal from "../assets/IllustrationLineH";
import IconPDF from "../assets/IconPDF";

const Project = () => {
  useEffect(() => {
    const zoom = mediumZoom("img", { background: "var(--background-color)" });
    /* https://github.com/francoischalifour/medium-zoom */

    return () => {
      zoom.detach();
    };
  }, []);

  return (
    <Fragment>
      {/* portfolio */}

      <section className="container">
        <header className="largeHeader flexCenterH">portfolio</header>

        <text className="flexCenterH">2024</text>

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
          <a
            className="hyperLink"
            href="https://github.com/brandonmcconnell"
            target="_blank"
          >
            brandon mcconnell
          </a>
          ,{" "}
          <a
            className="hyperLink"
            href="https://github.com/francoischalifour"
            target="_blank"
          >
            françois chalifour
          </a>
          ,{" "}
          <a
            className="hyperLink"
            href="https://www.instagram.com/pablostanley/"
            target="_blank"
          >
            pablo stanley
          </a>
          ,{" "}
          <a
            className="hyperLink"
            href="https://github.com/fisshy"
            target="_blank"
          >
            joachim (fisshy)
          </a>
          , and{" "}
          <a
            className="hyperLink"
            href="https://www.linkedin.com/in/frankmyles/"
            target="_blank"
          >
            frank myles
          </a>
          .
        </p>
      </section>

      <line className="flexCenterH topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </line>

      {/* circuitcentral */}
      <section className="container bottomMargin">
        <header className="flexCenterH largeHeader">circuitcentral</header>

        <text className="flexCenterH">2024</text>

        <ul className="architecture noCursor flexCenterH">
          <li>c#</li>
          <li>windows sql server</li>
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
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconGithub />
            </picture>
            <a
              className="hyperLink withIcon"
              href="https://github.com/shadowisf/CircuitCentral"
              target="_blank"
            >
              github
            </a>
          </span>

          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconPDF />
            </picture>
            <a
              className="hyperLink withIcon"
              href="files/FileCircuitCentralProposal.PDF"
              target="_blank"
            >
              proposal report
            </a>
          </span>

          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconPDF />
            </picture>
            <a
              className="hyperLink withIcon"
              href="files/FileCircuitCentralImplementation.PDF"
              target="_blank"
            >
              implementation report
            </a>
          </span>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="files\ImageCircuitCentral1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="files\ImageCircuitCentral2.PNG"
        />
      </section>

      <line className="flexCenterH topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </line>

      {/* apollo hospital */}
      <section className="container bottomMargin">
        <header className="flexCenterH largeHeader">apollo hospital</header>

        <text className="flexCenterH">2023</text>

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
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconGithub />
            </picture>
            <a
              className="hyperLink withIcon"
              href="https://github.com/shadowisf/ApolloHospital"
              target="_blank"
            >
              github
            </a>
          </span>

          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconPDF />
            </picture>
            <a
              className="hyperLink withIcon"
              href="files/FileApolloHospital.PDF"
              target="_blank"
            >
              report
            </a>
          </span>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="files/ImageApolloHospital1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="files/ImageApolloHospital2.PNG"
        />
      </section>

      <line className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </line>

      {/* funculator */}
      <section className="container">
        <header className="flexCenterH largeHeader">funculator</header>

        <text className="flexCenterH">2022</text>

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
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconGithub />
            </picture>

            <a
              className="hyperLink withIcon"
              href="https://github.com/shadowisf/FunCulator"
              target="_blank"
            >
              github
            </a>
          </span>

          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconPDF />
            </picture>

            <a
              className="hyperLink withIcon"
              href="/files/FileFunCulator.PDF"
              target="_blank"
            >
              report
            </a>
          </span>
        </div>

        <br />

        <img className="image flexCenterH" src="files/ImageFunCulator1.PNG" />
        <br />
        <img className="image flexCenterH" src="files/ImageFunCulator2.PNG" />
        <br />
        <img className="image flexCenterH" src="files/ImageFunCulator3.PNG" />
      </section>

      <line className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </line>

      {/* bell hospital */}
      <section className="container">
        <header className="flexCenterH largeHeader">bell hospital</header>

        <text className="flexCenterH">2022</text>

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
          data management since it utilizes text files through file handling.
        </p>

        <br />

        <div className="projectLinks">
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconGithub />
            </picture>

            <a
              className="hyperLink withIcon"
              href="https://github.com/shadowisf/BellHospital"
              target="_blank"
            >
              github
            </a>
          </span>

          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconPDF />
            </picture>

            <a
              className="hyperLink withIcon"
              href="files/FileBellHospital.PDF"
              target="_blank"
            >
              report
            </a>
          </span>
        </div>

        <br />

        <img className="image flexCenterH" src="files/ImageBellHospital1.PNG" />
        <br />
        <img className="image flexCenterH" src="files/ImageBellHospital2.PNG" />
      </section>

      <line className="flexCenterH  topMargin bottomMargin">
        <IllustrationLineHorizontal width="25%" strokeDasharray="10" />
      </line>

      {/* plug-ins */}
      <section className="container">
        <header className="flexCenterH largeHeader">plug-ins</header>

        <text className="flexCenterH">2022</text>

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
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconGithub />
            </picture>

            <a
              className="hyperLink withIcon"
              href="https://github.com/shadowisf/PlugInsDatabase"
              target="_blank"
            >
              github
            </a>
          </span>

          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconPDF />
            </picture>

            <a
              className="hyperLink withIcon"
              href="files/FilePlugInsDatabase.PDF"
              target="_blank"
            >
              report
            </a>
          </span>
        </div>

        <br />

        <img
          className="image flexCenterH"
          src="files/ImagePlugInsDatabase1.PNG"
        />
        <br />
        <img
          className="image flexCenterH"
          src="files/ImagePlugInsDatabase2.PNG"
        />
      </section>

      {/*
      <section className="container">
        <header className="flexCenterH largeHeader">project name</header>

        <text className="flexCenterH">year</text>

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
};

export default Project;
