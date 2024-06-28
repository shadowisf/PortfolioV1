import { Fragment } from "react/jsx-runtime";
import IconCalendar from "../assets/IconCalendar";
import IconCake from "../assets/IconCake";
import IllustrationVerticalLine from "../assets/IllustrationVerticalLine";
import IconLocation from "../assets/IconLocation";
import IconEyeGlasses from "../assets/IconEyeGlasses";
import IconGraduateHate from "../assets/IconGraduateHat";
import IllustrationHorizontalLine from "../assets/IllustrationHorizontalLine";
import IllustrationBustNoChat from "../assets/IllustrationBustNoChat";

export default function About() {
  return (
    <Fragment>
      <div className="container vhalf">
        <p id="hs" className="container smallHeader">
          i'm a <span className="typedSeries"></span> <br /> software engineer.
        </p>

        <picture className="aboutBust">
          <IllustrationBustNoChat />
        </picture>

        <picture id="fs">
          <IllustrationVerticalLine height="100%" strokeDasharray="10" />
        </picture>

        <aside className="aboutText">
          <p id="fs" className="smallHeader">
            i'm a <span className="typedSeries"></span> <br />
            software engineer
          </p>

          <p className="textJustify">
            i strive to embrace minimalism in my design philosophy, focusing on
            simplicity and prioritizing the creation and implementation of
            clean, uncluttered interfaces.
          </p>
        </aside>
      </div>
      {/*}
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="container timeline">
        <IllustrationHorizontalLine width="100%" strokeDasharray="10" />
        <span className="smallHeader timeline">
          <picture>
            <IconCalendar />
          </picture>
          <text>my life as a timeline</text>
          <picture>
            <IconCalendar />
          </picture>
        </span>
        <IllustrationHorizontalLine width="100%" strokeDasharray="10" />
        <br />
        <br />
        <br />
        <article className="timelineRow">
          <aside className="timelineIcon">
            <IconCake />
          </aside>
          <aside className="timelineCaption">
            born in davao, ph. <br />
            <b>april 6, 2018.</b>
          </aside>
        </article>
        <IllustrationVerticalLine height="50" className="timelineRow" />
        <article className="timelineRow">
          <aside className="timelineIcon">
            <IconLocation />
          </aside>
          <aside className="timelineCaption">
            moved to dubai, uae. <br />
            <b>april 6, 2018.</b>
          </aside>
        </article>
        <IllustrationVerticalLine height="50" className="timelineRow" />
        <article className="timelineRow">
          <aside className="timelineIcon">
            <IconEyeGlasses />
          </aside>
          <aside className="timelineCaption">
            first pair of eyeglasses. <br />
            <b>april 6, 2018.</b>
          </aside>
        </article>
        <IllustrationVerticalLine height="50" className="timelineRow" />
        <article className="timelineRow">
          <aside className="timelineIcon">
            <IconGraduateHate />
          </aside>

          <aside className="timelineCaption">
            graduated uob rak with a bachelor of engineering in software
            engineering. <br />
            <b>???</b>
          </aside>
        </article>

     
        <div className="container main">
          <h1 className="header">
            <IconStar />
            attribution/inspiration.
          </h1>

          <p>
            <a href="https://www.openpeeps.com" target="_blank">
              open peeps
            </a>
            <IllustrationArrowTopRight />
            by pablo stanley.
          </p>
          <p>
            <a href="https://www.frankmyles.com/" target="_blank">
              fm design
            </a>
            <IllustrationArrowTopRight />
            by franky myles.
          </p>
          <p>
            <a href="https://fonts.google.com/icons" target="_blank">
              google icons
            </a>
            <IllustrationArrowTopRight />
            by google.
          </p>
          <p>
            <a href="https://fonts.google.com" target="_blank">
              google fonts
            </a>
            <IconStar />
            by google.
          </p>
        </div>
        
      </section>
      */}
    </Fragment>
  );
}
