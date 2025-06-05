import useDarkMode from "use-dark-mode";
import { GlobalWrapperProps } from "./GlobalWrapper.types";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import ThemeToggleContext from "@/context/ThemeContext";

export const GlobalWrapper = ({ children }: GlobalWrapperProps) => {
  const darkMode = useDarkMode(true);
  const currentTheme = darkMode.value ? darkTheme : lightTheme;

  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      {isMounted && (
        <ThemeToggleContext.Provider
          value={{
            isDarkMode: darkMode.value,
            toggleTheme: darkMode.toggle,
          }}
        >
          {children}
        </ThemeToggleContext.Provider>
      )}
    </ThemeProvider>
  );
};
