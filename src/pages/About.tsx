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
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IllustrationSansaStark from "../assets/IllustrationSansaStark";
import { QuoteCard } from "../components/QuoteCards";
import IllustrationLineH from "../assets/IllustrationLineH";

type AboutProps = {
  collapseContainer: (element: string) => void;
};

export default function About({ collapseContainer }: AboutProps) {
  function scaleHeader() {
    var scalable = document.querySelectorAll(".scale--js");
    var margin = 10;
    for (var i = 0; i < scalable.length; i++) {
      var scalableContainer = scalable[i].parentNode;
      scalable[i].style.transform = "scale(1)";
      var scalableContainerWidth = scalableContainer.offsetWidth - margin;
      var scalableWidth = scalable[i].offsetWidth;
      scalable[i].style.transform =
        "scale(" + scalableContainerWidth / scalableWidth + ")";
      scalableContainer.style.height =
        scalable[i].getBoundingClientRect().height + "px";
    }
  }

  // Debounce by David Walsch
  // https://davidwalsh.name/javascript-debounce-function

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  var myScaleFunction = debounce(function () {
    scaleHeader();
  }, 250);

  myScaleFunction();

  window.addEventListener("resize", myScaleFunction);

  return (
    <Fragment>
      {/* hey, i'm les! */}
      <section className="container vhalf noMarginTop">
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

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineH width="25%" strokeDasharray="10" />
      </span>

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

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineH width="25%" strokeDasharray="10" />
      </span>

      {/* now what? */}
      <header className="container largeHeader flexCenterH textCenter topMargin">
        now what?
      </header>
      <HandPointingLeft
        id="fs"
        onClick={() => {
          collapseContainer("project");
        }}
      >
        view my project
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

      <span className="flexCenterH topMargin bottomMargin">
        <IllustrationLineH width="25%" strokeDasharray="10" />
      </span>

      {/* wall of quotes */}
      <header className="container largeHeader flexCenterH topMargin">
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
    </Fragment>
  );
}
