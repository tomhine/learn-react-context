import React from "react";

export const theme = {
  light: {
    text: "#000000",
    element: "#f5f5f5",
    background: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.15)",
  },
  dark: {
    text: "#ffffff",
    element: "#333333",
    background: "#000000",
    shadowColor: "rgba(0, 0, 0, 0.3)",
  },
};

const ThemeContext = React.createContext(theme.dark);

export default ThemeContext;
