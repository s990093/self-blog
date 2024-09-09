import { ProjType } from "@/app/interface/base";
import { motion } from "framer-motion";
import { TypingEffect } from "../Animation";
import { useMemo } from "react";
import { generateRandomPosition } from "@/app/lib/utils/func";

interface ProjectsSectionProps {
  filter: ProjType | "All";
  setFilter: (filter: ProjType | "All") => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  filter,
  setFilter,
}) => {
  const randomPositions = useMemo(
    () =>
      ["All", ...Object.values(ProjType)].map(() => generateRandomPosition()),
    []
  );
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-extrabold mb-8 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TypingEffect
          sequence={["Projects", 2000, "Achievements", 2000]}
          fontSize={50}
        />
      </motion.h1>
      <motion.div
        className="grid grid-cols-4 md:grid-cols-7 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {["All", ...Object.values(ProjType)].map((type, index) => (
          <motion.button
            key={type}
            className={`flex items-center justify-center px-6 py-3 rounded-md transition-colors duration-300 ease-in-out ${
              filter === type
                ? "text-white shadow-lg font-bold"
                : "text-gray-800 hover:bg-navyBlue hover:opacity-50 hover:text-white "
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(type as ProjType)}
          >
            <motion.div
              className="relative w-full h-full"
              initial={{
                opacity: 0,
                x: randomPositions[index]?.x || 0,
                y: randomPositions[index]?.y || 0,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2.5 }} // Adjust the duration as needed
            >
              {type}
            </motion.div>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
