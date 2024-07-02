import { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import BottomCard from "../components/BottomCard";
import ToolTip from "../components/ToolTip";
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IconQuoteLeft from "../assets/IconQuoteLeft";
import IconQuoteRight from "../assets/IconQuoteRight";
import IllustrationHandPointingV from "../assets/IllustrationHandPointingV";
import IllustrationHandPointingH from "../assets/IllustrationHandPointingH";

export default function Index() {

  return (
    <Fragment>
      <section className="container">
        <header className="largeHeader textCenter">click? click!</header>

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

        <section id="hs" className="">
          <picture className="flexRightH handPointingMarginRight">
            <IllustrationHandPointingV height="400" />
          </picture>
          <br />
          <br />
          <aside className="textRight">
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
        <br id="hs" />
        <br id="hs" />

        <section id="hs" className="">
          <aside className="textLeft">
            <a
              className="button smallHeader"
              onClick={() => {
                collapseDiv("contact");
              }}
            >
              contact me
            </a>
          </aside>
          <br />
          <br />
          <picture className="flexRightH mirrorUp handPointingMarginLeft">
            <IllustrationHandPointingV height="400" />
          </picture>
        </section>

        <br />

        <p className="textCenter">
          (or you can scroll down further and click "<b>projects</b>" or "
          <b>contact</b>")
        </p>
      </section>
    </Fragment>
  );
}

{
  /* 
BLACK AND WHITE PNG CONVERTER
https://onlinetools.com/image/create-two-color-image

PNG TO SVG CONVERTER
https://www.pngtosvg.com

SVG OPTIMIZATION AND COMPRESSION
https://jakearchibald.github.io/svgomg/

SVG ICONS
https://remixicon.com/
https://www.flaticon.com/
*/
}
