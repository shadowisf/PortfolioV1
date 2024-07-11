import { useEffect } from "react";
import mediumZoom from "medium-zoom";
import IconGithub from "../assets/IconGithub";
import IconPDF from "../assets/IconPDF";
import { HyperLink, HyperLinkWithIcon } from "../components/HyperLink";
import ProjectNav, {
  ProjectContainer,
  useEmblaStuff,
} from "../components/ProjectComps";

export const projectData = [
  {
    id: 0,
    name: "portfolio",
    year: "2024",
    architecture: ["typescript (react)", "html", "css", "sass", "ui/ux"],
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: "funculator",
    year: "2022",
    architecture: ["java", "swing", "ui/ux"],
  },
  {
    id: 4,
    name: "bell hospital",
    year: "2022",
    architecture: ["java", "file handling", "cli"],
  },
  {
    id: 5,
    name: "plug-ins",
    year: "2022",
    architecture: ["php", "html", "xampp"],
  },
  {
    id: 6,
    name: "test",
    year: "69",
    architecture: ["ur", "mom"],
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

  const { emblaRef, slidePrev, slideNext, slideTo, activeIndex } =
    useEmblaStuff();

  return (
    <>
      <ProjectNav
        slideTo={slideTo}
        slideNext={slideNext}
        slidePrev={slidePrev}
        activeIndex={activeIndex}
      />

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {/* portfolio */}
          <ProjectContainer dataID={0}>
            <p>
              this portfolio website showcases all things me;{" "}
              <u>my projects, research, and life history!</u> by creating this
              portfolio, i was able to fully learn and understand how html, css,
              and react are all implemented as a baseline for web development.
              <br />
              <br />
              <b>fun fact:</b> this entire portfolio website is made with little
              to no libraries or frameworks! that means features are built
              manually; just pure vanilla!
              <br />
              <br />
              <b>attributions:</b>{" "}
              <HyperLink href="https://github.com/brandonmcconnell">
                {/* typedcss */}
                brandon mcconnell
              </HyperLink>
              {", "}
              <HyperLink href="https://github.com/francoischalifour">
                {/* medium zoom */}
                françois chalifour
              </HyperLink>
              {", "}
              <HyperLink href="https://www.instagram.com/pablostanley/">
                {/* avatar illustration */}
                pablo stanley
              </HyperLink>
              {", "}
              <HyperLink href="https://awik.io">
                {/* color theory */}
                andreas wilk
              </HyperLink>
              {", "}
              <HyperLink href="https://github.com/fisshy">
                {/* react-scroll */}
                joachim (fisshy)
              </HyperLink>
              {", "}
              <HyperLink href="https://davidwalsh.name">
                {/* scaleText */}
                david walsh
              </HyperLink>
              {", "}
              <HyperLink href="https://github.com/davidjerleke">
                {/* scaleText */}
                david jerleke
              </HyperLink>
              {", "}
              <HyperLink href="https://www.linkedin.com/in/frankmyles/">
                {/* theme engine */}
                frank myles
              </HyperLink>
              {"."}
            </p>
          </ProjectContainer>

          {/* circuitcentral */}
          <ProjectContainer dataID={1}>
            <p>
              circuitcentral is an <u>e-commerce management system</u> that
              covers ordering products, viewing product catalogs, handling
              customer, staff, and supplier information, etc. its system
              features fundamental crud operations: create, read, update, and
              delete. additionally, it features search filtering on all records,
              error handling of all user events, input validation, and a login
              system for two user types.
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

          {/* apollo hospital */}
          <ProjectContainer dataID={2}>
            <p>
              apollo hospital is a <u>hospital management system</u> that covers
              handling patient and doctor information, scheduling appointments
              with patients, manage patient's prescription and payables, etc.
              similarly to circuitcentral, its system features fundamental crud
              operations: create, read, update, delete. as well as a login
              system, error handling, input validation, and search filtering of
              patient records.
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

          {/* funculator */}
          <ProjectContainer dataID={3}>
            <p>
              funculator is an <u>all-in-one calculator application</u> for
              students. its system features a login system and a menu that shows
              all possible maethematical operations a student needs;
              arithmetics, fibonacci sequences, area of different shapes, etc.
              the design aesthetic for this project was heavily inspired by
              vibrant pixel art and sprites.
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

          {/* bell hospital */}
          <ProjectContainer dataID={4}>
            <p>
              bell hospital is a <u>hospital management system</u> that is
              intended to be used with a command line interface (cli), with
              coverage to handling patient and doctor information, appointment
              scheduling, and medical records. its system feature crud
              operations: create, read, update, and delete. additionally, it has
              error handling and persistent data management since it utilizes
              span files through file handling.
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

          {/* plug-ins */}
          <ProjectContainer dataID={5}>
            <p>
              plug-ins is a fictitious (not real) company that required a
              database solution that utilizes forms. its system covers insertion
              of customer, product, and order information into a database.
              through that, search and display queries can be performed.
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

          {/* test */}
          <ProjectContainer dataID={6}>
            <p>LOL</p>
          </ProjectContainer>
        </div>
      </div>
    </>
  );
}
