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

interface CardProps {
  project: Project;
}
const ProjectCard: React.FC<CardProps> = ({ project }) => {
  const { ref: projRef, isVisible: isProjVisible } = useIntersectionObserver({
    root: null,
    threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div ref={projRef}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front side */}
        <div
          className="rounded-lg shadow-lg max-w-sm mx-auto rounded-[20px] max-w-[500px] max-h-[400px]"
          onClick={handleFlip} // Optional: flip on click
        >
          <div className="relative">
            <div className="overflow-hidden rounded-t-[20px] relative max-w-[500px] max-h-[300px]">
              {isProjVisible && (
                <LazyLoadImage
                  key={String(isProjVisible)}
                  src={project.projectImages[0]}
                  alt={`${project.name} screenshot 1`}
                  className="w-full h-full object-cover rounded-t-[20px] transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fadeInShort"
                />
              )}
            </div>
          </div>
          <div className="mt-4 text-center px-4">
            <h2 className="text-base font-semibold text-white">
              {project.name}
            </h2>
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
                          src={`/test/technology/color/${tech.icon}.png`} // Adjust path as needed
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
};

export default ProjectCard;
