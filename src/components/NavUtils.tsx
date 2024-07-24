import { animateScroll, scroller } from "react-scroll";
import { useState } from "react";

export const scrollOptions = {
  duration: 500,
  smooth: true,
  offset: -100,
  ignoreCancelEvents: false,
};

// delay changing headers
export const animationDelay = 2300;

// delay of collapse container after changing headers
export const transitionDelayAfter = "1.8s";

// duration of collapsing container
export const transitionDuration = "1s";

document.documentElement.style.setProperty("--transition-delay-after", transitionDelayAfter);
document.documentElement.style.setProperty("--transition-duration", transitionDuration);

export const useToggleStates = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  return {
    isAboutOpen,
    setAboutOpen,
    isProjectOpen,
    setProjectOpen,
    isContactOpen,
    setContactOpen,
  };
};

export const scrollToElement = (element: string) => {
  if (element === "top") {
    animateScroll.scrollTo(0, scrollOptions);
  } else {
    scroller.scrollTo(element, scrollOptions);
  }
};

export const changeContainerVisibility = (
  element: string,
  display: string,
  opacity: string,
  delay: number
) => {
  let header = document.getElementById(element + "Header");
  let container = document.getElementById(element + "Container");

  if (header && container) {
    setTimeout(() => {
      header.style.display = display;
      container.style.display = display;

      header.style.opacity = opacity;
      container.style.opacity = opacity;
    }, delay);
  }
};

export const collapseContainer = (
  element: string,
  isAboutOpen: boolean,
  setAboutOpen: (state: boolean) => void,
  isProjectOpen: boolean,
  setProjectOpen: (state: boolean) => void,
  isContactOpen: boolean,
  setContactOpen: (state: boolean) => void
) => {
  scrollToElement("top");

  if (element === "about" && !isAboutOpen) {
    setProjectOpen(false);
    setContactOpen(false);

    changeContainerVisibility("about", "block", "1", animationDelay);
    changeContainerVisibility("project", "none", "0", animationDelay);
    changeContainerVisibility("contact", "none", "0", animationDelay);

    setTimeout(() => {
      setAboutOpen(true);
    }, animationDelay);
  } else if (element === "project" && !isProjectOpen) {
    setAboutOpen(false);
    setContactOpen(false);

    changeContainerVisibility("project", "block", "1", animationDelay);
    changeContainerVisibility("about", "none", "0", animationDelay);
    changeContainerVisibility("contact", "none", "0", animationDelay);

    setTimeout(() => {
      setProjectOpen(true);
    }, animationDelay);
  } else if (element === "contact" && !isContactOpen) {
    setAboutOpen(false);
    setProjectOpen(false);

    changeContainerVisibility("contact", "block", "1", animationDelay);
    changeContainerVisibility("project", "none", "0", animationDelay);
    changeContainerVisibility("about", "none", "0", animationDelay);

    setTimeout(() => {
      setContactOpen(true);
    }, animationDelay);
  } else {
    scrollToElement("top");
  }
};
