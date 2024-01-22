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
        <title>Tristan&apos;s Portofolio</title>
        <meta name="title" content="Tristan&apos;s Portofolio" />
        <meta name="description" content="A Portofolio Website" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tristan-agra.vercel.app/" />
        <meta property="og:title" content="Tristan&apos;s Portofolio" />
        <meta property="og:description" content="A Portofolio Website" />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://tristan-agra.vercel.app/"
        />
        <meta property="twitter:title" content="Tristan&apos;s Portofolio" />
        <meta property="twitter:description" content="A Portofolio Website" />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
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
