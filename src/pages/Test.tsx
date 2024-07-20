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
        TESTTEST2
      </QuoteCard>
    </>
  );
}
