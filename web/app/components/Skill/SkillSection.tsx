import React from "react";
import SkillCard from "./SkillCard"; // Adjust the path as needed
import { Technology } from "../../interface/base";
import { SlideEffect } from "../Animation";

interface SkillListProps {
  skills: Technology[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
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
    <div className="space-y-1 max-w-[600px]">
      {Object.keys(groupedSkills).map((type) => (
        <div key={type}>
          <div className="mb-2 capitalize">
            <SlideEffect
              text={type}
              fontSize="text-sm font-serif"
              duration={1.5}
              delay={0.03}
            />
          </div>
          <div className="grid grid-cols-5">
            {groupedSkills[type].map((tech, index) => (
              <SkillCard key={index} technology={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
