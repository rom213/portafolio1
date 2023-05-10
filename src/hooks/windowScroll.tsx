import { useEffect, useState } from "react";

type scroll={
    scrollY:number
}

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<scroll>({
    scrollY: window.scrollY
  });

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition({
        scrollY:position
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScroll;
