"use client";
import React, { useEffect, useState } from "react";

// c  const router = useRouter();
import SkillCard from "./SkillCard";
import { Technology } from "../../interface/base";
import { SlideEffect } from "../animation";
import Link from "next/link";
import TotalSkills from "./TotalSkills";
import { useIntersectionObserver } from "../common";
import { motion } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the component after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup the timer if the component is unmounted before the timer completes
    return () => clearTimeout(timer);
  }, []);

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
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: "-10%" }} // Initial state: hidden and shifted
        animate={{
          opacity: isVisible ? 1 : 0,
          x: isVisible ? "0%" : "-10%", // Move by 10% of its width
        }} // Animation state
        transition={{ duration: 0.5 }} // Transition duration
      >
        {/* <TotalSkills totalSkills={totalSkills} /> */}
      </motion.div>

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
