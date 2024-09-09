"use client";
import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

interface SlideEffectProps {
  text: string;
  fontSize?: string;
  color?: string;
  duration?: number;
  delay?: number; // 每个字符的延迟时间
}

const SlideEffect: React.FC<SlideEffectProps> = ({
  text,
  fontSize = "text-2xl",
  color = "",
  duration = 1,
  delay = 0.01, // 每个字符的延迟时间
}) => {
  // 将文本分割为字符
  const characters = React.useMemo(
    () => text.split("").map((char) => (char === " " ? "\u00A0" : char)),
    [text]
  );

  return (
    <div
      className={`relative ${fontSize} ${color} font-semibold whitespace-normal`}
      style={{ width: "100%", overflow: "hidden" }}
    >
      <div className="flex flex-wrap">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }} // 初始位置在下方，并隐藏
            animate={{ y: "0%", opacity: 1 }} // 滑入到原始位置，并显示
            transition={{
              duration: duration / characters.length,
              ease: "easeOut",
              delay: index * delay,
            }} // 每个字符的动画延迟
            style={{ display: "inline-block" }} // 确保每个字符的块级展示
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SlideEffect);
