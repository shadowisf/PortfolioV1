import IconEmail from "../assets/IconEmail";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";
import { HyperLinkWithIcon } from "../components/Links";

export default function Contact() {
  return (
    <main id="contact" className="container topMargin bottomMargin">
      <h1 className="altBackground noCursor textCenter">get in touch!</h1>

      <p className="textCenter">
        wanna discuss your next big thing? have questions about a project? you
        can always contact me on various social media platforms below.
      </p>

      <br />

      <section className="projectLinks">
        <HyperLinkWithIcon
          img={<IconLinkedIn />}
          href="https://www.linkedin.com/in/les-paul-ranalan/"
          alt={true}
        >
          les paul ranalan
        </HyperLinkWithIcon>

        <HyperLinkWithIcon
          img={<IconEmail />}
          href="mailto:les.ranalan@gmail.com"
          alt={true}
        >
          les.ranalan@gmail.com
        </HyperLinkWithIcon>

        <HyperLinkWithIcon
          img={<IconInstagram />}
          href="https://www.instagram.com/les.rx"
          alt={true}
        >
          @les.rx
        </HyperLinkWithIcon>
      </section>

      <h3 className="mediumHeader textCenter">
        leave a message and <br /> i'll get back to you!
      </h3>
    </main>
  );
}
