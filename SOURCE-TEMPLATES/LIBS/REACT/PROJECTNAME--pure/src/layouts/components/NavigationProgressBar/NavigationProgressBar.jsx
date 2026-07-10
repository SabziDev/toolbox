import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

// TODO ProgressBar Color
const PROGRESS_BAR_COLOR = "bg-COLOR";
const SHOW_DURATION = 0.8;
const COMPLETE_DURATION = 0.2;
const HIDE_DELAY = 150;
const PROGRESS_KEYFRAMES = [
  0.02, 0.08, 0.2, 0.38, 0.55, 0.72, 0.84, 0.92, 0.96,
];

const NavigationProgressBar = () => {
  const { pathname } = useLocation();

  const isPageFirstLoadRef = useRef(true);
  const completeTimeoutRef = useRef();
  const hideTimeoutRef = useRef();

  const [isShow, setIsShow] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

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
          className={`fixed top-0 left-0 z-9999 h-1 w-full origin-left ${PROGRESS_BAR_COLOR}`}
        />
      )}
    </AnimatePresence>
  );
};

export default NavigationProgressBar;
