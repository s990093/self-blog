import React from "react";
import { Competition } from "../interface/base";
import { Medal } from "./3d";
import { useIntersectionObserver } from "./common";

interface CompetitionCardProps {
  competition: Competition;
  index: number;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  competition,
  index,
}) => {
  const { ref: objRef, isVisible: isObjVisible } = useIntersectionObserver({
    root: null,
    threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
  });
  return (
    <div ref={objRef} className="flex flex-col items-center justify-center ">
      <Medal
        key={String(isObjVisible)}
        name={competition.name}
        startDate={competition.startDate}
        prizeRank={competition.prizes}
        prizeDescription={competition.shortDescription}
        index={index}
      />
      <div className="text-center text-lg font-semibold text-[#111827] mt-4 truncate max-w-full">
        {competition.name}
      </div>
    </div>
  );
};

interface CompetitionListProps {
  competitions: Competition[];
}

const CompetitionList: React.FC<CompetitionListProps> = ({ competitions }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {competitions.map((competition, index) => (
        <CompetitionCard key={index} competition={competition} index={index} />
      ))}
    </div>
  );
};

export default CompetitionList;
