import { ProjectCard } from "../components/ProjectCard";
import { HyperLinkWithIcon } from "../components/Link";
import mediumZoom from "medium-zoom";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
//
import { Github, PDF, LinkedIn } from "../components/Icon";
import CLILogo from "../assets/ImageCLILogo.webp";
//
import PortfolioImage1 from "../assets/ImagePortfolio1.webp";
import PortfolioImage2 from "../assets/ImagePortfolio2.webp";
import PortfolioLogo from "../assets/ImagePortfolioLogo.webp";
//
import CircuitCentralProposalPDF from "../assets/FileCircuitCentralProposal.PDF";
import CircuitCentralImplementationPDF from "../assets/FileCircuitCentralImplementation.PDF";
import CircuitCentralImage1 from "../assets/ImageCircuitCentral1.webp";
import CircuitCentralImage2 from "../assets/ImageCircuitCentral2.webp";
import CircuitCentralLogo from "../assets/ImageCircuitCentralLogo.webp";
//
import ApolloHospitalPDF from "../assets/FileApolloHospital.PDF";
import ApolloHospitalProjectDocumentationPDF from "../assets/FileApolloHospitalProjectDocumentation.PDF";
import ApolloHospitalImage1 from "../assets/ImageApolloHospital1.webp";
import ApolloHospitalImage2 from "../assets/ImageApolloHospital2.webp";
import ApolloHospitalLogo from "../assets/ImageApolloHospitalLogo.webp";
//
import FunCulatorPDF from "../assets/FileFunCulator.PDF";
import FunCulatorImage1 from "../assets/ImageFunCulator1.webp";
import FunCulatorImage2 from "../assets/ImageFunCulator2.webp";
import FunCulatorImage3 from "../assets/ImageFunCulator3.webp";
import FunCulatorLogo from "../assets/ImageFunCulatorLogo.webp";
//
import BellHospitalPDF from "../assets/FileBellHospital.PDF";
import BellHospitalImage1 from "../assets/ImageBellHospital1.webp";
import BellHospitalImage2 from "../assets/ImageBellHospital2.webp";
//
import PlugInsPDF from "../assets/FilePlugInsDatabase.PDF";
import PlugInsImage1 from "../assets/ImagePlugInsDatabase1.webp";
import PlugInsImage2 from "../assets/ImagePlugInsDatabase2.webp";
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

gsap.registerPlugin(gsap, useGSAP);

