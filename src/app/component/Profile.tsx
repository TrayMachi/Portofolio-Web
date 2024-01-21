"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useScreenSize } from "../utils/screensize";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const Profile: React.FC = () => {
  // Change style based on screensize
  const screenSize = useScreenSize();
  const h1Format = screenSize ? "text-5xl" : "text-4xl";
  const h2Format = screenSize ? "text-3xl" : "text-lg";
  const padMargin = screenSize ? "px-8" : "";
  const textFormat = screenSize ? "text-[21px]" : "text-[16px]";

  const career = useRef<HTMLSpanElement>(null);

  useEffect(() => { // useEffect for making animation typing of career
    if (career.current) {
      const typed = new Typed(career.current, {
        strings: ["Fullstack Developer.", "Computer Science Student."],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 500,
        startDelay: 500,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div
      id="Profile"
      className={`flex justify-center mx-auto items-center ${padMargin}`}
    >
      <div>
        <div className="mt-24 px-8">
          <h1 className={`${h1Format} font-semibold pb-8`}>
            Greetings! I&apos;m{" "}
            <span className="text-[#904edb]">Tristan Agra Yudhistira</span>
          </h1>
          <h2 className={`${h2Format} pb-8 font-bold`}>
            a <span ref={career} className="text-[#9b5de2]" />
          </h2>
          <div
            className={`flex items-center justify-center ${
              !screenSize ? "pt-4 pb-12" : "hidden"
            }`}
          >
            <Image
              src="/Profile/tristan.png"
              width="300"
              height="400"
              alt="Tristan"
              className={`border border-[#4e4e55] rounded-[100%] ${
                !screenSize ? "" : "hidden"
              }`}
            />
          </div>
          <hr className="border-t-2 border-[#2f2f35]" />
          <p className={`text-justify pb-12 pt-8 ${textFormat}`}>
            An enthusiastic Computer Science undergraduate student at the
            University of Indonesia. Actively working towards realizing my
            aspiration of becoming a proficient Full Stack Developer. Through my
            academic journey, I have been resolutely focused on acquiring a
            comprehensive skill set that encompasses the entire spectrum of web
            development.
          </p>
          <div className="flex justify-start mx-auto space-x-12">
            <a
              href="https://drive.google.com/file/d/1Vng3zikGembDFXibmNwJDf3b7osV-4Va/view?usp=sharing"
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="font-[550] bg-[#904edb] hover:bg-[#632f77] active:bg-[#7d3699] text-[#0d0e0d] h-12 w-44 rounded-xl"
              >
                <ul className="flex space-x-1 items-center justify-center">
                  <li>Download CV</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgba(0, 0, 0, 1)",
                        transform: "",
                        msFilter: "",
                      }}
                    >
                      <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
                    </svg>
                  </li>
                </ul>
              </motion.button>
            </a>
          </div>
          <div>
            <div className="flex items-center space-x-12 mx-auto py-12">
              <motion.a
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://www.linkedin.com/in/tristanagra/"
                target="_blank"
              >
                <svg
                  className="h-8 w-8 text-white transform transition duration-300 hover:text-[#9746b8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://github.com/TrayMachi"
                target="_blank"
              >
                <svg
                  className="h-8 w-8 text-white transform transition duration-300 hover:text-[#9746b8]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0-.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tristanagraa@gmail.com"
                target="_blank"
              >
                <svg
                  className="h-8 w-8 text-white transform transition duration-300 hover:text-[#9746b8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://www.instagram.com/tristan.agra/"
                target="_blank"
              >
                <FaInstagram className="h-8 w-8 text-white transform transition duration-300 hover:text-[#9746b8]" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <Image
            src="/Profile/tristan.png"
            width="1400"
            height="1200"
            alt="Tristan"
            className={`${!screenSize ? "hidden" : ""}`}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
