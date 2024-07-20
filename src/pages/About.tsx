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
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IllustrationSansaStark from "../assets/IllustrationSansaStark";
import { QuoteCard } from "../components/QuoteCards";
import IllustrationLineH from "../assets/IllustrationLineH";
import IllustrationBustWithChat from "../assets/IllustrationBustWithChat";

type AboutProps = {
  collapseContainer: (element: string) => void;
};

export default function About({ collapseContainer }: AboutProps) {
  function scaleHeader(): void {
    const scalableElements =
      document.querySelectorAll<HTMLElement>(".scaleText");
    const margin = 10;
    scalableElements.forEach((scalable) => {
      const scalableContainer = scalable.parentElement as HTMLElement;
      scalable.style.transform = "scale(1)";
      const scalableContainerWidth = scalableContainer.offsetWidth - margin;
      const scalableWidth = scalable.offsetWidth;
      scalable.style.transform = `scale(${
        scalableContainerWidth / scalableWidth
      })`;
      scalableContainer.style.height = `${
        scalable.getBoundingClientRect().height
      }px`;
    });
  }

  type DebounceFunction = (...args: any[]) => void;

  function debounce(
    func: Function,
    wait: number,
    immediate?: boolean
  ): DebounceFunction {
    let timeout: ReturnType<typeof setTimeout> | null;
    return function (this: any, ...args: any[]) {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const myScaleFunction = debounce(() => {
    scaleHeader();
  }, 250);

  myScaleFunction();

  window.addEventListener("resize", myScaleFunction);

  return (
    <>
      {/* hey, i'm les! */}
      <section className="container vhalf noMarginTop">
        <div id="hs" className="textCenter">
          <header className="scaleText">
            i'm a <span className="typedSeries"></span> <br /> software engineer
          </header>
        </div>

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

      <span className="container flexCenterH topMargin bottomMargin">
        <IllustrationLineH width="25%" strokeDasharray="10" />
      </span>

      {/* my life as a timeline */}
      <div id="hs" className="container textCenter">
        <header className="scaleText">
          my life as <br /> a timeline
        </header>
      </div>
      <header id="fs" className="largeHeader textCenter">
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
          graduated college in university of bolton, ras al khaimah with a
          bachelor of engineering in software engineering
          <br />
          <b>???</b>
        </TimelineRow>
      </section>

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineH width="25%" strokeDasharray="10" />
      </span>

      {/* now what? */}
      <div id="hs" className="container textCenter">
        <header className="scaleText">now what?</header>
      </div>
      <header
        id="fs"
        className="container largeHeader flexCenterH textCenter topMargin"
      >
        now what?
      </header>
      <HandPointingLeft
        id="fs"
        onClick={() => {
          collapseContainer("project");
        }}
      >
        view my projects
      </HandPointingLeft>

      <HandPointingRight
        id="fs"
        onClick={() => {
          collapseContainer("contact");
        }}
      >
        contact me
      </HandPointingRight>

      <HandPointingDown
        id="hs"
        onClick={() => {
          collapseContainer("project");
        }}
      >
        view my projects
      </HandPointingDown>

      <HandPointingUp
        id="hs"
        onClick={() => {
          collapseContainer("contact");
        }}
      >
        contact me
      </HandPointingUp>

      <p className="container flexCenterH textCenter">
        use the menu at the top right to go anywhere!
      </p>

      <span className="container flexCenterH topMargin bottomMargin">
        <IllustrationLineH width="25%" strokeDasharray="10" />
      </span>

      {/* wall of quotes */}
      <div id="hs" className="container textCenter">
        <header className="scaleText">
          the wall <br /> of quotes!
        </header>
      </div>

      <header id="fs" className="container largeHeader flexCenterH topMargin">
        the wall of quotes!
      </header>
      <QuoteCard
        who="otto octavius"
        where="spiderman 2"
        img={<IllustrationOttoOctavius />}
      >
        intelligence is not a privilege, it's a gift. and you use it for the
        good of mankind.
      </QuoteCard>

      <QuoteCard
        who="sansa stark"
        where="game of thrones"
        img={<IllustrationSansaStark />}
      >
        i'm a slow learner, that's true. but i learn.
      </QuoteCard>
    </>
  );
}
