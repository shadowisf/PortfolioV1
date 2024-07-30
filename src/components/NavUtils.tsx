import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function PixelGrid() {
  function generatePixel(count: number) {
    return Array.from({ length: count }, () => (
      <span className="pixelItem"></span>
    ));
  }

  return <div className="pixelGrid">{generatePixel(64)}</div>;
}

export function pixelTransition() {
  const { contextSafe } = useGSAP();

  const start = contextSafe((destination: string, delay: number) => {
    setTimeout(() => {
      document.documentElement.style.setProperty("--overflow-y", "hidden");

      gsap.set(".pixelGrid", { display: "grid" });
      gsap.fromTo(
        ".pixelItem",
        { opacity: "0" },
        {
          opacity: "1",
          duration: "0.005",
          stagger: { amount: 0.5, from: "random" },
          onComplete: () => {
            setActiveContainer(destination);
            end();
          },
        }
      );
    }, delay);
  });

  const end = contextSafe(() => {
    setTimeout(() => {
      gsap.to(".pixelItem", {
        opacity: "0",
        duration: "0.005",
        stagger: { amount: 0.5, from: "random" },
        onComplete: () => {
          gsap.set(".pixelGrid", { display: "none" });
          document.documentElement.style.setProperty("--overflow-y", "scroll");
        },
      });
    }, 500);
  });

  return { start };
}

export function setActiveContainer(element: string) {
  const containerElements = document.querySelectorAll("main[id]");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  containerElements?.forEach((item) => {
    const id = item.getAttribute("id");

    if (id === element) {
      item.classList.remove("none");
    } else if (id !== element) {
      item.classList.add("none");
    }
  });
}
