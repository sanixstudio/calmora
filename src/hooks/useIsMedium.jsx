import { useState, useEffect } from "react";

function useIsBetweenMdAndLg() {
  const [isBetweenMdAndLg, setIsBetweenMdAndLg] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  ); 

  useEffect(() => {
    function handleResize() {
      setIsBetweenMdAndLg(
        window.innerWidth <= 1024
      );
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isBetweenMdAndLg;
}

export default useIsBetweenMdAndLg;
