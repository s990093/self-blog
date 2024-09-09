// components/SkillCard.tsx

import React from "react";
import ReactMarkdown from "react-markdown";
import { FC } from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  markdown: string;
}

const SkillCard: FC<SkillCardProps> = ({ name, icon, markdown }) => {
  return (
    <div className="bg-babyBlue rounded-lg p-4 m-4 shadow-lg max-w-xs">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 mr-3">{icon}</div>
        <h3 className="text-navyBlue text-lg font-semibold">{name}</h3>
      </div>
      <ReactMarkdown children={markdown} className="text-navyBlue text-sm" />
    </div>
  );
};

export default SkillCard;
