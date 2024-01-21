"use client";
import HomePage from "./component/HomePage";
import React, { useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavTop from "./nav/NavBar";
import FooterBar from "./nav/FooterBar";
import LoadingScreen from "./component/LoadScreen";

export default function Home() {
  useEffect(() => {
    // useEffect for smooth scrolling
    if (typeof window !== "undefined") {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    }
  }, []);
  return (
    <ReactLenis root>
      <LoadingScreen />
      <NavTop />
      <main className="relative overflow-hidden ">
        <HomePage />
      </main>
      <FooterBar />
    </ReactLenis>
  );
}
