import IllustrationSansaStark from "../assets/IllustrationSansaStark";
import { QuoteCard } from "../components/QuoteCards";

export default function Test() {
  return (
    <>
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
