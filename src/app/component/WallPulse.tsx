import React from "react";
import { useScreenSize } from "../utils/screensize";

// Component for making rounded pulse on wallpaper
export default function Pulse() {
  const pulseData = [
    {
      bgColor: "bg-[#381050]",
      right: "right-[5%]",
      top: "top-[5%]",
      speed: "0.35",
    },
    {
      bgColor: "bg-[#742961d8]",
      right: "right-[5%]",
      top: "top-[5%]",
      speed: "0.35",
    },
    {
      bgColor: "bg-[#381050]",
      right: "right-[45%]",
      top: "top-[45%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[80%]",
      top: "top-[43%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7044b6]",
      right: "right-[23%]",
      top: "top-[23%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#742961d8]",
      right: "right-[45%]",
      top: "top-[71%]",
      speed: "0.35",
    },
  ];

  return (
    <>
       {pulseData.map((data, index) => (
        <div
          key={index}
          data-scroll
          data-scroll-speed={data.speed}
          className={`${data.bgColor} w-[360px] h-[240px] rounded-[100%] fixed ${data.right} ${data.top} z-0 animate-pulse blur-3xl`}
        ></div>
      ))}
    </>
  );
}
