"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";

// Loading screen component
const Noise = () => {
  // Making a noise wallpaper
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/black-noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[10%]"
    />
  );
};

const LoadingScreen: React.FC = () => {
  const words = [
    // Words in the loading page
    "Hello",
    "I'm",
    "Tristan",
    "Agra",
    "Yudhistira",
    "A",
    "Student",
    "And",
    "Fullstack Dev",
  ];
  useEffect(() => {
    // useEffect and gsap for the animation
    if (typeof window !== "undefined") {
      const tl = gsap.timeline();
      document.documentElement.style.overflowY = "hidden";

      for (let i = 1; i <= 9; i++) {
        const wordId = `#word${i}`;
        tl.to(wordId, { opacity: 1, duration: 0.2, ease: "power1.inOut" });
        tl.to(wordId, { opacity: 0, duration: 0.2, ease: "power1.inOut" });
      }

      tl.to("#loadingScreen", { opacity: 0, duration: 1.5 });
      tl.set("#loadingScreen", { display: "none" });
      tl.eventCallback("onComplete", () => {
        document.documentElement.style.overflowY = "auto";
      });
    }
  }, []);

  return (
    <ReactLenis>
      <div
        id="loadingScreen"
        className="fixed top-0 left-0 w-full h-full flex overflow-hidden justify-center items-center bg-[#111111] z-[999]"
      >
        <Noise />
        {words.map((word, index) => (
          <h1
            key={`word${index + 1}`}
            id={`word${index + 1}`}
            className="absolute opacity-0 text-[15vw] text-[#c0c1c6]"
          >
            {word}
          </h1>
        ))}
      </div>
    </ReactLenis>
  );
};

export default LoadingScreen;
