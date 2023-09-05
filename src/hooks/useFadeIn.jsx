import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

const useFadeIn = (delay = 0.2, direction = "right") => {
  const isInView = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const animationProps = {
    variants: {
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
    },
    initial: "hidden",
    animate: controls,
    transition: {
      duration: 1.25,
      type: "tween",
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  };

  return animationProps;
};

export default useFadeIn;
