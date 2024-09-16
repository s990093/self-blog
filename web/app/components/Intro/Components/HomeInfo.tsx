"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap-trial";

import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";

/* The following plugin is a Club GSAP perk */

import { motion } from "framer-motion";
import { FaHandPeace } from "react-icons/fa";

// self
import { useAppContext } from "@/app/Context/AppContext";
import { HomeInfoCard } from ".";

interface HomeInfoProps {
  currentStage: number;
}

gsap.registerPlugin(ScrambleTextPlugin);

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const helloTextRef = useRef<HTMLSpanElement | null>(null);

  const { addNotification } = useAppContext();
  const router = useRouter();

  const handleAboutPage = () => {
    addNotification("Navigating to about ...");
    router.push("/about");
  };

  const handleBlogPage = () => {
    addNotification("Navigating to blog ...");
    router.push("/blog");
  };

  const handleMoviePage = () => {
    addNotification("Navigating to movie ...");
    router.push("/movie");
  };

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [currentStage]);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 1,
        scrambleText: "Hi, I'm Lai Hung Wei",
      });
    }
    if (helloTextRef.current) {
      gsap.to(helloTextRef.current, {
        duration: 2.5,
        scrambleText: "I am a university student majoring in Computer Science",
      });
    }
  }, []);

  const bgStyle =
    "bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-5 shadow-lg text-white";

  if (currentStage === 1) {
    return (
      <div ref={sectionRef} className={`text-center py-4 px-8 mx-5 ${bgStyle}`}>
        <h1 className="sm:text-xl flex items-center justify-center">
          <span ref={textRef} className="font-semibold mx-2"></span>{" "}
          <motion.div
            className="ml-2"
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FaHandPeace className="ml-2" />
          </motion.div>
        </h1>
        <p className="mt-2">
          <span ref={helloTextRef}></span>
        </p>
      </div>
    );
  }
  if (currentStage === 2) {
    return (
      <HomeInfoCard
        title="Passionate about life,"
        description="and completed many exciting projects"
        buttonText="About Me"
        buttonAction={handleAboutPage}
      />
    );
  }
  if (currentStage === 3) {
    return (
      <HomeInfoCard
        title="My personal blog"
        description="Sharing life stories and experiences"
        buttonText="Visit Blog"
        buttonAction={handleBlogPage}
      />
    );
  }

  if (currentStage === 4) {
    return (
      <HomeInfoCard
        title="My favorite movies and shows"
        description="Discover the films and series I love"
        buttonText="Explore"
        buttonAction={handleMoviePage}
      />
    );
  }

  return null;
};

export default HomeInfo;
