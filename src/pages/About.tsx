import { Fragment } from "react/jsx-runtime";
import NavBar from "../components/NavBar";
import BotCard from "../components/BotCard";
import IconQuestioMark from "../assets/IconQuestionMark";
import IllustrationBust from "../assets/IllustrationBust";
import IconArchitecture from "../assets/IconArchitecture";
import IconCalendar from "../assets/IconCalendar";
import IconCake from "../assets/IconCake";
import IllustrationVerticalLine from "../assets/IllustrationVerticalLine";
import IconLocation from "../assets/IconLocation";
import IconEyeGlasses from "../assets/IconEyeGlasses";
import IconGraduateHate from "../assets/IconGraduateHat";
import IllustrationHorizontalLine from "../assets/IllustrationHorizontalLine";

export default function About() {
  return (
    <Fragment>
      <NavBar />
      <header className=" bigHeader">ABOUT</header>

      <section className="container vhalf">
        <article className="bust">
          <IllustrationBust />
        </article>

        <article className="verticalLine">
          <IllustrationVerticalLine height="100%" strokeDasharray="10" />
        </article>

        <article className="WAIandDP">
          <span className="smallHeader">
            <picture>
              <IconQuestioMark />
            </picture>
            <text>who am i?</text>
          </span>
          <p>
            my name is les, a passionate software engineer with a keen eye for
            designing captivating frontend experiences. my journey in the world
            of software development is fueled by a love for crafting seamless
            and visually appealing user interfaces.
          </p>

          <br />
          <br />

          <span className="smallHeader">
            <picture>
              <IconArchitecture />
            </picture>
            <text>‎design philosophy</text>
          </span>
          <p className="removeBottomMargin">
            i strive to embrace minimalism in my design approach, aiming for
            simplicity that centers around creating interfaces that are clean
            and uncluttered, ensuring ease of use while maintaining a thoughtful
            and purposeful aesthetic.
            <br />
            <br />
            to put it simply: <u>funcionality over aesthetics</u>.
          </p>
        </article>
      </section>

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
          <text>‎my life as a timeline</text>‎
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


        {/*}
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
        */}
      </section>

      <BotCard />
    </Fragment>
  );
}
