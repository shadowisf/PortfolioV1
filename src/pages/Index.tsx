import { Fragment } from "react/jsx-runtime";
import NavBar from "../components/NavBar";
import BotCard from "../components/BotCard";

export default function Index() {
  return (
    <Fragment>
      <NavBar />

      <header className="bigHeader">INDEX</header>

      <section className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda
        recusandae porro corporis autem? Explicabo, repudiandae repellat sed
        quaerat eum soluta est totam nulla optio aperiam laborum voluptatibus
        eius accusamus vero veniam, nobis eligendi earum esse sint officia qui
        quasi tempore incidunt! Fuga harum ea alias assumenda libero tenetur.
        Earum laudantium dolorum neque, veniam autem omnis perspiciatis iusto
        eveniet velit debitis alias itaque illo incidunt labore nihil corrupti
        necessitatibus, vitae explicabo eligendi nam eius corporis esse quia
        sint. Modi dignissimos exercitationem quasi, quia laudantium eos
        molestias sit veritatis tempore fugiat vitae at itaque unde nostrum
        alias optio maxime commodi perferendis!
      </section>

      <BotCard />
    </Fragment>
  );
}
