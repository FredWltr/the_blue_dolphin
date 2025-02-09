import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation(); // Destructure pathname and hash from the location

    useEffect(() => {
      if (hash) {
            const element = document.querySelector(hash); // Use hash to select the element
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
      } else {
            window.scrollTo(0, 0); // Scroll to top if no hash is present
      }
    }, [pathname, hash]); 

  return null;
};

export default ScrollToTop;