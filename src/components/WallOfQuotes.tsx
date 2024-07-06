import { Fragment } from "react/jsx-runtime";
import IllustrationOttoOctavius from "../assets/IllustrationOttoOctavius";
import IllustrationSansaStark from "../assets/IllustrationSansaStark";

export default function WallOfQuotes() {
  return (
    <Fragment>
      <header className="largeHeader flexCenterH topMarginHUGE">
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

export const QuoteCard = ({
  children,
  who,
  where,
  img,
}: {
  children?: string | undefined;
  who?: string | undefined;
  where?: string | undefined;
  img?: React.ReactNode | undefined;
}) => {
  return (
    <section className="container vhalf quoteCard">
      <picture className="flexCenterH">{img}</picture>

      <br id="hs" />

      <aside className="gridCenterV textCenter">
        <p className="quoteFont">
          <span className="mediumHeader flexLeftH">“</span>
          {children}
          <span className="mediumHeader flexRightH">„</span>
        </p>

        <span>
          <b>{who}</b> <br /> ({where})
        </span>
      </aside>
    </section>
  );
};
