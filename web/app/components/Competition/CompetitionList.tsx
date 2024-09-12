import React, { useEffect, useMemo, useRef, useState } from "react";
import { Competition } from "../../interface/base";
import TotalSkills from "../Skill/TotalSkills";
import { TypingEffect } from "../animation";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import CompetitionCard from "./CompetitionCard";
import { useInView } from "react-intersection-observer";
import { getDeviceType } from "@/app/lib/utils/func";

interface CompetitionListProps {
  competitions: Competition[];
}
const getUpdatedCards = (
  numCards: number,
  blockCount: number,
  competitions: Competition[]
) => {
  // Calculate the indices for the cards to be displayed
  const startIndex = Math.floor(blockCount / 2) % competitions.length;

  return Array.from({ length: numCards }, (_, i) => {
    const index = (startIndex + i) % competitions.length;
    return { competition: competitions[index], index };
  });
};

const CompetitionList: React.FC<CompetitionListProps> = ({ competitions }) => {
  const { ref: targetRef, inView } = useInView({
    threshold: 0.7,
    triggerOnce: false, // 每次進出都會觸發
  });

  const [scrollDistance, setScrollDistance] = useState(0);
  const [blockCount, setBlockCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMiddleVisible, setIsMiddleVisible] = useState(false);
  const [pass, setPass] = useState(false);
  const [lastTouchY, setLastTouchY] = useState(0); // 新增：用來記錄觸摸位置

  let blockScale = 1;
  const device = getDeviceType();
  console.log(device);
  switch (device) {
    case 1:
      blockScale = 9;
      break;
  }

  const BLOCK_HEIGHT = 300 * blockScale;
  const MAX_BLOCK_COUNT = competitions.length - 1;

  const screenWidth = window.innerWidth;
  // Assuming tablet size is 768px or less
  const numCards = screenWidth <= 768 ? 1 : 3;

  const cardsToRender = useMemo(
    () => getUpdatedCards(numCards, blockCount, competitions),
    [blockCount, competitions]
  );

  const preventScroll = (event: WheelEvent | TouchEvent) => {
    let deltaY = 0;

    if (event.type === "touchmove" && event instanceof TouchEvent) {
      const touch = event.touches[0];
      deltaY = -(lastTouchY - touch.clientY);
      setLastTouchY(touch.clientY);

      if (pass == false) {
        event.preventDefault();
      }
    } else if (event instanceof WheelEvent) {
      // 處理桌面上的滾輪事件
      deltaY = event.deltaY;
    }

    const isScrollingUp = deltaY < 0;

    if (isScrollingUp) {
      if (blockCount > 0) {
        setScrollDistance((prevDistance) => {
          const newDistance = prevDistance + deltaY;
          if (Math.abs(newDistance) >= BLOCK_HEIGHT) {
            setBlockCount((prevCount) => Math.max(prevCount - 1, 0));
            if (blockCount == MAX_BLOCK_COUNT) {
              document.body.style.overflow = "";
              setPass(true);
            }
            return 0;
          }
          return newDistance;
        });
      }
    } else {
      // down
      if (blockCount < MAX_BLOCK_COUNT) {
        setScrollDistance((prevDistance) => {
          const newDistance = prevDistance + deltaY;
          if (Math.abs(newDistance) >= BLOCK_HEIGHT) {
            setBlockCount((prevCount) => {
              const newCount = Math.min(prevCount + 1, MAX_BLOCK_COUNT);
              // 當 blockCount 達到
              // console.log(newCount == MAX_BLOCK_COUNT, newCount);
              if (newCount == MAX_BLOCK_COUNT) {
                document.body.style.overflow = "";
                setPass(true);
              }
              return newCount;
            });
            return 0;
          }
          return newDistance;
        });
      }
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    setLastTouchY(touch.clientY); // 記錄手指的初始位置
  };

  useEffect(() => {
    if (inView) {
      // console.log("In view", pass);
      document.body.style.overflow = "hidden";

      setPass(false);
      // 禁用全局滾動
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      // 解除滾動限制
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", preventScroll);
    }

    // 清理滾動事件
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", preventScroll);
      // setPass(true);
    };
  }, [inView]);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (container) {
  //     const handleScroll = () => {
  //       container.addEventListener("wheel", preventScroll);

  //       const containerRect = container.getBoundingClientRect();
  //       const containerHeight = containerRect.height;
  //       const containerMiddle = containerRect.top + containerHeight / 2;
  //       const viewportMiddle = window.innerHeight / 2;
  //       const isMiddleVisible =
  //         containerMiddle < viewportMiddle &&
  //         containerMiddle > -containerHeight / 2;

  //       setIsMiddleVisible(isMiddleVisible);
  //     };

  //     container.addEventListener("scroll", handleScroll, { passive: true });
  //     handleScroll(); // Trigger initial check

  //     return () => {
  //       container.addEventListener("scroll", handleScroll, { passive: true });
  //       container.removeEventListener("wheel", preventScroll);
  //     };
  //   }
  // }, [blockCount]);

  return (
    <div ref={targetRef}>
      <div ref={containerRef}>
        <div className="mb-4">
          <TypingEffect
            sequence={[
              `${MAX_BLOCK_COUNT + 1} Prize`,
              2000,
              `${MAX_BLOCK_COUNT + 1} Reward`,
              2000,
            ]}
            fontSize={45}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {cardsToRender.map(({ competition, index }) => (
            <CompetitionCard
              key={index}
              competition={competition}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitionList;
