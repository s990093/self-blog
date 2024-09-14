"use client";
/* eslint-disable @next/next/no-img-element */
import { Project } from "@/app/interface/base";
import React, { useEffect, useState } from "react";
import { FaGithub, FaHandPointRight } from "react-icons/fa"; // Import the icons you need

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactCardFlip from "react-card-flip";
import { SeparatorIsland, useIntersectionObserver } from "../common";
import { SlideEffect } from "../Animation";
import Link from "next/link";
import ClickableIcon from "../common/ClickableIcon";
import { getStaticUrl } from "@/app/cfg/constants";
import { FaHammer } from "react-icons/fa";

interface CardProps {
  project: Project;
}
const ProjectCard: React.FC<CardProps> = React.memo(({ project }) => {
  const { ref: projRef, isVisible: isProjVisible } = useIntersectionObserver({
    root: null,
    threshold: 0.1,
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let isthreeMonthsAgo = false;

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (project.startTime) {
    const startTime = new Date(project.startTime); // 假设 startTime 是一个日期字符串
    const now = new Date();

    // 计算3个月前的日期
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(now.getMonth() - 3);

    // 判断 startTime 是否在三个月内
    if (startTime >= threeMonthsAgo && startTime <= now) {
      isthreeMonthsAgo = true;
    }
  }
  return (
    <div ref={projRef}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front side */}

        <div
          className="relative mx-auto rounded-[20px]  overflow-hidden"
          onClick={handleFlip} // Optional: flip on click
        >
          {isthreeMonthsAgo && (
            <div className="absolute top-5 left-5 z-10 w-[100px] h-[20px] flex items-center justify-center bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 transform rotate-[-45deg] -translate-x-1/2 -translate-y-1/2">
              <div>
                <span
                  className="font-mono"
                  style={{ transform: "rotate(45deg)" }}
                >
                  New
                </span>
              </div>
            </div>
          )}
          {project.inProgress && (
            <div className="absolute bottom-5 left-10 z-10  flex items-center justify-center text-white text-xs font-bold uppercase px-2 py-1 transform  -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center space-x-2">
                <FaHammer className="text-2xl animate-hammer" />
              </div>
            </div>
          )}
          <div className="relative">
            <div className="overflow-hidden rounded-[20px] relative bg-black w-full h-[300px]">
              {isProjVisible && (
                <LazyLoadImage
                  key={String(isProjVisible)}
                  src={getStaticUrl(project.projectImages[0])}
                  alt={`${project.name} screenshot 1`}
                  className="w-full h-full object-contain rounded-t-[20px] transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
              )}
            </div>
          </div>

          <div className="mt-4 text-center px-4">
            <h2 className="text-base absolute top-[100px] left-1/2 transform -translate-x-1/2 font-semibold text-white">
              {project.name}
            </h2>
            <div className="absolute top-[20px] right-[30px]">
              <ClickableIcon />
            </div>
          </div>
        </div>

        {/* Back side */}
        <div
          className="bg-gradient-to-b from-purple-600 to-indigo-700 rounded-lg shadow-lg max-w-sm mx-auto rounded-[20px] max-w-[500px] min-h-[400px]"
          onClick={handleFlip} // Optional: flip on click
        >
          <div className="p-4 text-center">
            {isFlipped && (
              <div>
                <div className="flex flex-col items-center space-y-[30px]">
                  <SlideEffect
                    text={"About the Project"}
                    fontSize="text-[25px]"
                  />
                  <SlideEffect
                    text={project.shortDescription}
                    fontSize="text-sm"
                    duration={0.5}
                  />
                </div>

                {/* Technologies Used Section */}
                <div className="mt-4 ">
                  <h3 className="text-sm font-semibold text-[#68d2c3] mb-2">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {project.technologiesUsed.map((tech, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 ${
                          isVisible ? "animate-fadeIn" : "opacity-0"
                        }`}
                      >
                        <LazyLoadImage
                          src={getStaticUrl(
                            `test/technology/color/${tech.icon}.png`
                          )} // Adjust path as needed
                          alt={`${tech.name} icon`}
                          className="w-5 h-5"
                        />
                        <span className="text-[#cdeef3]">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* div */}
          {isFlipped && (
            <div className="mr-4 ml-4">
              <SeparatorIsland />
            </div>
          )}

          {/* link */}

          <div className="mt-4 flex justify-center gap-4">
            <Link
              href={"#"} // Replace with actual project details URL
              className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
            >
              <FaHandPointRight className="w-5 h-5 mr-2" />
              Details
            </Link>
            <Link
              href={project.githubUrl || "#"} // Replace with actual GitHub URL
              className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
});

ProjectCard.displayName = "ProjectsCards";

export default ProjectCard;
