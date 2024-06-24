import { Fragment } from "react/jsx-runtime";
import NavBar from "../components/NavBar";
import BotCard from "../components/BotCard";

export default function Work() {
  return (
    <Fragment>
      <NavBar />

      <header className="bigHeader">WORK</header>

      <section className="container">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
        pariatur sint temporibus asperiores sequi delectus harum recusandae
        voluptates possimus laborum repellendus officiis, cumque dicta
        consequatur quod natus voluptatem perferendis maiores.
      </section>

      <BotCard />
    </Fragment>
  );
}
