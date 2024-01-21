"use client";
import { useScreenSize } from "./utils/screensize";
import React, { useEffect, useState } from "react";
import Profile from "./component/Profile";
import Experience from "./component/Experience";
import Education from "./component/Education";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "./nav/BurgerBar";
import styles from "./navstyle.module.scss";
import Magnetic from "./utils/magnetic";
import Projects from "./component/Projects";
import ContactMe from "./component/SendEmail";
import Pulse from "./component/WallPulse";
import AOS from "aos";
import "aos/dist/aos.css";

interface Section {
  component: React.FC;
  behaviour?: string;
  id?: string;
}

// For cards section of component
const sections: Section[] = [
  { component: Experience, behaviour: "fade-right", id: "Experience" },
  { component: Education, behaviour: "fade-left" },
  { component: Projects, behaviour: "fade-right", id: "Project" },
];

const Cards: React.FC<Section> = ({ component: Component, behaviour, id }) => (
  <div
    id={`${id}`}
    data-aos={`${behaviour}`}
    className={`flex justify-center items-center my-28 `}
  >
    <div
      className={`w-[80vw] rounded-2xl overflow-hidden shadow-lg text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg`}
    >
      <Component />
    </div>
  </div>
);

const HomePage: React.FC = () => {
  useEffect(() => { // useEffect for transition onscroll using AOS library
    if (typeof window !== 'undefined') {
    AOS.init({
      delay: 0,
      duration: 600,
      disable: "mobile",
    });
  }
  }, []);
  // Styling the component based on screensize
  const defaultMX = useScreenSize() ? "mx-52" : "mx-8";
  const profileMY = useScreenSize() ? "mb-40 mt-52" : "my-24";
  const widthScreen = useScreenSize() ? "" : "w-[100vw]";
  const marginB = useScreenSize() ? "mb-[72vh] mt-[30vh]" : "mb-[20vh]";

  // For closing the nav automaticaly
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const closeNav = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 2800);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
    if (isActive) setIsActive(false);
    }
  }, [pathname]);

  // For closing the nav if on profile section
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
    const profileContainer = document.getElementById("profile-container");

    if (profileContainer) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsProfileVisible(true);
            } else {
              setIsProfileVisible(false);
            }
          });
        },
        { threshold: 0.8 }
      );

      observer.observe(profileContainer);

      return () => {
        observer.disconnect();
      };
    }
  }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    if (isProfileVisible && isActive) {
      setIsActive(false);
    }
  }
  }, [isProfileVisible, isActive]);

  return (
    <>
      <div className={styles.header}>
        <Magnetic>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </Magnetic>
      </div>
      <div className={`z-1 ${widthScreen}`}>
        <Pulse />
        <div
          id="profile-container"
          data-scroll
          data-scroll-speed="0.6"
          className={`flex justify-center items-center ${defaultMX} ${profileMY}`}
        >
          <div
            className={`max-w-full rounded-2xl overflow-hidden shadow-lg text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg`}
          >
            <Profile />
          </div>
        </div>
        {sections.map((section, index) => (
          <Cards key={index} {...section} />
        ))}
        <div
          id="Contact"
          data-scroll
          data-scroll-speed="-0.2"
          className={`flex justify-center items-center ${marginB}`}
        >
          <div
            className={`w-[80vw] rounded-2xl overflow-hidden shadow-lg text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg`}
          >
            <ContactMe />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav onClose={closeNav} />}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
