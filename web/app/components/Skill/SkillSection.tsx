"use client";
import React from "react";
import { useRouter } from "next/navigation";

// c
import SkillCard from "./SkillCard";
import { Technology } from "../../interface/base";
import { SlideEffect } from "../Animation";
import AnimatedNumbers from "react-animated-numbers";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { SeparatorIsland } from "../common";
import TotalSkills from "./TotalSkills";

interface SkillListProps {
  skills: Technology[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const totalSkills = skills.length;
  const router = useRouter();

  // Group skills by their type
  const groupedSkills = skills.reduce<Record<string, Technology[]>>(
    (acc, tech) => {
      // Use a fallback type if tech.type is null or undefined
      const type = tech.type ?? "Unknown";
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(tech);
      return acc;
    },
    {}
  );

  return (
    <div className="space-y-4 ">
      {/* total */}
      <div className="relative">
        <TotalSkills totalSkills={totalSkills} />
      </div>
      {Object.keys(groupedSkills).map((type) => {
        const skillsOfType = groupedSkills[type];
        const displayedSkills = skillsOfType.slice(0, 6);
        const remainingSkills = skillsOfType.length - 6;

        return (
          <div key={type}>
            <Link href={`/skill/${type}`} passHref>
              {/* Navigate to the skill type page */}
              <div className="flex flex-row">
                <SlideEffect
                  text={type}
                  fontSize="text-lg font-serif"
                  duration={1.5}
                  delay={0.03}
                />
                {/* <FaArrowRight className="ml-2 text-lg" /> Arrow icon */}
              </div>
            </Link>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {displayedSkills.map((tech, index) => (
                <SkillCard key={index} technology={tech} />
              ))}
              {remainingSkills > 0 && (
                <div
                  className="ml-2 cursor-pointer flex items-center hover:underline"
                  onClick={() => router.push(`/skill/${type}`)} // Navigate to the corresponding skill type page
                >
                  <FiMoreHorizontal className="mr-1 text-lg" /> {/* Icon */}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={remainingSkills}
                    fontStyle={{ fontSize: "1rem", fontFamily: "sans-serif" }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;
