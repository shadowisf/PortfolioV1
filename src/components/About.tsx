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

        <br />
        <br />

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

      <br />

      {/* my life as a timeline */}
      <section className="container">
        <header className="largeHeader flexCenterH textCenter">
          my life as a timeline
        </header>

        <br />

        <section className="flexCenterV">
          <picture className="flexCenterV">
            <IconCake />
          </picture>
          <aside className="timelineCaption">
            born in davao city, philippines <br />
            <b>february 15, 2004</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated kindergarten in st. peter's college of toril
            <br />
            <b>???</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterV">
            <IconLocation />
          </picture>
          <aside className="timelineCaption">
            moved to dubai, united arab emirates <br />
            <b>may 12, 2012</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated elementary in far eastern private school
            <br />
            <b>???</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterV">
            <IconEyeGlasses />
          </picture>
          <aside className="timelineCaption">
            first pair of eyeglasses <br />
            <b>april 6, 2018</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated high school in far eastern private school
            <br />
            <b>???</b>
          </aside>
        </section>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <section className="flexCenterV">
          <picture className="flexCenterV">
            <IconGraduateHat />
          </picture>
          <aside className="timelineCaption">
            graduated college in university of bolton, ras al khaimah as
            bachelor of engineering in software engineering
            <br />
            <b>???</b>
          </aside>
        </section>
      </section>

      <br />

      {/* click? click! */}
      <section className="container">
        <header className="largeHeader flexCenterH textCenter">
          click? click!
        </header>

        <br />

        <section id="fs" className="vhalf noCursor">
          <picture className="flexCenterH">
            <IllustrationHandPointingH width="400" />
          </picture>
          <aside className="flexCenterV">
            <a
              className="button smallHeader handPointingButtonBottomMargin"
              onClick={() => {
                collapseDiv("project");
              }}
            >
              view my projects
            </a>
          </aside>
        </section>

        <section id="fs" className="vhalf noCursor">
          <aside className="flexCenterV">
            <a
              className="button smallHeader handPointingButtonBottomMargin"
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

        <section id="hs" className=" noCursor">
          <picture className="flexRightH handPointingMarginRight">
            <IllustrationHandPointingV height="300" />
          </picture>
          <br />
          <aside className="flexRightH">
            <a
              className="button smallHeader"
              onClick={() => {
                collapseDiv("project");
              }}
            >
              view my projects
            </a>
          </aside>
        </section>

        <br id="hs" />

        <section id="hs" className=" noCursor">
          <aside className="flexLeftH">
            <a
              className="button smallHeader"
              onClick={() => {
                collapseDiv("project");
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

        <br />

        <p className="flexCenterH textCenter">
          use the menu at the top right to go anywhere!
        </p>
      </section>
    </Fragment>
  );
};

export default About;
