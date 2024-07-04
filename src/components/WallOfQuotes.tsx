import { Fragment } from "react/jsx-runtime";
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IllustrationSansaStark from "../assets/IllustrationSansaStark";

export default function WallOfQuotes() {
  return (
    <Fragment>
      <header className="largeHeader flexCenterH topMarginHUGE">
        the wall of quotes!
      </header>

      <section className="container vhalf quoteCard">
        <picture className="flexCenterH">
          <IllustrationOttoOctavius />
        </picture>

        <br id="hs" />

        <aside className="gridCenterV textCenter">
          <p className="quoteFont">
            <span className="mediumHeader flexLeftH">“</span>intelligence is not
            a privilege, it's a gift. and you use it for the good of mankind.
            <span className="mediumHeader flexRightH">„</span>
          </p>

          <span>
            <b>otto octavius</b> <br /> (spiderman 2)
          </span>
        </aside>
      </section>

      <section className="container vhalf quoteCard">
        <picture className="flexCenterH">
          <IllustrationSansaStark />
        </picture>

        <br id="hs" />

        <aside className="gridCenterV textCenter">
          <p className="quoteFont">
            <span className="mediumHeader flexLeftH">“</span>i'm a slow learner,
            that's true. but i learn.
            <span className="mediumHeader flexRightH">„</span>
          </p>

          <span>
            <b>sansa stark</b> <br /> (game of thrones)
          </span>
        </aside>
      </section>
    </Fragment>
  );
}

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
