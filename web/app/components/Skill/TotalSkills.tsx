"use client";
import React from "react";

interface TotalSkillsProps {
  totalSkills: number;
  top?: string; // Optional prop for top position
  right?: string; // Optional prop for right position
}

const TotalSkills: React.FC<TotalSkillsProps> = ({ totalSkills }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-lg shadow-lg w-[200px]">
      <h1 className="text-xl md:text-4xl font-bold text-white ">
        <div>Total Skills {totalSkills}</div>
      </h1>
      {/* <AnimatedNumbers
        includeComma
        animateToNumber={totalSkills}
        fontStyle={{
          fontSize: "1rem",
          color: "white",
        }} 
      /> */}
    </div>
  );
};

export default TotalSkills;
