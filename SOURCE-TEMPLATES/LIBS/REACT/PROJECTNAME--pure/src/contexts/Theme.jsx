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
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export { ThemeContextProvider };
export default ThemeContext;
