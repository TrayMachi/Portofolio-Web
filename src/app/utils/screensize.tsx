'use client'
import { useState, useEffect } from "react";

// Utils for change behaviour between screensize of client
const useScreenSize = (): boolean => {
  const [screenSize, setScreenSize] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const handleResize = () => {
      setScreenSize(window.innerWidth > 1020);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }
  }, []); 

  return screenSize;
};

export { useScreenSize };

