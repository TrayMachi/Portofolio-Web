"use client";
import React from "react";
import Image from "next/image";
import { useScreenSize } from "../utils/screensize";
import { motion } from "framer-motion";
import Skills from "./Skills";
import { RxExternalLink } from "react-icons/rx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import Link from "next/link";


const Projects = () => {
  // Change style based on screensize
  const screenSize = useScreenSize();
  const formatH1 = screenSize ? "text-4xl" : "text-2xl";
  const defaultMX = useScreenSize() ? "mx-24" : "mx-auto";

  // Data for image and desc of project
  const categories = [
    {
      id: 1,
      altImg: "Compfest",
      img: "/Project/project4.png",
      desc: "Compfest is the biggest student-held IT event in Indonesia. I contributed as Software Engineer at Compfest by using NextJs & NestJs.",
      ref: "https://compfest.id/",
      demo: "https://compfest.id/",
    },
    {
      id: 2,
      altImg: "Expense Tracker Website",
      img: "/Project/project2.png",
      desc: "Web app that help you track your income & expense. Built using Next.js, AppWrite BaaS, and Shadcn UI.",
      ref: "https://github.com/TrayMachi/money-web",
      demo: "https://money-managements.vercel.app/",
    },
    {
      id: 3,
      altImg: "Sistem Perekrutan Terbuka",
      img: "/Project/project3.png",
      desc: "Web app that help you find volunteer for your event. Built using Next.js, Firebase NoSQL, and Shadcn UI.",
      ref: "",
      demo: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center mx-auto items-center px-6 relative">
        <div>
          <div className="my-12 flex justify-center">
            <h1 className={`${formatH1} font-bold`}>Web Experience</h1>
          </div>
        </div>
        <div
          className={`mb-12 max-md:max-w-[270px]`}
        >
          <Carousel className="md:mx-16">
            <CarouselContent className="gap-8">
              {Array.from(categories).map((post) => (
                <CarouselItem
                  key={post.id}
                  className="bg-gradient-to-br lg:basis-1/2 xl:basis-1/3 p-0 from-[#4625581a] to-[#7c419e21] border rounded-lg shadow-lg border-gray-700"
                >
                  <Link href={post.ref} target="_blank">
                    <Image
                      className="rounded-t-lg object-cover"
                      src={post.img}
                      width="700"
                      height="700"
                      alt={post.altImg}
                    />
                  </Link>
                  <div className="p-5">
                    <Link href={post.ref} target="_blank">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {post.altImg}
                      </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-400 text-justify">
                      {post.desc}
                    </p>
                    <div className="flex items-center space-x-4">
                      <motion.a
                        whileTap={{ scale: 0.85 }}
                        href={post.ref}
                        target="_blank"
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
                      <motion.a
                        whileTap={{ scale: 0.85 }}
                        href={post.demo}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg bg-[#b33e95] hover:bg-[#832e6e] active:bg-[#fcd7f3] text-[#0d0e0d] hover:scale-105 transform transition duration-300"
                      >
                        <p className="px-1">Live Demo</p>
                        <RxExternalLink />
                      </motion.a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Projects;
