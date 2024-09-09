"use client";
import React from "react";
import { motion } from "framer-motion";

interface RotatingWrapperProps {
  children: React.ReactNode;
  duration?: number; // Duration in seconds
  speed?: number; // Speed multiplier; higher values = faster rotation
  repeat?: number; // Number of repetitions; if not provided, defaults to infinite
  className?: string; // Optional prop for additional custom styles
}

const RotatingWrapper: React.FC<RotatingWrapperProps> = ({
  children,
  duration = 10, // Base duration in seconds
  speed = 1, // Speed multiplier (1 = normal speed, 2 = twice as fast, etc.)
  repeat = Infinity, // Default to infinite rotation
  className = "",
}) => {
  // Calculate the effective duration based on speed
  const effectiveDuration = duration / speed;

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ rotateY: 360 }}
      transition={{
        duration: effectiveDuration,
        repeat: repeat,
        repeatType: repeat === Infinity ? "loop" : undefined,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

export default RotatingWrapper;
