import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

const useFadeIn = ({
  delay = 0,
  direction = "left",
  fullWidth = false,
  padding = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const animationProps = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const transition = {
    duration: 1.25,
    type: "tween",
    delay: delay,
    ease: [0.25, 0.25, 0.25, 0.75],
  };

  return {
    ref,
    controls,
    animationProps,
    transition,
    fullWidth,
    padding,
  };
};

export default useFadeIn;
