import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

const Label = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      Hello word
    </div>
  );
};

export default function UseContextHooks() {
  return (
    <div>
      <ThemeContext.Provider value={themes.light}>
        <Label />
      </ThemeContext.Provider>
    </div>
  );
}
