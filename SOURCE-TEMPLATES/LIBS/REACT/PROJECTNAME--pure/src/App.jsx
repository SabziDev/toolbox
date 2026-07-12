import { useEffect } from "react";
import { RouterProvider } from "react-router";

import logDeveloperSignature from "./layouts/components/DeveloperSignature/logDeveloperSignature";
import router from "./routes";

const removeAppPreloader = () => {
  document.body.classList.remove("overflow-hidden");
  document.querySelector("#app-preloader")?.remove();
};

const App = () => {
  useEffect(() => {
    logDeveloperSignature();
    removeAppPreloader();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
