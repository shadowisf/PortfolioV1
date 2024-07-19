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

export function lightOrDark(color: string): string {
  let r: number, g: number, b: number, hsp: number;

  if (color.match(/^rgb/)) {
    const match = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    if (match) {
      r = parseInt(match[1]);
      g = parseInt(match[2]);
      b = parseInt(match[3]);
    } else {
      throw new Error("Invalid color format");
    }
  } else {
    const hex = color.slice(1);
    const hexVal = hex.length < 5 ? hex.replace(/./g, "$&$&") : hex;
    const numericColor = parseInt(hexVal, 16);

    r = numericColor >> 16;
    g = (numericColor >> 8) & 255;
    b = numericColor & 255;
  }

  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  return hsp > 127.5 ? "light" : "dark";
}
