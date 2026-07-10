import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const RoutePreloader = () => {
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      document.documentElement.classList.add("overflow-hidden");
      setIsShowPreloader(true);
    }, 500);

    return () => {
      clearTimeout(setTimeoutId);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  return createPortal(
    isShowPreloader && (
      <div id="route-preloader">
        <div className="route-preloader__pulse" />
      </div>
    ),
    document.body,
  );
};

export default RoutePreloader;
