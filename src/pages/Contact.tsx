import IconEmail from "../assets/IconEmail";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";
import { HyperLinkWithIcon } from "../components/HyperLink";
import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <section className="container topMargin noCursor divHeader">
        get in touch!
      </section>

      <section className="container">
        <p>
          wanna discuss your next big thing? have questions about a project?
          does your coffee machine need fixing? you can always contact me on
          various social media platforms below.
        </p>

        <br />

        <div className="projectLinks">
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
        </div>

        <br />

        <p className="mediumHeader textCenter">
          leave a message and <br /> i'll get back to you!
        </p>
      </section>
    </>
  );
}
