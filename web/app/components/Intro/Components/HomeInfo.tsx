"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaArrowRight, FaHandPeace } from "react-icons/fa";
import { useAppContext } from "@/app/Context/AppContext";
import { HomeInfoCard } from ".";
import { FaStar, FaMusic, FaPhotoVideo } from "react-icons/fa";

interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { addNotification } = useAppContext();
  const router = useRouter();

  const handleAboutPage = () => {
    addNotification("Navigating to about ...");
    router.push("/about");
  };

  const handleMusicCategoryPage = () => {
    addNotification("Navigating to music ...");
    router.push("/music");
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

  if (currentStage === 1) {
    return (
      <div
        ref={sectionRef}
        className="relative text-center py-6 px-4 mx-4 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden sm:py-8 sm:px-6"
      >
        {/* 背景淡化，避免過亮 */}
        <div className="absolute inset-0 opacity-20 blur-lg pointer-events-none" />

        <h1 className="text-xl sm:text-2xl font-bold flex items-center justify-center space-x-2">
          <span>{"Lai Hung Wei"}</span>

          <motion.div
            className="cursor-pointer text-yellow-300 text-2xl sm:text-3xl"
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            onClick={handleAboutPage} // 確保掛鉤
          >
            <FaHandPeace />
          </motion.div>
        </h1>

        <p className="mt-2 text-sm sm:text-lg opacity-90">
          I am a university student majoring in Computer Science
        </p>

        {/* 進入個人介紹按鈕 */}
        <motion.button
          className="mt-5 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold bg-white text-blue-600 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:scale-105 active:scale-95 transition-all duration-150"
          onClick={handleAboutPage} // 確保掛鉤
        >
          <span>進入個人介紹</span>
          <FaArrowRight />
        </motion.button>
      </div>
    );
  }
  if (currentStage === 2) {
    return (
      <HomeInfoCard
        title="About Me"
        description="Passionate about life"
        buttonText="About Me"
        icon={FaStar}
        buttonAction={handleAboutPage}
      />
    );
  }
  if (currentStage === 3) {
    return (
      <HomeInfoCard
        title="Music Categories"
        description="Explore different genres and styles of music"
        buttonText="Browse Categories"
        icon={FaMusic}
        buttonAction={handleMusicCategoryPage}
      />
    );
  }
  if (currentStage === 4) {
    return (
      <HomeInfoCard
        title="My favorite movies and shows"
        description="Discover the films and series I love"
        buttonText="Explore"
        icon={FaPhotoVideo}
        buttonAction={handleMoviePage}
      />
    );
  }

  return null;
};

export default HomeInfo;
