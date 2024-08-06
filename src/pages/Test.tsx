import { Flip } from "gsap/Flip";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip, gsap, useGSAP);

export function Test() {
  function collapse() {
    const squareLeft = document.getElementById("squareLeft");
    const squareRight = document.getElementById("squareRight");
    const projectCards = document.querySelector(".projectCards");

    gsap.to(squareLeft, {
      width: "100%",
      ease: "power2.inOut",
    });

    gsap.to(squareRight, {
      width: "0",
      margin: "0",
      padding: "0",
      height: "0",
      border: "none",
      onComplete: () => {
        gsap.to(squareRight, { autoAlpha: "0" });
      },
    });

    gsap.to(projectCards, { gap: "0" });
  }

  return (
    <main className="container topMargin bottomMargin">
      <div className="projectCards">
        <div onClick={() => collapse()} id="squareLeft" className="square">
          <h1>1</h1>
        </div>
        <div id="squareRight" className="square">
          <h1>2</h1>
        </div>
      </div>
    </main>
  );
}
