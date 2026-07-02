import logDeveloperSignature from "../developer-signature/logDeveloperSignature";
import $ from "./utils/$/$";

// import { NAME_NAME } from "@public/data/constants";
// import { NAME } from "./utils/utils";

// import { NAME } from "./modules/NAME.js"

// const rootElem = document.documentElement;

//? ......................................................................................

// const appLoadErrorElem = $("#app-load-error");

// const showAppLoadError = () => {
//   document.body.classList.add("overflow-hidden");
//   appLoadErrorElem.classList.remove("hidden");
// };

//  codes...

const removeAppPreloader = () => {
  setTimeout(() => {
    $("#app-preloader")?.remove();
    document.body.classList.remove("overflow-hidden");
  }, 300);
};

window.addEventListener("load", () => {
  removeAppPreloader();

  logDeveloperSignature();
});
