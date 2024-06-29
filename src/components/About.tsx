import { Fragment } from "react/jsx-runtime";
import IconCake from "../assets/IconCake";
import IllustrationVerticalLine from "../assets/IllustrationVerticalLine";
import IconLocation from "../assets/IconLocation";
import IconEyeGlasses from "../assets/IconEyeGlasses";
import IconGraduateHate from "../assets/IconGraduateHat";
import IllustrationBustNoChat from "../assets/IllustrationBustNoChat";

export default function About() {
  return (
    <Fragment>
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

        <aside className="aboutText">
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

      <section className="container">
        <header className="smallHeader flexCenterH">
          my life as a timeline
        </header>

        <br />
        <br />

        <article className="flexCenterV">
          <aside className="flexCenterH">
            <IconCake />
          </aside>
          <aside className="timelineCaption">
            born in davao, ph <br />
            <b>april 6, 2018</b>
          </aside>
        </article>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <article className="flexCenterV">
          <aside className="flexCenterH">
            <IconLocation />
          </aside>
          <aside className="timelineCaption">
            moved to dubai, uae <br />
            <b>april 6, 2018</b>
          </aside>
        </article>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <article className="flexCenterV">
          <aside className="flexCenterH">
            <IconEyeGlasses />
          </aside>
          <aside className="timelineCaption">
            first pair of eyeglasses <br />
            <b>april 6, 2018</b>
          </aside>
        </article>

        <IllustrationVerticalLine height="50" className="flexCenterV" />

        <article className="flexCenterV">
          <aside className="timelineIcon">
            <IconGraduateHate />
          </aside>

          <aside className="timelineCaption">
            graduated uob rak with a bachelor of <br id="fs" /> engineering in
            software engineering <br />
            <b>???</b>
          </aside>
        </article>
      </section>
    </Fragment>
  );
}
