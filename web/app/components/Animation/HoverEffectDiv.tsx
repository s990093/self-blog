import React from "react";
import { motion } from "framer-motion";

interface HoverEffectWordProps {
  text: string;
  fontSize?: number;
  gap?: number;
  className?: string;
}

const HoverEffectWord: React.FC<HoverEffectWordProps> = ({
  text,
  fontSize = 24,
  gap = 1,
  className = "",
}) => {
  return (
    <div style={{ display: "flex", gap: `${gap}px` }} className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          whileHover={{
            x: Math.random() * 40 - 20,
            y: Math.random() * 40 - 20,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            fontSize: `${fontSize}px`,
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          {char === " " ? "\u00A0" : char} {/* 空格處理 */}
        </motion.span>
      ))}
    </div>
  );
};

export default HoverEffectWord;
