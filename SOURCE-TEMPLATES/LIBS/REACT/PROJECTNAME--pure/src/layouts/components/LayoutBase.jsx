import { ScrollRestoration } from "react-router";

import useCurrentPageStatus from "../hooks/useCurrentPageStatus";
import NavigationProgressBar from "./NavigationProgressBar/NavigationProgressBar";

const LayoutBase = () => {
  const { isPage404 } = useCurrentPageStatus();

  return (
    <>
      <ScrollRestoration />

      {!isPage404 && <NavigationProgressBar />}
    </>
  );
};

export default LayoutBase;
