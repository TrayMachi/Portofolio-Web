"use client";
import React from "react";
import { useScreenSize } from "../utils/screensize";
import Tables from "./SkillsTab";

// Implement the skill table on the container
const Skills = () => {
  const screenSize = useScreenSize();
  const formatH1 = screenSize ? "text-4xl" : "text-2xl";

  return (
    <div className="flex justify-center mx-auto items-center px-6 relative">
      <div
        className="absolute w-[94%] h-0.5 bg-[#2f2f35] top-0"
        style={{ transform: "translateY(-50%)" }}
      />
      <div>
        <div className="mt-12 flex justify-center">
          <h1 className={`${formatH1} font-bold`}>Skills</h1>
        </div>
        <div className="justify-center">
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Skills;
