"use client";
import Head from "next/head";
import HomePage from "./HomePage";
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
      <Head>
        <meta property="og:title" content="Tristan's Portofolio" />
        <meta property="og:image" content="/Preview.png" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <LoadingScreen />
      <NavTop />
      <main className="relative overflow-hidden ">
        <HomePage />
      </main>
      <FooterBar />
    </ReactLenis>
  );
}
