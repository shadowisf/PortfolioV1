import { Link } from "react-router-dom";
import IconLinkedIn from "../assets/IconLinkedIn";
import IconEmail from "../assets/IconEmail";
import { Fragment } from "react/jsx-runtime";

export default function BotCard() {
  return (
    <Fragment>
      <footer className="bottomcard">
        <section>
          <span>
            <IconLinkedIn />‎ ‎{" "}
            <a
              href="https://www.linkedin.com/in/les-paul-ranalan/"
              target="_blank"
            >
              les paul ranalan
            </a>
          </span>
          <span>
            <IconEmail />‎ ‎{" "}
            <a href="mailto:les.ranalan@gmail.com" target="_blank">
              les.ranalan@gmail.com
            </a>
          </span>

          <span id="FScopyright">
            <b className="logo">lpr.‎ ‎{""}</b>© 2024
          </span>
        </section>

        <section>
          <ul className="bottomcardNavlink">
            <li>
              <Link to="/work">work.</Link>
            </li>
            <li>
              <Link to="/contact">contact.</Link>
            </li>
            <li>
              <Link to="/about">about.</Link>
            </li>
          </ul>

          <span id="HScopyright">
            <b className="logo">lpr.‎ ‎{""}</b>© 2024
          </span>
        </section>
      </footer>
    </Fragment>
  );
}
