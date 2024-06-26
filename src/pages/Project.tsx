import { Fragment } from "react/jsx-runtime";
import NavBar from "../components/NavBar";
import BotCard from "../components/BotCard";
import IllustrationHorizontalLine from "../assets/IllustrationHorizontalLine";

export default function Project() {
  return (
    <Fragment>
      <NavBar />

      <header className="container bigHeader">projects.</header>

      {/* portfolio */}
      <section className="container">
        <header className="smallHeader">portfolio website.</header>

        <div className="flexCenterH">2024.</div>

        <ul className="architecture">
          <li>react.</li>
          <li>html & css.</li>
          <li>sass.</li>
        </ul>

        <p>
          this portfolio website showcases all things me;{" "}
          <u>my projects, research, and life history!</u>. by creating this
          portfolio, i was able to fully learn and understand how html, css, and
          react are all implemented as a baseline for web development.
          <br />
          <br />
          <b>fun fact:</b> this entire portfolio is made out of vanilla css; no
          tailwind, no bootstrap, no chakra, just pure vanilla! (with exception to sass.)
        </p>
      </section>

      <line className="container flexCenterH">
        <IllustrationHorizontalLine width="100%" strokeDasharray="10" />
      </line>

      {/* circuitcentral */}
      <section className="container">
        <header className="flexCenterH smallHeader">circuitcentral.</header>

        <div className="flexCenterH">2024.</div>

        <ul className="architecture">
          <li>c#.</li>
          <li>sql.</li>
          <li>windows forms.</li>
        </ul>

        <p>
          circuitcentral is an <u>e-commerce management system</u> that features
          c# as its back-end, sql for database, and winforms for its user
          interface.
          <br />
          <br />
          circuitcentral includes the basic operations in an e-commerce
          management system which are CRUD: create, read, update, and delete.
        </p>
      </section>

      <line className="container flexCenterH">
        <IllustrationHorizontalLine width="100%" strokeDasharray="10" />
      </line>

      {/* apollo */}
      <section className="container">
        <div className="flexCenterH smallHeader">apollo hospital.</div>

        <header className="flexCenterH">2023.</header>

        <ul className="architecture">
          <li>python.</li>
          <li>sql.</li>
          <li>html & css.</li>
          <li>bootstrap css.</li>
        </ul>

        <p>
          apollo hospital is a <u>hospital management system.</u>
        </p>
      </section>

      <line className="container flexCenterH">
        <IllustrationHorizontalLine width="100%" strokeDasharray="10" />
      </line>

      {/* calculator */}
      <section className="container">
        <div className="flexCenterH smallHeader">calculator application.</div>

        <header className="flexCenterH">2022.</header>

        <ul className="architecture">
          <li>java.</li>
          <li>swing.</li>
        </ul>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
          eum doloremque id architecto ullam quis iure animi sunt totam. Rerum
          quis, temporibus beatae ea illum amet? Laborum, iste earum.
        </p>
      </section>

      <BotCard />
    </Fragment>
  );
}
