"use client";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import { Tilt } from "react-tilt";

interface TotalSkillsProps {
  totalSkills: number;
  top?: string; // Optional prop for top position
  right?: string; // Optional prop for right position
}

const TotalSkills: React.FC<TotalSkillsProps> = ({
  totalSkills,
  top = "0px",
  right = "0px",
}) => {
  return (
    <Tilt
      className=""
      style={{
        top: top,
        right: right,
      }}
      options={{
        max: 60, // Maximum tilt angle
        scale: 1.05, // Element scaling on hover
        speed: 400, // Speed of the enter/exit transition
      }}
    >
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-white mr-4">
          Total Skills
        </h1>
        <AnimatedNumbers
          includeComma
          animateToNumber={totalSkills}
          fontStyle={{
            fontSize: "3rem",
            fontFamily: "sans-serif",
            color: "white",
          }}
        />
      </div>
    </Tilt>
  );
};

export default TotalSkills;
