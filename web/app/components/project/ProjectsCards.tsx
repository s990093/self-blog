"use client";

/* eslint-disable @next/next/no-img-element */
import { Project } from "@/app/interface/base";
import React from "react";
import { FaGithub, FaHandPointRight } from "react-icons/fa"; // Import the icons you need

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
interface ProjectsCardsProps {
  projects: Project[];
}
const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="bg-[#03394a] text-[#cdeef3] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
      <h2 className="text-xl font-bold mb-2 text-[#1ca4c0]">{project.name}</h2>
      {/* Project Images */}
      {project.projectImages.length > 1 && (
        <div>
          <Slider {...settings}>
            {project.projectImages.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
      {project.projectImages.length == 1 && (
        <div className="mb-4">
          <img
            src={project.projectImages[0]}
            alt={`${project.name} screenshot 1`}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      <p className="text-gray-300 mb-4">{project.shortDescription}</p>

      {/* Technologies Used */}
      <div>
        <h3 className="text-sm font-semibold text-[#68d2c3] mb-2">
          Technologies Used:
        </h3>
        <ul className="list-disc pl-5 text-[#cdeef3]">
          {project.technologiesUsed.map((tech, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <img
                src={`/test/technology/color/${tech.icon}.png`} // Adjust path as needed
                alt={`${tech.name} icon`}
                className="w-5 h-5 mr-2"
              />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-4">
        {/* Project Details Link */}
        <a
          href={"#"} // Replace with actual project details URL
          className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
        >
          <FaHandPointRight className="w-5 h-5 mr-2" />{" "}
          {/* Project Details Icon */}
          Project Details
        </a>

        {/* GitHub Link with Icon */}

        <a
          href={"#"}
          className="flex items-center text-[#68d2c3] border-b-2 border-transparent hover:border-[#cdeef3] hover:text-[#cdeef3] transition-all duration-300"
        >
          <FaGithub className="w-5 h-5 mr-2" /> {/* GitHub Icon */}
          GitHub
        </a>
      </div>
    </div>
  );
};

const ProjectsList: React.FC<ProjectsCardsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
