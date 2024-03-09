import { useEffect, useRef, useState } from "react";

const useMeasure = () => {
  const [divWidth, setDivWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        if (window.innerWidth > 500) {
  
          setDivWidth(ref.current.offsetWidth + 10);
        } else {
          setDivWidth(ref.current.offsetWidth);
        }
      }
    };

    // Initial width on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { divWidth, ref };
};

export default useMeasure;
