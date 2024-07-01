import { Fragment } from "react/jsx-runtime";
import { ExpandedState } from "./Types";
import IconCake from "../assets/IconCake";
import IllustrationVerticalLine from "../assets/IllustrationLineV";
import IconLocation from "../assets/IconLocation";
import IconEyeGlasses from "../assets/IconEyeGlasses";
import IconGraduateHate from "../assets/IconGraduateHat";
import IllustrationBustNoChat from "../assets/IllustrationBustNoChat";
import IllustrationHandPointingH from "../assets/IllustrationHandPointingH";
import { Link } from "react-router-dom";

type AboutProps = {
  toggleExpand: (key: keyof ExpandedState) => void;
};

const About: React.FC<AboutProps> = ({ toggleExpand }) => {
  return (
    <Fragment>
      {/* hey, i'm les! */}
      <section className="container vhalf">
        <header id="hs" className="container smallHeader textCenter">
          i'm a <span className="typedSeries"></span> <br /> software engineer.
        </header>

        <picture className="aboutBust">
          <IllustrationBustNoChat />
        </picture>

        <picture id="fs">
          <IllustrationVerticalLine height="100%" strokeDasharray="10" />
        </picture>

        <aside id="aboutText" className="gridCenterV">
          <header id="fs" className="smallHeader textCenter">
            i'm a <span className="typedSeries"></span> <br />
            software engineer
          </header>

          <p className="textJustify">
            i strive to embrace minimalism in my design philosophy, focusing on
            simplicity and prioritizing the creation and implementation of
            clean, uncluttered interfaces.
          </p>
        </aside>
      </section>

      <br />

      {/* my life as a timeline */}
      <section className="container">
        <header className="smallHeader flexCenterH">
          my life as a timeline
        </header>

        <br />
        <br />

        <section className="flexCenterV">
          <picture className="flexCenterH">
            <IconCake />
          </picture>
          <aside className="timelineCaption">
            born in davao, ph <br />
            <b>april 6, 2018</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterH">
            <IconLocation />
          </picture>
          <aside className="timelineCaption">
            moved to dubai, uae <br />
            <b>april 6, 2018</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterH">
            <IconEyeGlasses />
          </picture>
          <aside className="timelineCaption">
            first pair of eyeglasses <br />
            <b>april 6, 2018</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="timelineIcon">
            <IconGraduateHate />
          </picture>
          <aside className="timelineCaption">
            graduated uob rak with a bachelor of <br id="fs" /> engineering in
            software engineering <br />
            <b>???</b>
          </aside>
        </section>
      </section>

      <br />

      {/* hand pointing */}
      <section className="container">
        <header className="smallHeader textCenter">
          click here to see my projects!
        </header>

        <br />
        <br />

        <section className="vhalf noCursor">
          <picture className="flexCenterH">
            <IllustrationHandPointingH width="400" />
          </picture>
          <aside className="flexCenterV">
            <a
              className="button handPointingButton"
              onClick={() => {
                toggleExpand("project");
              }}
            >
              click me!
            </a>
          </aside>
        </section>
      </section>
    </Fragment>
  );
};

export default About;
