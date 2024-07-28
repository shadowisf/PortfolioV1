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
