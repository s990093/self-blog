import React, { useEffect, useMemo, useRef, useState } from "react";
import { Competition } from "../../interface/base";
import TotalSkills from "../Skill/TotalSkills";
import { TypingEffect } from "../animation";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import CompetitionCard from "./CompetitionCard";

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
  const [scrollDistance, setScrollDistance] = useState(0);
  const [blockCount, setBlockCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMiddleVisible, setIsMiddleVisible] = useState(false);

  const BLOCK_HEIGHT = 300;
  const MAX_BLOCK_COUNT = competitions.length - 1;

  const screenWidth = window.innerWidth;
  // Assuming tablet size is 768px or less
  const numCards = screenWidth <= 768 ? 1 : 3;
  const cardsToRender = useMemo(
    () => getUpdatedCards(numCards, blockCount, competitions),
    [blockCount, competitions]
  );

  const preventScroll = (event: WheelEvent) => {
    const isScrollingUp = event.deltaY < 0;

    if (isScrollingUp) {
      // Scrolling up: decrease blockCount if it's greater than 0
      if (blockCount > 0) {
        if (event.deltaY < 0) {
          setScrollDistance((prevDistance) => {
            const newDistance = prevDistance + event.deltaY;
            if (Math.abs(newDistance) >= BLOCK_HEIGHT) {
              setBlockCount((prevCount) => {
                const newCount = Math.max(prevCount - 1, 0);

                return newCount;
              });
              return 0;
            }
            return newDistance;
          });

          event.preventDefault();
        }
      }
    } else {
      // Scrolling down: increase blockCount if it's less than 9
      if (blockCount < MAX_BLOCK_COUNT * 2) {
        setScrollDistance((prevDistance) => {
          const newDistance = prevDistance + event.deltaY;

          // Log every 60 units of scroll distance and increase blockCount
          if (Math.abs(newDistance) >= BLOCK_HEIGHT) {
            setBlockCount((prevCount) => {
              const newCount = Math.min(prevCount + 1, MAX_BLOCK_COUNT * 2);

              return newCount;
            });
            return 0; // Reset the scroll distance counter
          }

          return newDistance;
        });
        event.preventDefault();
      } else {
        // Allow scrolling down if blockCount is 9
        // event.preventDefault();
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        container.addEventListener("wheel", preventScroll);

        const containerRect = container.getBoundingClientRect();
        const containerHeight = containerRect.height;
        const containerMiddle = containerRect.top + containerHeight / 2;
        const viewportMiddle = window.innerHeight / 2;
        const isMiddleVisible =
          containerMiddle < viewportMiddle &&
          containerMiddle > -containerHeight / 2;

        setIsMiddleVisible(isMiddleVisible);
      };

      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Trigger initial check

      return () => {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("wheel", preventScroll);
      };
    }
  }, [blockCount]);

  return (
    <div
      ref={containerRef}
      // onMouseLeave={handleMouseLeave}
    >
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
  );
};

export default CompetitionList;
