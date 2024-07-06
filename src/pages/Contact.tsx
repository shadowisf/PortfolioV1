import { Fragment } from "react/jsx-runtime";
import IconEmail from "../assets/IconEmail";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";
import { HyperLinkWithIcon } from "../components/HyperLink";

export default function Contact() {
  return (
    <Fragment>
      <section className="container socials noMarginTop">
        <p>
          wanna discuss your next big thing? have questions about a project?
          does your coffee machine need fixing? you can always contact me on
          various social media platforms below.
        </p>

        <br />

        <HyperLinkWithIcon
          img={<IconLinkedIn />}
          href="https://www.linkedin.com/in/les-paul-ranalan/"
        >
          les paul ranalan
        </HyperLinkWithIcon>

        <HyperLinkWithIcon
          img={<IconEmail />}
          href="mailto:les.ranalan@gmail.com"
        >
          les.ranalan@gmail.com
        </HyperLinkWithIcon>

        <HyperLinkWithIcon
          img={<IconInstagram />}
          href="https://www.instagram.com/les.rx"
        >
          @les.rx
        </HyperLinkWithIcon>

        <br />

        <p className="mediumHeader textCenter">
          leave a message and <br /> i'll get back to you!
        </p>
      </section>
    </Fragment>
  );
}
