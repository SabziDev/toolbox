import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

const pageVariants = {
  initial: { opacity: 0, y: 10, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(5px)" },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut",
  delay: 0.4,
};

const AnimatedOutlet = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        animate="animate"
        exit="exit"
        initial="initial"
        transition={pageTransition}
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
