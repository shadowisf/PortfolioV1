import { animateScroll, scroller } from "react-scroll";
import { useState } from "react";

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

export const scrollOptions = {
  duration: 500,
  smooth: true,
  offset: -100,
  ignoreCancelEvents: false,
};

export const animationDelay = 1100;
export const quoteDelay = 2500;

export const scrollTo = (
  element: string,
  isAboutOpen: boolean,
  isProjectOpen: boolean,
  isContactOpen: boolean
) => {
  if (
    (element === "about" && isAboutOpen) ||
    (element === "project" && isProjectOpen) ||
    (element === "contact" && isContactOpen)
  ) {
    setTimeout(() => {
      scroller.scrollTo(element, scrollOptions);
    }, 0);
  } else {
    animateScroll.scrollTo(0, scrollOptions);
  }
};

export const hideDiv = (
  elementHeader: string,
  elementContainer: string,
  when?: string
) => {
  let divHeader = document.getElementById(elementHeader);
  let divContainer = document.getElementById(elementContainer);

  if (divHeader && divContainer && when === "delay") {
    setTimeout(() => {
      divHeader.style.display = "none";
      divContainer.style.display = "none";
      divHeader.style.opacity = "0";
      divContainer.style.opacity = "0";
    }, 1000);
  } else if (divHeader && divContainer && when === "now") {
    setTimeout(() => {
      divHeader.style.opacity = "0";
      divContainer.style.opacity = "0";
      divHeader.style.display = "none";
      divContainer.style.display = "none";
    }, 0);
  }
};

export const showDiv = (
  elementHeader: string,
  elementContainer: string,
  when?: string,
  display?: string
) => {
  let divHeader = document.getElementById(elementHeader);
  let divContainer = document.getElementById(elementContainer);

  if (divHeader && divContainer && when === "delay" && display === "block") {
    setTimeout(() => {
      divHeader.style.display = "block";
      divContainer.style.display = "block";
      divContainer.style.opacity = "1";
      divHeader.style.opacity = "1";
    }, 1000);
  } else if (
    divHeader &&
    divContainer &&
    when === "now" &&
    display === "block"
  ) {
    setTimeout(() => {
      divHeader.style.display = "block";
      divContainer.style.display = "block";
      divContainer.style.opacity = "1";
      divHeader.style.opacity = "1";
    }, 0);
  } else if (
    divHeader &&
    divContainer &&
    when === "delay" &&
    display === "flex"
  ) {
    setTimeout(() => {
      divHeader.style.display = "flex";
      divContainer.style.display = "block";
      divContainer.style.opacity = "1";
      divHeader.style.opacity = "1";
    }, 1000);
  }
};

export const collapseDiv = (
  element: string,
  isAboutOpen: boolean,
  setAboutOpen: (state: boolean) => void,
  isProjectOpen: boolean,
  setProjectOpen: (state: boolean) => void,
  isContactOpen: boolean,
  setContactOpen: (state: boolean) => void
) => {
  if (element === "about" && !isAboutOpen) {
    hideDiv("woqHeader", "woqContainer", "delay");
    setContactOpen(false);
    setProjectOpen(false);

    showDiv("aboutHeader", "aboutContainer", "delay", "block");
    hideDiv("contactHeader", "contactContainer", "delay");
    hideDiv("projectHeader", "projectContainer", "delay");

    setTimeout(() => {
      setAboutOpen(!isAboutOpen);
    }, animationDelay);

    setTimeout(() => {
      showDiv("woqHeader", "woqContainer", "delay", "flex");
    }, quoteDelay);

    scrollTo(element, isAboutOpen, isProjectOpen, isContactOpen);
  }

  if (element === "project" && !isProjectOpen) {
    hideDiv("woqHeader", "woqContainer", "delay");
    setContactOpen(false);
    setAboutOpen(false);

    showDiv("projectHeader", "projectContainer", "delay", "block");
    hideDiv("contactHeader", "contactContainer", "delay");
    hideDiv("aboutHeader", "aboutContainer", "delay");

    setTimeout(() => {
      setProjectOpen(!isProjectOpen);
    }, animationDelay);

    setTimeout(() => {
      showDiv("woqHeader", "woqContainer", "delay", "flex");
    }, quoteDelay);

    scrollTo(element, isAboutOpen, isProjectOpen, isContactOpen);
  }

  if (element === "contact" && !isContactOpen) {
    hideDiv("woqHeader", "woqContainer", "delay");
    setAboutOpen(false);
    setProjectOpen(false);

    showDiv("contactHeader", "contactContainer", "delay", "block");
    hideDiv("projectHeader", "projectContainer", "delay");
    hideDiv("aboutHeader", "aboutContainer", "delay");

    setTimeout(() => {
      setContactOpen(!isContactOpen);
    }, animationDelay);

    setTimeout(() => {
      showDiv("woqHeader", "woqContainer", "delay", "flex");
    }, quoteDelay);

    scrollTo(element, isAboutOpen, isProjectOpen, isContactOpen);
  }
};
