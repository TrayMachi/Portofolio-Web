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
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[60%]",
      top: "top-[65%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#381050]",
      right: "right-[80%]",
      top: "top-[5%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#381050]",
      right: "right-[15%]",
      top: "top-[10%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[17%]",
      top: "top-[10%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7a3475]",
      right: "right-[75%]",
      top: "top-[13%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[60%]",
      top: "top-[17%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7a3475]",
      right: "right-[60%]",
      top: "top-[20%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7044b6]",
      right: "right-[24%]",
      top: "top-[23%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#742961d8]",
      right: "right-[30%]",
      top: "top-[30%]",
      speed: "0.35",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[43%]",
      top: "top-[30%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7044b6]",
      right: "right-[74%]",
      top: "top-[35%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#381050]",
      right: "right-[20%]",
      top: "top-[33%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[80%]",
      top: "top-[43%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#742961d8]",
      right: "right-[30%]",
      top: "top-[44%]",
      speed: "0.35",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[70%]",
      top: "top-[50%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7a3475]",
      right: "right-[10%]",
      top: "top-[51%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7044b6]",
      right: "right-[7%]",
      top: "top-[53%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#381050]",
      right: "right-[83%]",
      top: "top-[67%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7a3475]",
      right: "right-[13%]",
      top: "top-[67%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7044b6]",
      right: "right-[9%]",
      top: "top-[71%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[50%]",
      top: "top-[75%]",
      speed: "0.35",
    },
    {
      bgColor: "bg-[#7674f09f]",
      right: "right-[80%]",
      top: "top-[81%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#381050]",
      right: "right-[83%]",
      top: "top-[83%]",
      speed: "0.2",
    },
    {
      bgColor: "bg-[#7a3475]",
      right: "right-[10%]",
      top: "top-[82%]",
      speed: "0.3",
    },
    {
      bgColor: "bg-[#7044b6]",
      right: "right-[6%]",
      top: "top-[84%]",
      speed: "0.2",
    },
  ];

  const screenSize = useScreenSize();
  const elementsToRender = screenSize ? pulseData.length : 8;

  return (
    <>
       {pulseData.slice(0, elementsToRender).map((data, index) => (
        <div
          key={index}
          data-scroll
          data-scroll-speed={data.speed}
          className={`${data.bgColor} w-[360px] h-[240px] rounded-[100%] absolute ${data.right} ${data.top} z-0 animate-pulse blur-3xl`}
        ></div>
      ))}
    </>
  );
}