export default function Project() {
  useGSAP(() => {
    gsap.set("#about", { display: "none" });
  });

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
        <ProjectCard
          dataID={0}
          img={PortfolioLogo}
          imgAlt="a cartoon illustration of me that is under the portfolio project card."
        >
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
            <img
              alt="image of the about section in my portfolio project. it has a cartoon illustration of me and and text introducing myself."
              loading="lazy"
              className="image"
              src={PortfolioImage1}
            ></img>
            <img
              alt="image of the project section in my portfolio project. it is currently viewing the circuitcentral project, displaying a short description and its tech stack. additionally, there's links to its github repository and technical report."
              loading="lazy"
              className="image"
              src={PortfolioImage2}
            ></img>
          </div>
        </ProjectCard>

        {/* circuitcentral */}
        <ProjectCard
          dataID={1}
          img={CircuitCentralLogo}
          imgAlt="image of the circuitcentral logo; it is similar to the signal lines found on most circuit boards. it has a purple, light blue, and white color scheme. the image is used as the background of the circuitcentral project card."
        >
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
            <img
              alt="first image of the circuitcentral project; it is viewing the products section wherein it is displaying a list of tech products that a user can add to their cart. additionally, the ui has buttons for CRUD operations."
              loading="lazy"
              className="image"
              src={CircuitCentralImage1}
            />
            <img
              alt="second image of the circuitcentral project; it is viewing the orders section wherein it displays a list of products that are currently in a cart. additionally, the ui has buttons for CRUD operations."
              loading="lazy"
              className="image"
              src={CircuitCentralImage2}
            />
          </div>
        </ProjectCard>
      </section>
      <section className="projectCards noMarginBottom">
        {/* apollo hospital */}
        <ProjectCard
          dataID={2}
          img={ApolloHospitalLogo}
          imgAlt="illustration of a doctor treating a patient. it has a mostly blue color scheme. the illustration is used as the background for the apollo hospital project card."
        >
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
            <img
              alt="first image of the apollo hospital project; it is viewing the home page wherein it displays an illustration of a doctor treating its patient, with the title of the website whch is apollo hospital."
              loading="lazy"
              className="image"
              src={ApolloHospitalImage1}
            />
            <img
              alt="second image of the apollo hospital project; it is viewing the patient records section wherein it displays the list of patient information. additionally, the ui has buttons for CRUD operations."
              loading="lazy"
              className="image"
              src={ApolloHospitalImage2}
            />
          </div>
        </ProjectCard>

        {/* funculator */}
        <ProjectCard
          dataID={3}
          img={FunCulatorLogo}
          imgAlt="illustration of a calculator with a face in pixel art form. it has a purple color scheme. the illustration is used as the background for the funculator project card."
        >
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

            <HyperLinkWithIcon img={<PDF />} href={FunCulatorPDF} alt={true}>
              report
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img
              alt="first image of the funculator project. it is currently viewing the index page where it is displaying a calculator with a face in pixel art form. additionally, there is buttons for start and exit on the right."
              loading="lazy"
              className="image"
              src={FunCulatorImage1}
            />
            <img
              alt="second image of the funculator project. it is currently viewing the menu section where it is displaying all of the possible operations such as factorial, min&max, fibonacci, etc."
              loading="lazy"
              className="image"
              src={FunCulatorImage2}
            />
            <img
              alt="third image of the funculator project. it is currently viewing the factorial section where it is displaying input fields for a number and the result. additionally, the ui has buttons for solving the factorial."
              loading="lazy"
              className="image"
              src={FunCulatorImage3}
            />
          </div>
        </ProjectCard>
      </section>
      <section className="projectCards noMarginBottom">
        {/* bell hospital */}
        <ProjectCard
          dataID={4}
          img={CLILogo}
          imgAlt="image of three differently colored boxes that is stacked on each other. it is used as the background for the bell hospital project card."
        >
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

            <HyperLinkWithIcon img={<PDF />} href={BellHospitalPDF} alt={true}>
              report
            </HyperLinkWithIcon>
          </div>

          <br />

          <div className="imageContainer">
            <img
              alt="first image of the bell hospital project. it is currently viewing the starting page (note that this is a CLI project) where it is displaying all of the possible sections such as patients, doctors, appointments, etc."
              loading="lazy"
              className="image"
              src={BellHospitalImage1}
            />
            <img
              alt="second image of the bell hospital project. it is currently viewing the patients records section where it is displaying all patient information (note that this is a CLI project). additionally, there are commands for CRUD operations."
              loading="lazy"
              className="image"
              src={BellHospitalImage2}
            />
          </div>
        </ProjectCard>

        {/* plug-ins database */}
        <ProjectCard
          dataID={5}
          img={CLILogo}
          imgAlt="image of three differently colored boxes that is stacked on each other. it is used as the background for the bell hospital project card."
        >
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
            <img
              alt="first image of the plug-ins project. it is currently viewing the index customer page where it is displaying input fields for basic customer information such as name, contact number, address, etc. additionally, it has buttons for inserting the customer information into the database."
              loading="lazy"
              className="image"
              src={PlugInsImage1}
            />
            <img
              alt="second image of the plug-ins project. it is currently viewing the products page where it is displaying the list of products and their respective information such as price, category, stock quantity, etc."
              loading="lazy"
              className="image"
              src={PlugInsImage2}
            />
          </div>
        </ProjectCard>
      </section>
    </main>
  );
}
