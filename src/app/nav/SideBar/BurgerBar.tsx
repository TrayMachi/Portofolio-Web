import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./Animation";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import { useScreenSize } from "../../utils/screensize";

interface NavItem {
  title: string;
  href: string;
}

interface NavProps {
  onClose: () => void;
}

const navItems: NavItem[] = [
  {
    title: "Profile",
    href: "#Profile",
  },
  {
    title: "Experience",
    href: "#Experience",
  },
  {
    title: "Project",
    href: "#Project",
  },
  {
    title: "Contact",
    href: "#Contact",
  },
];

const Index: React.FC<NavProps> = ({ onClose }) => {
  const pathname = usePathname();
  const screenSize = useScreenSize();
  const navWidht = screenSize ? "w-[30%]" : "w-[100vw]";
  const navPady = screenSize ? "py-[100px]" : "pt-[50px] pb-[100px]";
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`h-screen ${navWidht} bg-[#1c0e2c9a] backdrop-blur-md fixed right-0 top-0 text-white z-[500]`}
    >
      <div
        className={`box-border h-full px-[70px] ${navPady} flex flex-col justify-between`}
      >
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[32px] md:text-[56px] gap-3 mt-20"
        >
          <div className="text-[#999999] border-b-[1px] border-[#999999] border-solid pb-2 uppercase text-[11px] mb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <div key={index} onClick={onClose}>
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Index;
