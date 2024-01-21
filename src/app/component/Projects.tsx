"use client";
import React, { useState } from "react";
import { useScreenSize } from "../utils/screensize";
import { motion } from "framer-motion";
import Skills from "./Skills";

interface Post {
  id: number;
  altImg: string;
  img: string;
  desc: string;
}

interface Categories {
  [key: string]: Post[];
}

const Projects = () => {
  // Change style based on screensize
  const screenSize = useScreenSize();
  const formatH1 = screenSize ? "text-4xl" : "text-2xl";
  const adjustGrid = screenSize ? "grid-cols-2" : "grid-cols-1";
  const defaultMX = useScreenSize() ? "mx-24" : "mx-auto";
  
  // Data for image and desc of project
  const [categories] = useState<Categories>({
    project1: [
      {
        id: 1,
        altImg: "Portofolio Website",
        img: "/Project/project1.png",
        desc: "This is my personal portfolio website (yes, you're currently on it), built using Next.js, Typescript, Tailwind CSS, and other external libraries.",
      },
    ],
    project2: [
      {
        id: 2,
        altImg: "Template",
        img: "/Project/project2.png",
        desc: "Cuman template banh, saya kurang project :')",
      },
    ],
  });

  return (
    <>
      <div className="flex flex-col justify-center mx-auto items-center px-6 relative">
        <div>
          <div className="my-12 flex justify-center">
            <h1 className={`${formatH1} font-bold`}>Project</h1>
          </div>
        </div>
        <div
          className={`max-w-full mb-12 grid ${adjustGrid} ${defaultMX} gap-8`}
        >
          {Object.keys(categories).map((category) =>
            categories[category].map((post) => (
              <div
                key={post.id}
                className="bg-gradient-to-br from-[#4625581a] to-[#7c419e21] border border-gray-200 rounded-lg shadow dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg object-fill"
                    src={post.img}
                    width="100%"
                    height="100%"
                    alt={post.altImg}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {post.altImg}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-400">{post.desc}</p>
                  <motion.a
                    whileTap={{ scale: 0.85 }}
                    href=""
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg bg-[#904edb] hover:bg-[#632f77] active:bg-[#7d3699] text-[#0d0e0d] hover:scale-105 transform transition duration-300"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Projects;
