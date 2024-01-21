"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { useScreenSize } from "../utils/screensize";
import { motion } from "framer-motion";

// Component to making tablet of skills
interface Post {
  id: number;
  altImg: string;
  img: string;
}

interface Categories {
  [key: string]: Post[];
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

// For transition purpose
const fadeInOutVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const imageTransition = {
  type: "tween",
  duration: 0.7,
};

const Tables: React.FC = () => {
  // Adjust style depend on screensize
  const screenSize = useScreenSize();
  const widhtFormat = screenSize ? "w-[100vh]" : "w-[32vh]";
  const adjustGrid = screenSize ? "grid-cols-4" : "grid-cols-2";
  const imgWidht = screenSize ? "60" : "45";
  const h1Format = screenSize ? "text-lg" : "text-sm";
  // Skills data divided by category
  const [categories] = useState<Categories>({
    Languages: [
      {
        id: 1,
        altImg: "Typescript",
        img: "/Skills/typescript.png",
      },
      {
        id: 2,
        altImg: "JavaScript",
        img: "/Skills/javascript.png",
      },
      {
        id: 3,
        altImg: "Python",
        img: "/Skills/python.png",
      },
      {
        id: 4,
        altImg: "Java",
        img: "/Skills/java.png",
      },
    ],
    Frameworks: [
      {
        id: 1,
        altImg: "Nextjs",
        img: "/Skills/nextjs.png",
      },
      {
        id: 2,
        altImg: "Tailwind CSS",
        img: "/Skills/tailwind.png",
      },
      {
        id: 3,
        altImg: "ExpressJs",
        img: "/Skills/expressjs.png",
      },
    ],
    Libraries: [
      {
        id: 1,
        altImg: "React",
        img: "/Skills/react.png",
      },
      {
        id: 2,
        altImg: "Framer Motion",
        img: "/Skills/framer.png",
      },
      {
        id: 3,
        altImg: "Headless UI",
        img: "/Skills/headlessui.png",
      },
      {
        id: 4,
        altImg: "Styled Components",
        img: "/Skills/styledcomponents.png",
      },
    ],
    Etc: [
      {
        id: 1,
        altImg: "Vitejs",
        img: "/Skills/vitejs.png",
      },
      {
        id: 2,
        altImg: "Nodejs",
        img: "/Skills/nodejs.png",
      },
      {
        id: 3,
        altImg: "Git",
        img: "/Skills/git.png",
      },
    ],
  });

  return (
    <div className={`${widhtFormat} pb-16 pt-8 sm:px-0 mb-8`}>
      <Tab.Group>
        <Tab.List
          className={`grid ${adjustGrid} gap-1 rounded-xl bg-gradient-to-br from-[#371d4673] to-[#65358175] p-1`}
        >
          {Object.keys(categories).map((category) => (
            <motion.div
              key={category}
              variants={fadeInOutVariants}
              initial="hidden"
              animate="visible"
            >
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "focus:outline-none focus:ring-2 ring-[#904edb]",
                    selected
                      ? "bg-[#904edb] text-[#0d0e0d] shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-[#c0c1c6]"
                  )
                }
              >
                {category}
              </Tab>
            </motion.div>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-gradient-to-br from-[#4625581a] to-[#7c419e21] p-3"
              )}
            >
              <motion.div
                className={`grid ${adjustGrid} gap-4`}
                variants={fadeInOutVariants}
                initial="hidden"
                animate="visible"
              >
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="relative rounded-md hover:bg-[#393f68]"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={imageTransition}
                  >
                    <div className="p-4 flex flex-col items-center space-y-4 grayscale hover:grayscale-0 hover:scale-110 ease-in-out duration-500">
                      <Image
                        src={post.img}
                        width={imgWidht}
                        height={imgWidht}
                        alt={post.altImg}
                        className=""
                      />
                      <h1
                        className={`${h1Format} text-[#c0c1c6] text-center font-semibold`}
                      >
                        {post.altImg}
                      </h1>
                    </div>
                    <div
                      className="absolute top-0 left-0 w-full h-full bg-[#2e1e36] opacity-20 rounded-md"
                      style={{ zIndex: -1 }}
                    ></div>
                  </motion.div>
                ))}
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tables;
