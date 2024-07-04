export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getLuminance = (color: string) => {
  const hex = color.slice(1);
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const sRGB = [r, g, b].map((channel) =>
    channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4)
  );
  return sRGB[0] * 0.2126 + sRGB[1] * 0.7152 + sRGB[2] * 0.0722;
};

export const calculateContrastRatio = (
  foregroundColor: string,
  backgroundColor: string
) => {
  const calculateContrast = (foreground: any, background: any) => {
    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };

  return calculateContrast(foregroundColor, backgroundColor);
};

export const generateADACompliantColors = () => {
  let bgColor, textColor;
  do {
    bgColor = getRandomColor();
    textColor = getRandomColor();
  } while (
    calculateContrastRatio(textColor, bgColor) < 7 ||
    calculateContrastRatio(textColor, bgColor) < 4.5 ||
    calculateContrastRatio(bgColor, textColor) < 7
  );

  const textColorLD = lightOrDark(textColor);

  document.documentElement.style.setProperty("--text-color", textColor);
  document.documentElement.style.setProperty("--background-color", bgColor);

  if (textColorLD === "light") {
    document.documentElement.style.setProperty("--svg-inner-color", textColor);
    document.documentElement.style.setProperty("--svg-outer-color", bgColor);
  } else {
    document.documentElement.style.setProperty("--svg-inner-color", bgColor);
    document.documentElement.style.setProperty("--svg-outer-color", textColor);
  }
};

export const keyControls = () => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "E") {
      generateADACompliantColors();
    }

    if (event.key === "Tab" || event.key === " ") {
      event.preventDefault();
    }
  });

  document.removeEventListener;
};

export function lightOrDark(color) {
  // https://awik.io/determine-color-bright-dark-using-javascript/

  var r, g, b, hsp;

  if (color.match(/^rgb/)) {
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
}
