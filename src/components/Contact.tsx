import { Fragment } from "react/jsx-runtime";
import IconEmail from "../assets/IconEmail";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";

export default function Contact() {
  return (
    <Fragment>
      <section className="container">
        <p>
          wanna discuss your next big thing? have questions about a project?
          does your coffee machine need fixing? you can always contact me on
          various social media platforms below.
        </p>

        <section className="container socials">
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconLinkedIn />
            </picture>
            <a
              className="hyperLink withIcon"
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
            <a
              className="hyperLink withIcon"
              href="mailto:les.ranalan@gmail.com"
              target="_blank"
            >
              les.ranalan@gmail.com
            </a>
          </span>
          <span className="flexCenterV">
            <picture className="flexCenterV">
              <IconInstagram />
            </picture>
            <a
              className="hyperLink withIcon"
              href="https://www.instagram.com/les.rx"
              target="_blank"
            >
              @les.rx
            </a>
          </span>
        </section>

        <p className="mediumHeader textCenter">
          leave a message and <br /> i'll get back to you!
        </p>
      </section>
    </Fragment>
  );
}
