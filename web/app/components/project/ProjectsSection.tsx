import { ProjType } from "@/app/interface/base";
import { motion } from "framer-motion";
import { TypingEffect } from "../Animation";

interface ProjectsSectionProps {
  filter: ProjType | "All";
  setFilter: (filter: ProjType | "All") => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  filter,
  setFilter,
}) => {
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
        className="flex space-x-3 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {["All", ...Object.values(ProjType)].map((type) => (
          <motion.button
            key={type}
            className={`px-6 py-3 rounded-md transition-colors duration-300 ease-in-out ${
              filter === type
                ? "text-white shadow-lg font-bold"
                : "text-gray-800 hover:bg-navyBlue hover:opacity-50 hover:text-white "
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(type as ProjType | "All")}
          >
            {type}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
