"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

import { motion } from "framer-motion";
import { FaHandPeace } from "react-icons/fa";

// self
import { useAppContext } from "@/app/Context/AppContext";
import { HomeInfoCard } from ".";
import { FaStar, FaMusic, FaPhotoVideo } from "react-icons/fa"; // 引入需要的圖標

interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // const textRef = useRef<HTMLSpanElement | null>(null);
  // const helloTextRef = useRef<HTMLSpanElement | null>(null);

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

  // useEffect(() => {
  //   if (textRef.current) {
  //     gsap.to(textRef.current, {
  //       duration: 1,
  //       scrambleText: "Hi, I'm Lai Hung Wei",
  //     });
  //   }
  //   if (helloTextRef.current) {
  //     gsap.to(helloTextRef.current, {
  //       duration: 2.5,
  //       scrambleText: "I am a university student majoring in Computer Science",
  //     });
  //   }
  // }, []);

  const bgStyle =
    "bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-5 shadow-lg text-white";

  if (currentStage === 1) {
    return (
      <div ref={sectionRef} className={`text-center py-4 px-8 mx-5 ${bgStyle}`}>
        <h1 className="sm:text-xl flex items-center justify-center">
          <span className="font-semibold mx-2">{"Hi, I'm Lai Hung We"}</span>
          <motion.div
            className="ml-2"
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FaHandPeace className="ml-2" />
          </motion.div>
        </h1>
        <p className="mt-2">
          <span>I am a university student majoring in Computer Science</span>
        </p>
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
