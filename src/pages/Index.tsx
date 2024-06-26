import { Fragment } from "react";
import IllustrationBustNoChat from "../assets/IllustrationBustNoChat";
import IllustrationVerticalLine from "../assets/IllustrationVerticalLine";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import BotCard from "../components/BotCard";

export default function Index() {
  return (
    <Fragment>
      <NavBar />

      <header className="container bigHeader">hey, i'm les!</header>

      <div className="container vhalf">
        <div id="hs" className="container smallHeader">
          i'm a <span className="word1"></span> <br /> software engineer.
        </div>

        <picture className="indexBust">
          <IllustrationBustNoChat />
        </picture>

        <picture id="fs">
          <IllustrationVerticalLine height="100%" strokeDasharray="10" />
        </picture>

        <aside className="indexText">
          <p id="fs" className="smallHeader">
            i'm a <span className="word1"></span> <br />
            software engineer.
          </p>

          <p>
            i strive to embrace minimalism in my design philosophy, focusing on
            simplicity and prioritizing the creation and implementation of
            clean, uncluttered interfaces.
          </p>
        </aside>
      </div>

      <div className="container indexNavs">
        <Link className="button" to="/projects">
          view my projects.
        </Link>
        <Link className="button" to="/contact">
          contact me.
        </Link>
        <Link className="button" to="/about">
          read more about me.
        </Link>
      </div>

      <BotCard />
    </Fragment>
  );
}
