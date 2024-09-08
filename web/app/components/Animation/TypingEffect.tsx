"use client";
import "@fontsource/fira-code"; // 引入 Fira Code 字體
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingEffectProps {
  charId: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ charId }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true); // 用於控制光標顯示
  const typingSpeed = 150; // 每個字的延遲時間（毫秒）
  const cursorBlinkSpeed = 500; // 光標閃爍速度（毫秒）

  useEffect(() => {
    // 控制打字效果
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < charId.length - 1) {
        setDisplayText((prev) => prev + charId[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [charId]);

  useEffect(() => {
    // 控制光標閃爍效果
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-2xl font-bold"
      style={{ fontFamily: "Fira Code, monospace" }} // 使用 Fira Code 字體
    >
      {displayText}
      {showCursor && (
        <span className="inline-block w-1 bg-current animate-blink">
          &nbsp;
        </span>
      )}
      {/* 顯示閃爍的光標 */}
    </motion.div>
  );
};

export default TypingEffect;
