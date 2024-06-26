import IconLinkedIn from "../assets/IconLinkedIn";
import IconEmail from "../assets/IconEmail";
import { Fragment } from "react/jsx-runtime";
import IconInstagram from "../assets/IconInstagram";

export default function BotCard() {
  return (
    <Fragment>
      <footer className="bottomcard">
        <section className="socials">
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconLinkedIn />
            </picture>
            <a
              href="https://www.linkedin.com/in/les-paul-ranalan/"
              target="_blank"
            >
              les paul ranalan
            </a>
          </span>
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconEmail />
            </picture>
            <a href="mailto:les.ranalan@gmail.com" target="_blank">
              les.ranalan@gmail.com
            </a>
          </span>
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconInstagram />
            </picture>
            <a href="https://www.instagram.com/les.rx" target="_blank">
              @les.rx
            </a>
          </span>
        </section>

        <p>
          developed and designed by les paul ranalan.
          <br />
          <br />
          <span className="bottomcardLogo">lr.</span> ⓒ 2024.
        </p>
      </footer>
    </Fragment>
  );
}
