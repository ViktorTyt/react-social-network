export const theme = Object.freeze({
  colors: {
    accent: "#FFA500",
    white: "#ffffff",
    gray: "#9e9e9e",
    light: "#f2f2f2",
    dark: "#212121",
    darkOpange: "#ff7700",
    lightblue: "#444777",
    darkbackground: "#262626",
    // lightblue: '#cce8ff',

    mainBackground: ["linear-gradient(to bottom, #c9d6ff,  #e2e2e2)"],
    tagBackground: ["linear-gradient(to bottom, #FFD194, #D1913C)"],
    lightMode: {
      textColor: "#000",
      bg: "white",
      logo: "darkblue",
      bgSoft: "#f6f3f3",
      textColorSoft: "#555",
      border: "lightgray",
    },
    darkMode: {
      textColor: "whitesmoke",
      bg: "#222",
      logo: "white",
      bgSoft: "#333",
      textColorSoft: "lightgray",
      border: "#444",
    },
  },
  fontSizes: {
    small: "14px",
    medium: "18px",
    large: "22px",
  },
  spacing: (value) => `${4 * value}px`,
  shadows: {
    small: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
    regular: "0px 4px 10px 4px #000000",
    medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
  },
  animation: {
    cubicBezierV1: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
    cubicBezierV2: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
});
