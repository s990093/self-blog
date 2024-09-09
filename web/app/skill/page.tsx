"use client";
import React from "react";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import SkillCard from "./SkillCard";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center bg-blueGreen p-5">
      <SkillCard
        name="React"
        icon={<FaReact color="#189ab4" size={40} />}
        markdown="React is a JavaScript library for building user interfaces."
      />
      <SkillCard
        name="Python"
        icon={<FaPython color="#306998" size={40} />}
        markdown="Python is a high-level programming language for general-purpose programming."
      />
      <SkillCard
        name="Node.js"
        icon={<FaNodeJs color="#8CC84B" size={40} />}
        markdown="Node.js is a runtime environment that allows JavaScript to be run server-side."
      />
    </div>
  );
};

export default HomePage;
