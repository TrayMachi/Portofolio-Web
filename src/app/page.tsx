"use client";
import Head from "next/head";
import HomePage from "./HomePage";
import React, { useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavTop from "./nav/NavBar";
import FooterBar from "./nav/FooterBar";
import LoadingScreen from "./component/LoadScreen";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

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
        <meta name="title" content="Tristan's Portofolio" />
        <meta name="description" content="A Portofolio Website" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tristan-agra.vercel.app" />
        <meta property="og:title" content="Tristan's Portofolio" />
        <meta property="og:description" content="A Portofolio Website" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853604444310732830/1198925123030372362/Screenshot_2024-01-22_162340.png?ex=65c0ad08&is=65ae3808&hm=ccbe97c10f08569cbec94e22e67b07fc6ed964af81689b36110386bb990d4187&"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://tristan-agra.vercel.app"
        />
        <meta property="twitter:title" content="Tristan's Portofolio" />
        <meta property="twitter:description" content="A Portofolio Website" />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853604444310732830/1198925123030372362/Screenshot_2024-01-22_162340.png?ex=65c0ad08&is=65ae3808&hm=ccbe97c10f08569cbec94e22e67b07fc6ed964af81689b36110386bb990d4187&"
        />
        <LinkPreview
          url="https://tristan-agra.vercel.app"
          fallbackImageSrc="https://cdn.discordapp.com/attachments/853604444310732830/1198925123030372362/Screenshot_2024-01-22_162340.png?ex=65c0ad08&is=65ae3808&hm=ccbe97c10f08569cbec94e22e67b07fc6ed964af81689b36110386bb990d4187&"
          backgroundColor="black"
          primaryTextColor="white"
          secondaryTextColor="#ccc"
          width="30vw"
          margin="30px auto"
          showLoader={true}
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
