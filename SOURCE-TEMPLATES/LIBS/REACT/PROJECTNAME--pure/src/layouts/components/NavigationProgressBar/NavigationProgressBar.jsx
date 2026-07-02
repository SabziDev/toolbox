import { useEffect, useRef } from "react";
import { useLocation, useNavigation } from "react-router";
import LoadingBar from "react-top-loading-bar";

const progressBarProps = {
  // TODO ProgressBar BG - Dir
  color: "COLOR",
  shadow: false,
  height: 4,
  containerClassName: "DIR",
  loaderSpeed: 500,
  waitingTime: 1500,
};

const NavigationProgressBar = () => {
  const location = useLocation();
  const navigation = useNavigation();

  const LoadingBarRef = useRef();
  const setTimeoutIdRef = useRef(null);

  const isPageFirstLoadRef = useRef(true);

  const isPageFirstLoad = () => {
    if (isPageFirstLoadRef.current) {
      isPageFirstLoadRef.current = false;

      return true;
    }

    return false;
  };

  const startProgressBar = () => LoadingBarRef.current.start("static", 10);

  const completeProgressBar = () => {
    if (setTimeoutIdRef.current) {
      clearTimeout(setTimeoutIdRef.current);
      setTimeoutIdRef.current = null;
    }

    setTimeoutIdRef.current = setTimeout(() => {
      LoadingBarRef.current.complete();
      setTimeoutIdRef.current = null;
    }, 300);
  };

  useEffect(() => {
    if (isPageFirstLoad()) return;

    startProgressBar();

    navigation.state === "idle" && completeProgressBar();

    return () => clearTimeout(setTimeoutIdRef.current);
  }, [location.pathname, navigation.state]);

  return <LoadingBar ref={LoadingBarRef} {...progressBarProps} />;
};

export default NavigationProgressBar;
