export type ColorKey = "background" | "light" | "mid" | "vibrant" | "text" | "contrastText";

type Theme = { [K in ColorKey]: string };
const theme: Theme = {
  light: "#ffe5ec",
  mid: "#ffc2d1",
  vibrant: "#ff8fab",

  text: "#0d1321",
  contrastText: "#ffffff",
  background: "#ffffff",
};

export default theme;
