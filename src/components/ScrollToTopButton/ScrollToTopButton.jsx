import { useState } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <motion.button
      className={`fixed bottom-10 right-10 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] animate-bounce text-white p-2 rounded-full ${
        showButton ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
};

export default ScrollToTopButton;
