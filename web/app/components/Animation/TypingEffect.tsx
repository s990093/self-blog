"use client";
import "@fontsource/fira-code"; // 引入 Fira Code 字體
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface TypingEffectProps {
  sequence: (string | number)[]; // 定義 sequence prop，支持字串和數字
  spee?: number; // 根據規範設置 speed 類型
  fontSize?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  sequence,
  fontSize = 16,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-2xl font-bold"
      style={{ fontFamily: "Fira Code, monospace" }} // 使用 Fira Code 字體
    >
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        style={{ fontSize: `${fontSize}px`, display: "inline-block" }} // 使用可自定義的字體大小
        repeat={Infinity} // 設定循環播放
      />
    </motion.div>
  );
};

export default TypingEffect;
