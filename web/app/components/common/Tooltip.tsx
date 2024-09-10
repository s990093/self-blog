"use client";
import React, { ReactNode, useState } from "react";

interface TooltipProps {
  message: string; // 提示內容
  children: ReactNode; // 包裹的子元件
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xs rounded-md">
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
