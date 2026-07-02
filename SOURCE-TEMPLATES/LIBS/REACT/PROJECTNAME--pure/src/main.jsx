import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import AppProviders from "./AppProviders.jsx";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
