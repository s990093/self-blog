import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface MoreButtonProps {
  onClick?: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-white p-2 rounded hover:bg-blue-600 transition"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
        }}
        className="ml-2"
      >
        <FaArrowRight />
      </motion.div>
    </button>
  );
};

export default MoreButton;
