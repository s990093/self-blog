/* eslint-disable @next/next/no-img-element */
import { Technology } from "@/app/interface/base";
import React from "react";
import { SlideEffect } from "../Animation";

interface CardProps {
  technology: Technology;
}

const SkillCard: React.FC<CardProps> = ({ technology }) => {
  return (
    <div
      className={`flex items-center px-1 py-1.5 text-sm font-medium rounded-full shadow-md max-w-[120px] mb-1
        ${
          technology.type === "Frontend"
            ? "bg-blue-100 text-blue-800"
            : technology.type === "Backend"
            ? "bg-green-100 text-green-800"
            : technology.type === null
            ? "bg-yellow-100 text-yellow-800"
            : "bg-gray-100 text-gray-800"
        }`}
    >
      {/* TODO: change img src */}
      <img
        src={`/test/technology/color/${technology.icon}`}
        alt={technology.name}
        className="inline-block w-6 h-6 mr-2 align-middle rounded-full"
      />
      <div className="block truncate overflow-hidden whitespace-nowrap max-w-[100px]">
        <SlideEffect text={technology.name} fontSize="text-[12px] font-mono" />
      </div>
    </div>
  );
};

export default SkillCard;
