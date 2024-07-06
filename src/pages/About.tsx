import { Fragment } from "react/jsx-runtime";
import IconCake from "../assets/IconCake";
import IllustrationVerticalLine from "../assets/IllustrationLineV";
import IconLocation from "../assets/IconLocation";
import IconEyeGlasses from "../assets/IconEyeGlasses";
import IconGraduateHat from "../assets/IconGraduateHat";
import IllustrationBustNoChat from "../assets/IllustrationBustNoChat";
import {
  HandPointingDown,
  HandPointingLeft,
  HandPointingRight,
  HandPointingUp,
} from "../components/HandPointingButtons";
import { TimelineRow } from "../components/Timeline";

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
        <TimelineRow img={<IconCake />}>
          born in davao city, philippines <br />
          <b>february 15, 2004</b>
        </TimelineRow>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <TimelineRow img={<IconGraduateHat />}>
          graduated kindergarten at st. peter's college of toril
          <br />
          <b>???</b>
        </TimelineRow>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <TimelineRow img={<IconLocation />}>
          moved to dubai, united arab emirates <br />
          <b>may 12, 2012</b>
        </TimelineRow>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <TimelineRow img={<IconGraduateHat />}>
          graduated elementary at far eastern private school
          <br />
          <b>???</b>
        </TimelineRow>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <TimelineRow img={<IconEyeGlasses />}>
          first pair of eyeglasses <br />
          <b>april 6, 2018</b>
        </TimelineRow>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <TimelineRow img={<IconGraduateHat />}>
          graduated high school at far eastern private school
          <br />
          <b>???</b>
        </TimelineRow>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <TimelineRow img={<IconGraduateHat />}>
          graduated college in university of bolton, ras al khaimah with a
          bachelor of engineering in software engineering
          <br />
          <b>???</b>
        </TimelineRow>
      </section>

      {/* now what? */}
      <header className="largeHeader flexCenterH textCenter topMargin">
        now what?
      </header>
      <HandPointingLeft
        id="fs"
        onClick={() => {
          collapseDiv("project");
        }}
      >
        view my project
      </HandPointingLeft>

      <HandPointingRight
        id="fs"
        onClick={() => {
          collapseDiv("contact");
        }}
      >
        contact me
      </HandPointingRight>

      <HandPointingDown
        id="hs"
        onClick={() => {
          collapseDiv("project");
        }}
      >
        view my projects
      </HandPointingDown>

      <HandPointingUp
        id="hs"
        onClick={() => {
          collapseDiv("contact");
        }}
      >
        contact me
      </HandPointingUp>

      <p className="container flexCenterH textCenter">
        use the menu at the top right to go anywhere!
      </p>
    </Fragment>
  );
};

export default About;
