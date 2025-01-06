import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    console.log("Dark Mode Media Query", darkModeMediaQuery.matches);

    setTheme(darkModeMediaQuery.matches ? "dark" : "light");

    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    console.log("Theme Context", theme);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };

  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);