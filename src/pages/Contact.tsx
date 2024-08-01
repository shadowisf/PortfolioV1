import { useState } from "react";
import IconEmail from "../assets/IconEmail";
import IconGithub from "../assets/IconGithub";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";
import { HyperLinkWithIcon } from "../components/Links";
import { database } from "../firebase";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import { toastFail, toastSuccess } from "../components/Toasts";

export default function Contact() {
  const placeholderName = "flexbox felix";
  const placeholderEmail = "display@flex.com";
  const placeholderMessage = "i need help with my coffee machine!!";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e: { preventDefault: () => void }) {
    e.preventDefault();

    const generatedUID = "_" + uid();

    set(ref(database, name + generatedUID), {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        toastSuccess("message sent!");
      })
      .catch(() => {
        toastFail("something went wrong");
      });

    setName("");
    setEmail("");
    setMessage("");
  }

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

      <form onSubmit={submitForm}>
        <label>name:</label>
        <input
          required
          className="textbox"
          placeholder={placeholderName}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>email:</label>
        <input
          required
          className="textbox"
          placeholder={placeholderEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value.replace(/\s+/g, ""))}
          maxLength={70}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="username@email.com"
        />

        <label>message:</label>
        <textarea
          required
          className="textarea"
          placeholder={placeholderMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={25}
        ></textarea>

        <span className="flexCenterH">
          <button
            type="submit"
            style={{ padding: "0.75rem 2rem" }}
            className="button toThinHover noCursor"
          >
            submit
          </button>
        </span>

        <span id="text"></span>
      </form>
    </main>
  );
}
