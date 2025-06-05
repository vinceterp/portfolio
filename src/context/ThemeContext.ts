import React from "react";

type ThemeToggleContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeToggleContext = React.createContext<ThemeToggleContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export default ThemeToggleContext;
