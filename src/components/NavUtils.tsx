import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

gsap.registerPlugin(useGSAP);

export function PixelGrid() {
  function generatePixel(count: number) {
    return Array.from({ length: count }, (_, index) => (
      <span key={index} className="pixelItem"></span>
    ));
  }

  return <div className="pixelGrid">{generatePixel(64)}</div>;
}

const preventDefault = (e: Event) => {
  e.preventDefault();
};

const preventScrollKeys = (e: KeyboardEvent) => {
  const keys = [37, 38, 39, 40];
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
  }
};

function toggleScroll(status: boolean) {
  if (status) {
    document.documentElement.style.setProperty(
      "--track-scrollbar-color",
      "var(--text-color)"
    );
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);
  } else {
    document.documentElement.style.setProperty(
      "--track-scrollbar-color",
      "transparent"
    );
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
    window.removeEventListener("keydown", preventScrollKeys);
  }
}

export function pixelTransition() {
  const { contextSafe } = useGSAP();

  const start = contextSafe((destination: string, delay: number) => {
    setTimeout(() => {
      toggleScroll(true);

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
          toggleScroll(false);
        },
      });
    }, 250);
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
