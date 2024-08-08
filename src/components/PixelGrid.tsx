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

  const [currentPage, setCurrentPage] = useState("about");

  const startTransition = contextSafe((destination: string, delay: number) => {
    if (destination === currentPage) {
      return;
    } else {
      disableMouse(true, 0);

      setCurrentPage(destination);

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
              changePage(destination);
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

  return { startTransition };
}

export function changePage(element: string) {
  const containerElements = document.querySelectorAll("main[id]");

  gsap.to(window, { scrollTo: { y: 0, x: 0 }, duration: "0.1" });

  containerElements?.forEach((item) => {
    const id = item.getAttribute("id");

    if (id === element) {
      gsap.set(item, { display: "block", autoAlpha: "1" });
    } else if (id !== element) {
      gsap.set(item, { display: "none", autoAlpha: "1" });
    }
  });
}
