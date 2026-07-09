import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

const VARIANTS = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(2px)" },
};
const TRANSITION = {
  duration: 0.25,
  ease: "easeOut",
};

const AnimatedOutlet = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={VARIANTS}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={TRANSITION}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
