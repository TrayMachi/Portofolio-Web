"use client";
import HomePage from "./HomePage";
import React, { useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavTop from "./nav/NavBar";
import FooterBar from "./nav/FooterBar";
import LoadingScreen from "./component/LoadScreen";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      <Analytics />
      <SpeedInsights />
    </ReactLenis>
  );
}
