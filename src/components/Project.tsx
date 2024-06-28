import { Fragment, useEffect } from "react";
import mediumZoom from "medium-zoom";
import IconGithub from "../assets/IconGithub";
import IllustrationHorizontalLine from "../assets/IllustrationHorizontalLine";

export default function Project() {
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
      <section className="container bottomMargin">
        <header className="smallHeader flexCenterH">portfolio</header>

        <div className="flexCenterH">2024</div>

        <ul className="architecture flexCenterH">
          <li>react javascript</li>
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
          , and{" "}
          <a
            className="hyperLink"
            href="https://www.linkedin.com/in/frankmyles/"
            target="_blank"
          >
            frank myles.
          </a>{" "}
        </p>
      </section>

      <line>
        <IllustrationHorizontalLine />
      </line>

      {/* circuitcentral */}
      <section className="container bottomMargin">
        <header className="flexCenterH smallHeader">circuitcentral</header>
        <div className="flexCenterH">2024</div>
        <ul className="architecture flexCenterH">
          <li>c#</li>
          <li>windows sql server</li>
          <li>windows forms</li>
          <li>ui/ux</li>
        </ul>
        <p>
          circuitcentral is an <u>e-commerce management system</u> that covers
          ordering products, viewing product catalogs, handling customer, staff,
          and supplier information, etc. its system features fundamental crud
          operations: create, read, update, and delete. additionally, it
          features search filtering on all records, error handling of all user
          events, input validation, and a login system for two user types.
        </p>

        <p className="projectLinks">
          <a
            className="hyperLink withIcon"
            href="https://github.com/shadowisf/CircuitCentral"
            target="_blank"
          >
            <IconGithub />
            github
          </a>
          <a className="hyperLink withIcon" href="">
            proposal report
          </a>
          <a className="hyperLink withIcon" href="">
            implementation report
          </a>
        </p>

        <br />

        <img className="image" src="src\assets\ImageCircuitCentral1.PNG" />
        <img className="image" src="src\assets\ImageCircuitCentral2.PNG" />
      </section>

      {/* apollo */}
      <section className="container bottomMargin">
        <div className="flexCenterH smallHeader">apollo hospital</div>

        <header className="flexCenterH">2023</header>

        <ul className="architecture flexCenterH">
          <li>python flask</li>
          <li>xampp sql server</li>
          <li>html</li>
          <li>bootstrap css</li>
          <li>javascript</li>
          <li>ui/ux</li>
        </ul>

        <p>
          apollo hospital is a <u>hospital management system</u> that covers
          scheduling appointments with patients,
        </p>
      </section>

      {/* calculator */}
      <section className="container">
        <div className="flexCenterH smallHeader">calculator</div>

        <header className="flexCenterH">2022</header>

        <ul className="architecture flexCenterH">
          <li>java</li>
          <li>swing</li>
          <li>ui/ux</li>
        </ul>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
          eum doloremque id architecto ullam quis iure animi sunt totam. Rerum
          quis, temporibus beatae ea illum amet? Laborum, iste earum.
        </p>
      </section>
    </Fragment>
  );
}
