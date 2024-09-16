"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { gsap } from "gsap";
import { useAppContext } from "@/app/Context/AppContext";

const CircleIcon: React.FC = () => {
  const rectRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState(0); // 追蹤旋轉角度
  const [, setIsScrolling] = useState(false); // 追蹤是否正在滾動
  const lastRotationRef = useRef(0); // 記錄上一次的旋轉角度
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 用於計時滾動結束
  const smallChangeTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 用於計時旋轉變化小於 100 的情況
  const { addNotification } = useAppContext();
  const router = useRouter();

  const handleRootpage = () => {
    addNotification("Wait ...");
    router.push("/");
  };

  // const MaxRotationDifference = 5000;
  const RotationCheckDelayTime = 500;

  const DeltaYSacle = 0.02;

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const delta = event.deltaY || event.deltaX; // 根據 Y 軸或 X 軸的滾動來決定旋轉的方向
      setRotation((prevRotation) => prevRotation + delta); // 累加旋轉角度
      setIsScrolling(true); // 設置為正在滾動

      resetScrollTimeout(); // 重置滾動結束計時器
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      const deltaY = touch.clientY; // 根據觸控移動的 Y 軸值
      setRotation((prevRotation) => prevRotation + deltaY * DeltaYSacle); // 使用觸控滑動的距離來累加旋轉角度
      setIsScrolling(true); // 設置為正在滾動

      resetScrollTimeout(); // 重置滾動結束計時器
    };

    const resetScrollTimeout = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current); // 如果之前的計時器存在，清除它
      }

      // 當滑動停止後 300 毫秒執行
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false); // 設置為停止滾動
        setRotation(0); // 恢復旋轉角度為 0
      }, 300); // 滾動停止 300 毫秒後恢復原狀
    };

    const updateRotation = () => {
      if (rectRef.current) {
        gsap.to(rectRef.current, {
          rotate: rotation,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    };

    updateRotation(); // 每次 rotation 改變時觸發旋轉

    // 監聽全局的滾輪事件
    window.addEventListener("wheel", handleScroll);
    // 監聽全局的觸控滑動事件
    window.addEventListener("touchmove", handleTouchMove);

    // 清理事件
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current); // 清理計時器
      }
      if (smallChangeTimeoutRef.current) {
        clearTimeout(smallChangeTimeoutRef.current); // 清理檢查變化的計時器
      }
    };
  }, [rotation]);

  useEffect(() => {
    const checkForSmallChange = () => {
      if (smallChangeTimeoutRef.current) {
        clearTimeout(smallChangeTimeoutRef.current); // 清除之前的檢查計時器
      }

      const currentRotation = rotation;

      // 0.5 秒後檢查變化幅度
      smallChangeTimeoutRef.current = setTimeout(() => {
        // const rotationDifference = Math.abs(
        //   currentRotation - lastRotationRef.current
        // );
        // 使用 gsap 線性回到 0
        gsap.to(
          {},
          {
            duration: 2, // 設置線性回到 0 的時長（2 秒）
            onUpdate: () => {
              setRotation((prevRotation) => prevRotation * 0.95); // 緩慢遞減 rotation 到 0
            },
            onComplete: () => {
              setRotation(0); // 最後確保 rotation 為 0
            },
            ease: "linear", // 線性動畫
          }
        );

        lastRotationRef.current = currentRotation; // 更新記錄的旋轉角度
      }, RotationCheckDelayTime); // 0.5 秒後執行
    };

    checkForSmallChange(); // 每次 rotation 改變時檢查變化幅度
  }, [rotation]);

  const handleClick = () => {
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        scale: 1.2,
        rotate: 15,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          gsap.to(rectRef.current, {
            scale: 1,
            rotate: rotation,
            duration: 0.3,
            ease: "elastic.out(1, 0.5)",
          });
        },
      });
    }

    handleRootpage();
  };

  const handleMouseEnter = () => {
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        scale: 1.1,
        boxShadow: "0px 0px 15px 5px rgba(255, 255, 255, 0.8)",
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    if (rectRef.current) {
      gsap.to(rectRef.current, {
        scale: 1,
        boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className="fixed z-[9999] top-5 left-5">
      <div
        ref={rectRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-16 h-16 bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex items-center justify-center"
      >
        <span className="text-2xl font-extrabold tracking-widest">
          <span className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Lai
          </span>
        </span>
      </div>
    </div>
  );
};

export default CircleIcon;
