import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

// TODO ProgressBar Color
const PROGRESS_BAR_COLOR = "bg-COLOR";

const SHOW_DURATION = 0.8;
const COMPLETE_DURATION = 0.2;
const HIDE_DELAY = 150;
const COMPLETE_DELAY = SHOW_DURATION * 1000;
const HIDE_TIMEOUT = COMPLETE_DELAY + COMPLETE_DURATION * 1000 + HIDE_DELAY;
const PROGRESS_KEYFRAMES = [
  0.02, 0.08, 0.2, 0.38, 0.55, 0.72, 0.84, 0.92, 0.96,
];

const NavigationProgressBar = () => {
  const { pathname } = useLocation();

  const previousPathnameRef = useRef(pathname);
  const completeTimeoutRef = useRef();
  const hideTimeoutRef = useRef();

  const [visible, setVisible] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;

    previousPathnameRef.current = pathname;

    clearTimeout(completeTimeoutRef.current);
    clearTimeout(hideTimeoutRef.current);

    setVisible(true);
    setCompleted(false);

    completeTimeoutRef.current = setTimeout(() => {
      setCompleted(true);
    }, COMPLETE_DELAY);

    hideTimeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, HIDE_TIMEOUT);

    return () => {
      clearTimeout(completeTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={pathname}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: completed ? 1 : PROGRESS_KEYFRAMES,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: completed ? COMPLETE_DURATION : SHOW_DURATION,
            ease: "easeOut",
          }}
          className={clsx([
            "fixed top-0 left-0 z-9999 h-1 w-full origin-left",
            PROGRESS_BAR_COLOR,
          ])}
        />
      )}
    </AnimatePresence>
  );
};

export default NavigationProgressBar;
