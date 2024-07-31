import IconEmail from "../assets/IconEmail";
import IconGithub from "../assets/IconGithub";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";
import { HyperLinkWithIcon } from "../components/Links";

export default function Contact() {
  const placeholderName = "bartholomew douchebag";
  const placeholderEmail = "douchebag@mail.com";
  const placeholderMessage = "i need help with my coffee machine!!";

  return (
    <main id="contact" className="container topMargin">
      <h1 className="altBackground noCursor textCenter">get in touch!</h1>

      <section className="contactLinks">
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

        <HyperLinkWithIcon
          img={<IconGithub />}
          href="https://github.com/shadowisf"
          alt={true}
        >
          shadowisf
        </HyperLinkWithIcon>
      </section>

      <form>
        <label>name:</label>
        <input className="textbox" placeholder={placeholderName} />

        <label>email:</label>
        <input className="textbox" placeholder={placeholderEmail} />

        <label htmlFor="message">message:</label>
        <textarea
          className="textarea"
          placeholder={placeholderMessage}
        ></textarea>

        <span className="flexCenterH">
          <button
            style={{ fontSize: "var(--font-s)", width: "25%" }}
            className="button toThinHover noCursor"
          >
            submit
          </button>
        </span>
      </form>
    </main>
  );
}
