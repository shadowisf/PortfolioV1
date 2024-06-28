import { Fragment, useEffect } from "react";
import IllustrationHorizontalLine from "../assets/IllustrationHorizontalLine";
import mediumZoom from "medium-zoom";

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
        <header className="smallHeader">portfolio</header>

        <div className="flexCenterH">2024</div>

        <ul className="architecture">
          <li>javascript (react)</li>
          <li>html</li>
          <li>css</li>
          <li>sass</li>
        </ul>

        <p className="textJustify">
          this portfolio website showcases all things me;{" "}
          <u>my projects, research, and life history!</u>. by creating this
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
          <a href="https://github.com/brandonmcconnell" target="_blank">
            brandon mcconnell
          </a>
          ,{" "}
          <a href="https://github.com/francoischalifour" target="_blank">
            françois chalifour
          </a>
          , and{" "}
          <a href="https://www.linkedin.com/in/frankmyles/" target="_blank">
            frank myles.
          </a>{" "}
        </p>
      </section>

      {/* circuitcentral */}
      <section className="container bottomMargin">
        <header className="flexCenterH smallHeader">circuitcentral</header>
        <div className="flexCenterH">2024</div>
        <ul className="architecture">
          <li>c#</li>
          <li>sql</li>
          <li>windows forms</li>
        </ul>
        <p className="textJustify">
          circuitcentral is an <u>e-commerce management system</u> that sells
          electronic products. its system features fundamental crud operations:
          create, read, update, and delete. additionally, it features error
          handling of all user events and a login system for two user types.
        </p>

        <br />

        <img className="image" src="src\assets\ImageCircuitCentral1.PNG" />
        <img className="image" src="src\assets\ImageCircuitCentral2.PNG" />
      </section>

      {/* apollo */}
      <section className="container bottomMargin">
        <div className="flexCenterH smallHeader">apollo hospital</div>

        <header className="flexCenterH">2023</header>

        <ul className="architecture">
          <li>python</li>
          <li>sql</li>
          <li>html</li>
          <li>css (bootstrap)</li>
          <li>javascript</li>
        </ul>

        <p>
          apollo hospital is a <u>hospital management system.</u>
        </p>
      </section>

      {/* calculator */}
      <section className="container">
        <div className="flexCenterH smallHeader">calculator</div>

        <header className="flexCenterH">2022</header>

        <ul className="architecture">
          <li>java</li>
          <li>swing</li>
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
