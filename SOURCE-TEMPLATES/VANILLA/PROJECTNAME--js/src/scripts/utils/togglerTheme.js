/*
const { theme } = toggleTheme();

  window.addEventListener("load", () => {
  document.documentElement.dataset.theme = theme;
});



const { theme, toggleTheme } = toggleTheme();
*/

import localStorageHelper from "./Helper/localStorageHelper";

const togglerTheme = () => {
  const [getTheme, setTheme] = localStorageHelper("theme", "light");

  const toggleTheme = () => setTheme(getTheme() === "light" ? "dark" : "light");

  return { theme: getTheme, toggleTheme };
};

export default togglerTheme;
