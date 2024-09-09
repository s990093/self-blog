"use client";
/* eslint-disable @next/next/no-img-element */
import { Project } from "@/app/interface/base";
import React, { useEffect, useState } from "react";
import { FaGithub, FaHandPointRight } from "react-icons/fa"; // Import the icons you need

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactCardFlip from "react-card-flip";
import { SeparatorIsland } from "../common";
import { SlideEffect, TypingEffect } from "../Animation";

const settings = {
  dots: true, // 顯示分頁點
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: (i: number) => (
    <div className="block w-3 h-3 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-600" />
  ),
  dotsClass: "slick-dots flex justify-center mt-2",
};

interface CardProps {
  project: Project;
}
const ProjectCard: React.FC<CardProps> = ({ project }) => {
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
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front side */}
      <div
        className="rounded-lg shadow-lg max-w-sm mx-auto rounded-[20px] max-w-[500px] max-h-[400px]"
        onClick={handleFlip} // Optional: flip on click
      >
        <div className="relative">
          <div className="overflow-hidden rounded-t-[20px] relative max-w-[500px] max-h-[300px]">
            <LazyLoadImage
              src={project.projectImages[0]}
              alt={`${project.name} screenshot 1`}
              className="w-full h-full object-cover rounded-t-[20px] transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
        <div className="mt-4 text-center px-4">
          <h2 className="text-base font-semibold text-white">{project.name}</h2>
        </div>
      </div>

      {/* Back side */}
      <div
        className="bg-gradient-to-b from-purple-600 to-indigo-700 rounded-lg shadow-lg max-w-sm mx-auto rounded-[20px] max-w-[500px] min-h-[400px]"
        onClick={handleFlip} // Optional: flip on click
      >
        <div className="p-4 text-center">
          {/* <h2 className="text-lg font-semibold text-white">
            About the Project
          </h2> */}

          {/* short desc */}
          {/* <p className="text-white mt-2">{project.shortDescription}</p> */}
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
          <a
            href={"#"} // Replace with actual project details URL
            className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
          >
            <FaHandPointRight className="w-5 h-5 mr-2" />
            Details
          </a>
          <a
            href={"#"} // Replace with actual GitHub URL
            className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </ReactCardFlip>
  );
};

// const ProjectCard: React.FC<CardProps> = ({ project }) => {
//   return (
//     <div className="bg-[#03394a] text-[#cdeef3] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
//       <h2 className="text-xl font-bold mb-2 text-[#1ca4c0]">{project.name}</h2>
//       {/* Project Images */}
//       {project.projectImages.length > 1 && (
//         <div>
//           <Slider {...settings}>
//             {project.projectImages.map((image, index) => (
//               <div key={index} className="mb-4">
//                 <img
//                   src={image}
//                   alt={`${project.name} screenshot ${index + 1}`}
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       )}
//       {project.projectImages.length == 1 && (
//         <div className="mb-4">
//           <LazyLoadImage
//             src={project.projectImages[0]}
//             alt={`${project.name} screenshot 1`}
//             className="w-full h-48 object-cover rounded-lg"
//           />
//         </div>
//       )}

//       <p className="text-gray-300 mb-4">{project.shortDescription}</p>

//       {/* Technologies Used */}

//       {/* Links */}
//       <div className="mt-4 flex gap-4">
//         {/* Project Details Link */}
//         <a
//           href={"#"} // Replace with actual project details URL
//           className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
//         >
//           <FaHandPointRight className="w-5 h-5 mr-2" />{" "}
//           {/* Project Details Icon */}
//           Project Details
//         </a>

//         {/* GitHub Link with Icon */}

//         <a
//           href={"#"}
//           className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
//         >
//           <FaGithub className="w-5 h-5 mr-2" /> {/* GitHub Icon */}
//           GitHub
//         </a>
//       </div>
//     </div>
//   );
// };

export default ProjectCard;
