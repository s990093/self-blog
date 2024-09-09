"use cleint";
/* eslint-disable @next/next/no-img-element */
import { Technology } from "@/app/interface/base";
import React from "react";
import { SlideEffect } from "../Animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tilt } from "react-tilt";

interface CardProps {
  technology: Technology;
}

const SkillCard: React.FC<CardProps> = ({ technology }) => {
  return (
    <Tilt
      options={{
        max: 60, // Maximum tilt angle
        scale: 1.5, // Element scaling on hover
        speed: 400, // Speed of the enter/exit transition
      }}
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
    </Tilt>
  );
};

export default SkillCard;
