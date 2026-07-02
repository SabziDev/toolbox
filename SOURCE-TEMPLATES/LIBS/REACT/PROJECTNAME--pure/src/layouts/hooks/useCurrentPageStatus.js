import { useMatches } from "react-router";

const useCurrentPageStatus = () => {
  const urlMatches = useMatches();
  const currentUrlMatch = urlMatches.at(-1);

  const isPage404 = currentUrlMatch.handle?.isPage404;
  const isHideLayout = currentUrlMatch.handle?.isHideLayout;

  return { isPage404, isHideLayout };
};

export default useCurrentPageStatus;
