import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverEffectWordProps {
  children: ReactNode;
  gap?: number;
  className?: string;
}

const HoverEffect: React.FC<HoverEffectWordProps> = ({
  children,
  gap = 1,
  className = "",
}) => {
  const characters = React.Children.toArray(children); // 將 children 拆成單獨的元素

  return (
    <motion.div
      style={{ display: "flex", gap: `${gap}px` }}
      className={className}
      whileHover={{
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        rotate: Math.random() * 20 - 10, // 讓整個組件在懸停時旋轉
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
          }}
        >
          {char}
        </span>
      ))}
    </motion.div>
  );
};

HoverEffect.displayName = "HoverEffectWord";

export default HoverEffect;
