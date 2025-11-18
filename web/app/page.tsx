"use client";
import React, { useState, useEffect } from "react";
import Zipper from "./components/Animation/Zipper"; // 確保導入正確

const zipperStyle = {
  backgroundColor: "#ededed",
  zipperColor: "#2d2d2d",
  teethColor: "#2d2d2d",
};

const Home: React.FC = () => {
  const [, setLoadingProgress] = useState(0); // 載入進度狀態

  // 模擬載入進度
  useEffect(() => {
    const simulateLoading = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(simulateLoading);
          return 100;
        }
        return prev + 10; // 每 300ms 增加 10%
      });
    }, 300);
    return () => clearInterval(simulateLoading);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Zipper
          numTeeth={25}
          message="Boo!"
          startUnzipped={true}
          style={zipperStyle}
        />
      </div>
    </div>
  );
};

export default Home;
