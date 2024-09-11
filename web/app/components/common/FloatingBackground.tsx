"use client";
import { motion } from "framer-motion";
import React from "react";

const FloatingBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a6d] via-[#0040ff] to-[#00aaff] bg-[length:200%_200%] animate-gradient-move">
      {/* 黑色半透明背景 */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* 顯示傳入的 children */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FloatingBackground;
