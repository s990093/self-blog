import React from "react";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa"; // Import icons
import { Competition } from "../interface/base";
import STLViewer from "./3d/STLViewer/STLViewer";
import { Medal } from "./3d";

interface CompetitionCardProps {
  competition: Competition;
  index: number;
}

// const Medal: React.FC<MedalProps> = ({
//   name,
//   startDate,
//   prizeRank,
//   prizeDescription,
// }) => {
//   const medalStyles = {
//     first:
//       "bg-gradient-to-r from-yellow-400 to-yellow-600 border-yellow-500 shadow-lg",
//     second:
//       "bg-gradient-to-r from-gray-300 to-gray-500 border-gray-400 shadow-md",
//     third:
//       "bg-gradient-to-r from-amber-500 to-amber-700 border-amber-600 shadow-md",
//   };

//   // Format the start date
//   const formattedDate = startDate
//     ? startDate.toLocaleDateString()
//     : "No date provided";

//   return (
//     // <div className="flex flex-col items-center">
//     //   <div
//     //     className={`w-60 h-60 rounded-full border-8 ${medalStyles[prizeRank]} flex items-center justify-center relative`}
//     //   >
//     //     <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-50"></div>
//     //     {/* Competition name */}

//     //     {/* Prize description */}
//     //     <div className="absolute   top-6 text-white text-2xl font-bold capitalize">
//     //       {prizeDescription}
//     //     </div>
//     //     <h2 className="absolute top-[70px] text-3xl font-bold text-gray-800 line-clamp-2 m-">
//     //       {name}
//     //     </h2>

//     //     {/* Start date */}
//     //     <div className="absolute bottom-4 text-gray-200 text-sm font-semibold">
//     //       {formattedDate}
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };
const CompetitionCard: React.FC<CompetitionCardProps> = ({
  competition,
  index,
}) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Medal
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
