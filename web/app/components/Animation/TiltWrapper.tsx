"use client";
import React from "react";
import { Tilt } from "react-tilt";

interface TiltWrapperProps {
  children: React.ReactNode;
  options?: {
    max?: number;
    scale?: number;
    speed?: number;
    glare?: boolean;
    "max-glare"?: number;
    perspective?: number;
  };
  className?: string;
}

const TiltWrapper: React.FC<TiltWrapperProps> = ({
  children,
  options = {
    max: 25,
    scale: 1.05,
    speed: 400,
    glare: false,
    "max-glare": 0.5,
    perspective: 1000,
  },
  className = "",
}) => {
  return (
    <Tilt className={`tilt-container ${className}`} options={options}>
      {children}
    </Tilt>
  );
};

export default TiltWrapper;
