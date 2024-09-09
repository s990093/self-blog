"use client";
import React from "react";

// c  const router = useRouter();
import SkillCard from "./SkillCard";
import { Technology } from "../../interface/base";
import { SlideEffect } from "../Animation";
import Link from "next/link";
import TotalSkills from "./TotalSkills";
import { useIntersectionObserver } from "../common";

interface SkillListProps {
  skills: Technology[];
}
interface GroupedSkillsProps {
  type: string;
  remainingSkills: number;
  technologies: Technology[];
}

const GroupedSkills: React.FC<GroupedSkillsProps> = ({
  type,
  technologies,
}) => {
  const { ref: skillRef, isVisible: isSkillVisible } = useIntersectionObserver({
    root: null,
    threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
  });
  const SkillStatus = isSkillVisible ? Date.now() : "";

  return (
    <div ref={skillRef} key={type}>
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
      {/* {isSkillVisible && (
        <div
          className="grid grid-cols-2 md:grid-cols-6 gap-4"
          key={SkillStatus}
        >
          {technologies.map((tech, index) => (
            <SkillCard key={index} technology={tech} index={index} />
          ))}
        </div>
      )} */}

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4" key={SkillStatus}>
        {technologies.map((tech, index) => (
          <SkillCard key={index} technology={tech} index={index} />
        ))}
      </div>
    </div>
  );
};
const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const totalSkills = skills.length;

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
      {/* <div className="relative">
        <TotalSkills totalSkills={totalSkills} />
      </div> */}

      {Object.keys(groupedSkills).map((type) => {
        const skillsOfType = groupedSkills[type];
        // const displayedSkills = skillsOfType.slice(0, 6);
        const remainingSkills = skillsOfType.length - 6;

        return (
          <GroupedSkills
            key={type}
            type={type}
            remainingSkills={remainingSkills}
            technologies={skillsOfType}
          />
        );
      })}
    </div>
  );
};

export default SkillList;
