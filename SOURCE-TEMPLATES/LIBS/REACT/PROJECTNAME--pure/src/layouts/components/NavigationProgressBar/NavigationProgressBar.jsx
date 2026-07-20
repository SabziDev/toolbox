import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

// TODO ProgressBar Color && Dir
const COLOR = "#COLOR";
const DIR = "ltr";

const SHOW_DURATION = 0.8;
const COMPLETE_DURATION = 0.2;
const HIDE_DELAY = 500;
const PROGRESS_KEYFRAMES = [
  0.02, 0.08, 0.2, 0.38, 0.55, 0.72, 0.84, 0.92, 0.96,
];

const NavigationProgressBar = () => {
  const [isShow, setIsShow] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const isPageFirstLoadRef = useRef(true);
  const completeTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    if (isPageFirstLoadRef.current) {
      isPageFirstLoadRef.current = false;

      return;
    }

    clearTimeout(completeTimeoutRef.current);
    clearTimeout(hideTimeoutRef.current);
    setIsShow(true);
    setIsCompleted(false);

    completeTimeoutRef.current = setTimeout(() => {
      setIsCompleted(true);
    }, SHOW_DURATION * 1000);
    hideTimeoutRef.current = setTimeout(
      () => {
        setIsShow(false);
      },
      SHOW_DURATION * 1000 + COMPLETE_DURATION * 1000 + HIDE_DELAY,
    );

    return () => {
      clearTimeout(completeTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          key={pathname}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isCompleted ? 1 : PROGRESS_KEYFRAMES,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: isCompleted ? COMPLETE_DURATION : SHOW_DURATION,
            ease: "easeOut",
          }}
          className={clsx([
            "fixed z-9999 h-1 w-full",
            "after:absolute after:top-0 after:h-full after:w-12 after:content-['']",
            "after:shadow-[0_0_20px_4px_var(--progress-bar-color)]",
            DIR === "ltr"
              ? "origin-left after:right-0"
              : "origin-right after:left-0",
          ])}
          style={{
            "--progress-bar-color": COLOR,
            backgroundColor: "var(--progress-bar-color)",
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default NavigationProgressBar;
