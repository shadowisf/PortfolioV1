import IconCake from "../assets/IconCake";
import IllustrationVerticalLine from "../assets/IllustrationLineV";
import IconLocation from "../assets/IconLocation";
import IconEyeGlasses from "../assets/IconEyeGlasses";
import IconGraduateHat from "../assets/IconGraduateHat";
import { TimelineRow } from "../components/Timeline";
import IllustrationLineH from "../assets/IllustrationLineH";
import { pixelTransition } from "../components/NavUtils";
import { HyperLinkWithIcon, PageLinkWithIcon } from "../components/Links";
import IconArchitecture from "../assets/IconArchitecture";
import IconEmail from "../assets/IconEmail";
import IconArrowTopRight from "../assets/IconArrowTopRight";

export default function About() {
  const { start } = pixelTransition();
  return (
    <main id="about" className="container topMargin bottomMargin">
      <h1 style={{ margin: "0" }} className="altBackground noCursor textCenter">
        hey, i'm les!
      </h1>

      <h3 className="textCenter">
        i'm a <span className="typedSeries"></span> <br id="hs" /> software
        engineer
      </h3>

      <p className="textCenter">
        i strive to embrace minimalism in my design philosophy, focusing on
        simplicity and prioritizing the creation and implementation of clean,
        uncluttered interfaces.
      </p>

      <div className="aboutLinks">
        <PageLinkWithIcon
          img={<IconArchitecture />}
          onClick={() => start("project", 0)}
          alt={true}
        >
          view my projects
        </PageLinkWithIcon>
        <PageLinkWithIcon
          img={<IconEmail />}
          onClick={() => start("contact", 0)}
          alt={true}
        >
          contact me
        </PageLinkWithIcon>
        <HyperLinkWithIcon img={<IconArrowTopRight />} href="ASDASD" alt={true}>
          view my resume
        </HyperLinkWithIcon>
      </div>

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineH width="25%" strokeDasharray="10" />
      </span>

      <h2 className="textCenter">my life's arc</h2>
      <div className="dashedBorderLeft">
        <TimelineRow img={<IconCake />}>
          born in davao city, philippines <br />
          <b>february 15, 2004</b>
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

        <TimelineRow img={<IconEyeGlasses />}>
          first pair of eyeglasses <br />
          <b>april 6, 2018</b>
        </TimelineRow>

        <IllustrationVerticalLine
          height="50"
          className="flexCenterV timelineRow"
        />

        <TimelineRow img={<IconGraduateHat />}>
          graduated uob with bachelor in swe
          <br />
          <b>???</b>
        </TimelineRow>
      </div>
    </main>
  );
}
