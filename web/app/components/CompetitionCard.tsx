import React from "react";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa"; // Import icons
import { Competition } from "../interface/base";

interface CompetitionCardProps {
  competition: Competition;
}
interface MedalProps {
  name: string;
  prizeRank: "first" | "second" | "third";
  prizeDescription?: string;
  startDate: Date;
}

const Medal: React.FC<MedalProps> = ({
  name,
  startDate,
  prizeRank,
  prizeDescription,
}) => {
  const medalStyles = {
    first:
      "bg-gradient-to-r from-yellow-400 to-yellow-600 border-yellow-500 shadow-lg",
    second:
      "bg-gradient-to-r from-gray-300 to-gray-500 border-gray-400 shadow-md",
    third:
      "bg-gradient-to-r from-amber-500 to-amber-700 border-amber-600 shadow-md",
  };

  // Format the start date
  const formattedDate = startDate
    ? startDate.toLocaleDateString()
    : "No date provided";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-60 h-60 rounded-full border-8 ${medalStyles[prizeRank]} flex items-center justify-center relative`}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-50"></div>
        {/* Competition name */}

        {/* Prize description */}
        <div className="absolute   top-6 text-white text-2xl font-bold capitalize">
          {prizeDescription}
        </div>
        <h2 className="absolute top-[70px] text-3xl font-bold text-gray-800 line-clamp-2 m-1">
          {name}
        </h2>

        {/* Start date */}
        <div className="absolute bottom-4 text-gray-200 text-sm font-semibold">
          {formattedDate}
        </div>
      </div>
    </div>
  );
};
const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* <h2 className="text-3xl font-bold text-gray-800">{competition.name}</h2>
      <p className="text-gray-600 text-center max-w-lg">
        {competition.shortDescription}
      </p> */}

      <div className="flex space-x-6">
        {competition.prizes?.firstPrize && (
          <Medal
            name={competition.name}
            prizeRank="first"
            startDate={competition.startDate}
            prizeDescription={competition.prizes.firstPrize}
          />
        )}
        {competition.prizes?.secondPrize && (
          <Medal
            name={competition.name}
            startDate={competition.startDate}
            prizeRank="second"
            prizeDescription={competition.prizes.secondPrize}
          />
        )}
        {competition.prizes?.thirdPrize && (
          <Medal
            name={competition.name}
            startDate={competition.startDate}
            prizeRank="third"
            prizeDescription={competition.prizes.thirdPrize}
          />
        )}
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
        <CompetitionCard key={index} competition={competition} />
      ))}
    </div>
  );
};

export default CompetitionList;
