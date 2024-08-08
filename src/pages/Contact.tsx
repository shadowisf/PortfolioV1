import { useState } from "react";
import { Email, Github, LinkedIn, Instagram } from "../components/Icon";
import { HyperLinkWithIcon } from "../components/Link";
import { database } from "../firebase";
import { ref, set } from "firebase/database";
import { toastFail, toastSuccess } from "../components/Toasts";

export default function Contact() {
  const placeholderName = "flexbox felix";
  const placeholderEmail = "display@flex.com";
  const placeholderMessage = "i need help with my coffee machine!!";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function generateID() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  function submitForm(e: { preventDefault: () => void }) {
    e.preventDefault();

    const generatedUID = ` (${generateID()})`;

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
    <main id="contact" className="container topMargin bottomMargin">
      <h1 className="altBackground noCursor textCenter">get in touch!</h1>

      <section className="contactLinks">
        <HyperLinkWithIcon
          img={<Email color="text" />}
          href="mailto:les.ranalan@gmail.com"
          alt={true}
        >
          les.ranalan@gmail.com
        </HyperLinkWithIcon>

        <HyperLinkWithIcon
          img={<LinkedIn />}
          href="https://www.linkedin.com/in/les-paul-ranalan/"
          alt={true}
        >
          les paul ranalan
        </HyperLinkWithIcon>

        <HyperLinkWithIcon
          img={<Github />}
          href="https://github.com/shadowisf"
          alt={true}
        >
          shadowisf
        </HyperLinkWithIcon>

        <HyperLinkWithIcon
          img={<Instagram />}
          href="https://www.instagram.com/les.rx/"
          alt={true}
        >
          @les.rx
        </HyperLinkWithIcon>
      </section>

      <form className="contactForm" onSubmit={submitForm}>
        <span className="nameAndEmail">
          <label>
            name:
            <input
              autoComplete="off"
              name="name"
              required
              className="textbox"
              placeholder={placeholderName}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            email:
            <input
              autoComplete="off"
              name="email"
              required
              className="textbox"
              placeholder={placeholderEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value.replace(/\s+/g, ""))}
              maxLength={70}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="username@email.com"
            />
          </label>
        </span>

        <label>
          message:
          <textarea
            autoComplete="off"
            name="message"
            required
            className="textarea"
            placeholder={placeholderMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={25}
          />
        </label>

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
