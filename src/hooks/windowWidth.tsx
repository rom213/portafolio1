import { useEffect, useState } from "react";

type WindowWidth = {
  width: number;
};

const useWindowWidth = (): WindowWidth => {
  const [windowWidth, setWindowWidth] = useState<WindowWidth>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;

