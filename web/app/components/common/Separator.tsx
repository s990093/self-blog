import React from "react";
import { motion } from "framer-motion";

interface SeparatorIslandProps {
  className?: string;
}

const SeparatorIsland: React.FC<SeparatorIslandProps> = ({
  className = "",
}) => {
  return (
    <div className={`my-8 ${className} flex items-center justify-center`}>
      <motion.div
        initial={{ width: 0 }} // Initial width
        animate={{ width: "100%" }} // Final width
        transition={{ duration: 1, ease: "easeInOut" }} // Duration and easing for the animation
        className="border-t border-[#05445e]"
      />
    </div>
  );
};

export default SeparatorIsland;
