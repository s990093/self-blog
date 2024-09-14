import React from "react";
import { Competition } from "../../interface/base";
import { Medal } from "../3d";
import { motion } from "framer-motion";

interface CompetitionCardProps {
  competition: Competition;
  index: number;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  competition,
  index,
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.7, rotate: -30, x: -100, y: -100 }}
      animate={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0.7, rotate: 30, x: 100, y: 100 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        scale: { duration: 0.5 },
        rotate: { duration: 0.4 },
        x: { duration: 0.6 },
        y: { duration: 0.6 },
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        <div
          key={index}
          className="text-center text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-4 truncate max-w-full animate-gradient"
        >
          {competition.name}
        </div>

        <Medal
          key={`${competition.name}-${index}`}
          name={competition.name}
          startDate={competition.startDate}
          prizeRank={competition.prizes}
          prizeDescription={competition.shortDescription}
          index={index}
        />
      </div>
    </motion.div>
  );
};

// const CompetitionCardtMemo = React.memo(CompetitionCard);

export default CompetitionCard;
