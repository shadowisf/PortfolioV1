import { animateScroll, scroller } from "react-scroll";
import { useState } from "react";

export const scrollOptions = {
  duration: 500,
  smooth: true,
  offset: -100,
  ignoreCancelEvents: false,
};

// delay changing visibility of collapse containers
export const visibilityDelay = 2300;

// NOTE: visibilityDelay should go first then animationDelay

// delay changing headers
export const animationDelay = 2400;

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

    changeContainerVisibility("about", "block", "1", visibilityDelay);
    changeContainerVisibility("project", "none", "0", visibilityDelay);
    changeContainerVisibility("contact", "none", "0", visibilityDelay);

    setTimeout(() => {
      setAboutOpen(true);
    }, animationDelay);
  } else if (element === "project" && !isProjectOpen) {
    setAboutOpen(false);
    setContactOpen(false);

    changeContainerVisibility("project", "block", "1", visibilityDelay);
    changeContainerVisibility("about", "none", "0", visibilityDelay);
    changeContainerVisibility("contact", "none", "0", visibilityDelay);

    setTimeout(() => {
      setProjectOpen(true);
    }, animationDelay);
  } else if (element === "contact" && !isContactOpen) {
    setAboutOpen(false);
    setProjectOpen(false);

    changeContainerVisibility("contact", "block", "1", visibilityDelay);
    changeContainerVisibility("project", "none", "0", visibilityDelay);
    changeContainerVisibility("about", "none", "0", visibilityDelay);

    setTimeout(() => {
      setContactOpen(true);
    }, animationDelay);
  } else {
    scrollToElement("top");
  }
};
