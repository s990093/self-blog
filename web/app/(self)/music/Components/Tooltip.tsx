// Tooltip.tsx
import React from "react";
import { Html } from "@react-three/drei";

interface TooltipProps {
  position: [number, number, number];
  desc?: string;
  onClick: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({ position, onClick, desc }) => {
  return (
    <Html position={position}>
      <div
        className="bg-gradient-to-r from-white-100 to-yellow-400 w-5 h-5 rounded-full shadow-lg hover:shadow-xl hover:scale-125 transition-all duration-300 cursor-pointer animate-pulse"
        onClick={onClick}
      />
      {desc && (
        <div className="absolute top-0 left-12 transform -translate-x-1/2  text-xs text-white-100 p-1 rounded-lg">
          {desc}
        </div>
      )}
    </Html>
  );
};

export default Tooltip;
