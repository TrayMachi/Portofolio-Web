import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "./Animation";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

interface IndexProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const Index: React.FC<IndexProps> = ({
  data,
  isActive,
  setSelectedIndicator,
}) => {
  const { title, href, index } = data;
  const lenis = useLenis(() => {});
  const handleClick = () => {
    lenis.scrollTo(href, { duration: 3 });
  };

  return (
    <ReactLenis root>
      <motion.div
        className="relative flex items-center"
        onMouseEnter={() => {
          setSelectedIndicator(href);
        }}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          variants={scale}
          animate={isActive ? "open" : "closed"}
          className="w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-30px]"
        ></motion.div>
        <Link href={href} onClick={handleClick}>
          {title}
        </Link>
      </motion.div>
    </ReactLenis>
  );
};

export default Index;
