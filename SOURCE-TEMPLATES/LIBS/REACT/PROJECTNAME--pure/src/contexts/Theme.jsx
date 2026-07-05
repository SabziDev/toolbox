/* eslint-disable @eslint-react/no-unstable-context-value */

/*
<ThemeContextProvider>
  
</ThemeContextProvider>


const { theme } = use(ThemeContext);

useLayoutEffect(() => {
  document.documentElement.dataset.theme = theme;
  }, [theme]);



  const { theme, toggleTheme } = use(ThemeContext);
*/

import { createContext } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

const ThemeContext = createContext("light");
ThemeContext.displayName = "ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [storedTheme, setStoredTheme] = useLocalStorage({
    key: "theme",
    defaultValue: "light",
  });

  const toggleTheme = () =>
    setStoredTheme(storedTheme === "light" ? "dark" : "light");

  return (
    <ThemeContext value={{ theme: storedTheme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};

export { ThemeContextProvider };
export default ThemeContext;
