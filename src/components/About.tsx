import { Fragment } from "react/jsx-runtime";
import IconCake from "../assets/IconCake";
import IllustrationVerticalLine from "../assets/IllustrationLineV";
import IconLocation from "../assets/IconLocation";
import IconEyeGlasses from "../assets/IconEyeGlasses";
import IconGraduateHat from "../assets/IconGraduateHat";
import IllustrationBustNoChat from "../assets/IllustrationBustNoChat";
import IllustrationHandPointingH from "../assets/IllustrationHandPointingH";
import IllustrationHandPointingV from "../assets/IllustrationHandPointingV";

type AboutProps = {
  collapseDiv: (div: string) => void;
};

const About: React.FC<AboutProps> = ({ collapseDiv }) => {
  return (
    <Fragment>
      {/* hey, i'm les! */}
      <section className="container vhalf">
        <header id="hs" className="largeHeader textCenter">
          i'm a <span className="typedSeries"></span> <br /> software engineer
        </header>

        <br id="hs" />
        <br id="hs" />

        <picture className="flexCenterH">
          <IllustrationBustNoChat />
        </picture>

        <picture id="fs">
          <IllustrationVerticalLine height="100%" strokeDasharray="10" />
        </picture>

        <aside id="aboutText" className="gridCenterV">
          <header id="fs" className="mediumHeader textCenter">
            i'm a <span className="typedSeries"></span> <br />
            software engineer
          </header>

          <p className="textJustify">
            <br id="hs" />i strive to embrace minimalism in my design
            philosophy, focusing on simplicity and prioritizing the creation and
            implementation of clean, uncluttered interfaces.
          </p>
        </aside>
      </section>

      {/* my life as a timeline */}
      <header className="largeHeader textCenter topMargin">
        my life as a timeline
      </header>
      <section className="container bottomMargin timeline">
        <section className="flexCenterV timelineRow">
          <picture className="flexCenterV">
            <IconCake />
          </picture>
          <aside className="timelineCaption">
            born in davao city, philippines <br />
            <b>february 15, 2004</b>
          </aside>
        </section>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <section className="flexCenterV timelineRow">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated kindergarten at st. peter's college of toril
            <br />
            <b>???</b>
          </aside>
        </section>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <section className="flexCenterV timelineRow">
          <picture className="flexCenterV">
            <IconLocation />
          </picture>
          <aside className="timelineCaption">
            moved to dubai, united arab emirates <br />
            <b>may 12, 2012</b>
          </aside>
        </section>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <section className="flexCenterV timelineRow">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated elementary at far eastern private school
            <br />
            <b>???</b>
          </aside>
        </section>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <section className="flexCenterV timelineRow">
          <picture className="flexCenterV">
            <IconEyeGlasses />
          </picture>
          <aside className="timelineCaption">
            first pair of eyeglasses <br />
            <b>april 6, 2018</b>
          </aside>
        </section>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <section className="flexCenterV timelineRow">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated high school at far eastern private school
            <br />
            <b>???</b>
          </aside>
        </section>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <section className="flexCenterV timelineRow">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated college in university of bolton, ras al khaimah with a
            bachelor of engineering in software engineering
            <br />
            <b>???</b>
          </aside>
        </section>
      </section>

      {/* now what? */}
      <header className="largeHeader flexCenterH textCenter topMargin">
        now what?
      </header>
      <section id="fs" className="container vhalf noCursor">
        <picture className="flexCenterH">
          <IllustrationHandPointingH width="400" />
        </picture>
        <aside className="flexCenterV">
          <a
            className="button scaleHover smallHeader handPointingButtonBottomMargin"
            onClick={() => {
              collapseDiv("project");
            }}
          >
            view my projects
          </a>
        </aside>
      </section>

      <section id="fs" className="container vhalf noCursor">
        <aside className="flexCenterV">
          <a
            className="button scaleHover smallHeader handPointingButtonBottomMargin"
            onClick={() => {
              collapseDiv("contact");
            }}
          >
            contact me
          </a>
        </aside>
        <picture className="flexCenterH mirrorLeft">
          <IllustrationHandPointingH width="400" />
        </picture>
      </section>

      <section id="hs" className="container">
        <picture className="flexRightH handPointingMarginRight">
          <IllustrationHandPointingV height="300" />
        </picture>
        <br />
        <aside className="flexRightH">
          <a
            className="button smallHeader scaleHover"
            onClick={() => {
              collapseDiv("project");
            }}
          >
            view my projects
          </a>
        </aside>
      </section>

      <br id="hs" />

      <section id="hs" className="container noCursor">
        <aside className="flexLeftH">
          <a
            className="button smallHeader scaleHover"
            onClick={() => {
              collapseDiv("contact");
            }}
          >
            contact me
          </a>
        </aside>
        <br />
        <picture className="flexRightH mirrorUp handPointingMarginLeft">
          <IllustrationHandPointingV height="300" />
        </picture>
      </section>

      <p className="flexCenterH textCenter">
        use the menu at the top right to go anywhere!
      </p>

      <br />
      <br />
    </Fragment>
  );
};

export default About;
