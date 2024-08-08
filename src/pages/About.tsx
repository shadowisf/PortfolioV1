import {
  Cake,
  Location,
  Glasses,
  GraduateHat,
  Architecture,
  Email,
  ArrowTopRight,
} from "../components/Icon";

import { TimelineRow } from "../components/Timeline";
import CV from "../assets/FileCV.PDF";
import { Button } from "../components/Button";

type AboutProps = {
  startTransition: (destination: string, delay: number) => void;
};

export default function About({ startTransition: start }: AboutProps) {
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
        i strive to embrace minimalism in my design philosophy, focusing on the
        development and implementation of clean and functional interfaces.
      </p>

      <div className="aboutLinks">
        <Button
          icon={<Architecture color="background" />}
          onClick={() => start("project", 0)}
        >
          view my projects
        </Button>

        <Button
          icon={<Email color="background" />}
          onClick={() => start("contact", 0)}
        >
          contact me
        </Button>

        <Button
          icon={<ArrowTopRight color="background" />}
          onClick={() => window.open(CV, "_blank", "noopener,noreferrer")}
        >
          view my resume
        </Button>
      </div>

      <span className="dashedBorderBottom short flexCenterH">&emsp;</span>

      <h2 className="textCenter">my life's arc</h2>
      <div className="dashedBorderLeft">
        <TimelineRow img={<Cake />} verticalLine={true}>
          born in davao city, philippines <br />
          <b>february 15, 2004</b>
        </TimelineRow>

        <TimelineRow img={<Location />} verticalLine={true}>
          moved to dubai, united arab emirates <br />
          <b>may 12, 2012</b>
        </TimelineRow>

        <TimelineRow img={<Glasses />} verticalLine={true}>
          first pair of eyeglasses <br />
          <b>april 6, 2018</b>
        </TimelineRow>

        <TimelineRow img={<GraduateHat />}>
          graduated uob with bachelor in swe
          <br />
          <b>???</b>
        </TimelineRow>
      </div>
    </main>
  );
}
