function preventDefault(e: Event): void {
  e.preventDefault();
}

function preventScrollKeys(e: KeyboardEvent): void {
  const keys = new Set([37, 38, 39, 40]);
  if (keys.has(e.keyCode)) {
    e.preventDefault();
  }
}

export function disableScroll(status: boolean, invisScrollBar: boolean): void {
  const trackColor = invisScrollBar ? "transparent" : "var(--text-color)";
  const scrollbarColor = invisScrollBar ? "transparent" : "var(--text-color)";

  document.documentElement.style.setProperty(
    "--track-scrollbar-color",
    trackColor
  );
  document.documentElement.style.setProperty(
    "--scrollbar-color",
    scrollbarColor
  );

  if (status) {
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);
  } else {
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
    window.removeEventListener("keydown", preventScrollKeys);

    document.documentElement.style.setProperty(
      "--track-scrollbar-color",
      "transparent"
    );
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      "var(--text-color)"
    );
  }
}

export function disableMouse(status: boolean, delay: number): void {
  setTimeout(() => {
    document.body.style.pointerEvents = status ? "none" : "auto";
  }, delay);
}
