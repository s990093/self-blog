"use cleint";
/* eslint-disable @next/next/no-img-element */
import { Technology } from "@/app/interface/base";
import React from "react";
import { SlideEffect } from "../Animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { generateRandomPosition } from "@/app/lib/utils/func";

interface CardProps {
  technology: Technology;
  index: number;
}

const SkillCard: React.FC<CardProps> = ({ technology }) => {
  const randomPositions = generateRandomPosition();

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{
        opacity: 0,
        x: randomPositions?.x || 0,
        y: randomPositions?.y || 0,
      }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1 }} // Adjust the duration as needed
    >
      <div
        className={`flex items-center px-1 py-1.5 text-sm font-medium  max-w-[120px] mb-1`}
      >
        {/* TODO: change img src */}
        <LazyLoadImage
          src={`/test/technology/color/${technology.icon}`}
          alt={technology.name}
          className="inline-block w-6 h-6 mr-2 align-middle rounded-full"
        />

        <div className="block truncate overflow-hidden whitespace-nowrap max-w-[100px]">
          <SlideEffect
            text={technology.name}
            fontSize="text-[12px] font-mono text-navyBlue"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
