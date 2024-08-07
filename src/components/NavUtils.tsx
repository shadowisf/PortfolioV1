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

export function disableScroll(status: boolean, invisScrollBar: boolean) {
  if (status) {
    if (invisScrollBar) {
      document.documentElement.style.setProperty(
        "--track-scrollbar-color",
        "transparent"
      );
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        "transparent"
      );
    } else {
      document.documentElement.style.setProperty(
        "--track-scrollbar-color",
        "var(--text-color)"
      );
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        "var(--text-color)"
      );
    }
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);
  } else {
    document.documentElement.style.setProperty(
      "--track-scrollbar-color",
      "transparent"
    );
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      "var(--text-color)"
    );
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
    window.removeEventListener("keydown", preventScrollKeys);
  }
}

export function disableMouse(status: boolean, delay: number) {
  setTimeout(() => {
    if (status) {
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.pointerEvents = "auto";
    }
  }, delay);
}

export function pixelTransition() {
  const { contextSafe } = useGSAP();

  const start = contextSafe((destination: string, delay: number) => {
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
          disableScroll(false, true);
          disableMouse(false, 0);
        },
      });
    }, 250);
  });

  return { start };
}

export function setActiveContainer(element: string) {
  const containerElements = document.querySelectorAll("main[id]");

  gsap.to(window, { scrollTo: { y: 0, x: 0 }, duration: "0.1" });

  containerElements?.forEach((item) => {
    const id = item.getAttribute("id");

    if (id === element) {
      gsap.set(item, { display: "block" });
    } else if (id !== element) {
      gsap.set(item, { display: "none" });
    }
  });
}
