import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { disableMouse, disableScroll } from "../utils/EventUtils";

gsap.registerPlugin(useGSAP, gsap);

export function PixelGrid() {
  function generatePixel(count: number) {
    return Array.from({ length: count }, (_, index) => (
      <span key={index} className="pixelItem"></span>
    ));
  }

  return <div className="pixelGrid">{generatePixel(64)}</div>;
}

export function pixelTransition() {
  const { contextSafe } = useGSAP();

  const [currentPage, setCurrentPage] = useState("");

  const startTransition = contextSafe((targetPage: string, delay: number) => {
    if (targetPage === currentPage) {
      return;
    } else {
      disableMouse(true, 0);

      setTimeout(() => {
        disableScroll(true, false);

        gsap.set(".pixelGrid", { display: "grid" });
        gsap.fromTo(
          ".pixelItem",
          { opacity: "0" },
          {
            opacity: "1",
            duration: "0.005",
            stagger: { amount: 0.5, from: "random" },
            onComplete: () => {
              changePage(targetPage);
              endTransition();
            },
          }
        );
      }, delay);
    }
  });

  const endTransition = contextSafe(() => {
    setTimeout(() => {
      gsap.to(".pixelItem", {
        opacity: "0",
        duration: "0.005",
        stagger: { amount: 0.5, from: "random" },
        onComplete: () => {
          gsap.set(".pixelGrid", { display: "none" });
          disableScroll(false, true);
          disableMouse(false, 0);
        },
      });
    }, 250);
  });

  function changePage(targetID: string) {
    setCurrentPage(targetID);

    const containerElements = document.querySelectorAll("main[id]");

    gsap.to(window, { scrollTo: { y: 0, x: 0 }, duration: "0.1" });

    containerElements?.forEach((element) => {
      const id = element.getAttribute("id");

      if (id === targetID) {
        gsap.set(element, { display: "block", autoAlpha: "1" });
      } else if (id !== targetID) {
        gsap.set(element, { display: "none", autoAlpha: "0" });
      }
    });
  }

  return { startTransition, changePage };
}
