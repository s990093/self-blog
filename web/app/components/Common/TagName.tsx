"use client";
import React from "react";
import { motion } from "framer-motion";

interface TagNameProps {
  name: string;
  top?: string; // Optional prop for top position
  right?: string; // Optional prop for right position
  angle?: number; // Angle in degrees
  rotateSpeed?: number; // Optional prop for rotation speed in degrees per second
}

const TagName: React.FC<TagNameProps> = ({
  name,
  top = "0px",
  right = "0px",
  angle = 0,
}) => {
  return (
    <motion.div
      className="absolute flex justify-center items-center p-6"
      style={{
        transform: `rotate(${angle}deg)`, // Apply rotation based on angle prop
      }}
      initial={{ opacity: 0, top: "0%", right: "0%" }}
      animate={{
        opacity: 1,
        top: top,
        right: right,
        rotate: [0, 360], // Rotate from 0 to 360 degrees
      }}
      transition={{
        duration: 1, // Duration of the fade-in and move animation
        repeatType: "loop", // Loop the rotation animation
        ease: "linear", // Linear easing for continuous rotation
        rotate: {
          duration: 2, // Duration of one full rotation (in seconds)
          repeatType: "loop", // Loop the rotation animation
        },
      }}
    >
      <h1
        className="text-sm md:text-4xl font-bold text-white mr-4"
        style={{
          transform: `rotate(${angle}deg)`, // Apply rotation based on angle prop
        }}
      >
        {name}
      </h1>
    </motion.div>
  );
};

export default TagName;
