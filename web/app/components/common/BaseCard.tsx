"use client";
/* eslint-disable @next/next/no-img-element */
import { Project } from "@/app/interface/base";
import React, { useEffect, useState } from "react";
import { FaGithub, FaHandPointRight } from "react-icons/fa"; // Import the icons you need

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactCardFlip from "react-card-flip";
import { SeparatorIsland, useIntersectionObserver } from ".";
import { SlideEffect } from "../animation";
import Link from "next/link";
import ClickableIcon from "./ClickableIcon";
import { getStaticUrl } from "@/app/cfg/constants";

interface CardProps {
  fornt: React.ReactNode;
  back?: React.ReactNode;
  other?: React.ReactNode;
}
const baseCard: React.FC<CardProps> = React.memo(({ fornt, back, other }) => {
  const { ref: projRef, isVisible: isProjVisible } = useIntersectionObserver({
    root: null,
    threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div ref={projRef}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front side */}

        <div
          className="rounded-lg shadow-lg max-w-sm mx-auto rounded-[20px] max-w-[500px] h-[350px]"
          onClick={handleFlip}
        >
          {fornt}
        </div>

        {/* Back side */}
        <div
          className="bg-gradient-to-b from-purple-600 to-indigo-700 rounded-lg shadow-lg max-w-sm mx-auto rounded-[20px] max-w-[500px] min-h-[400px]"
          onClick={handleFlip} // Optional: flip on click
        >
          <div className="p-4 text-center">
            {isFlipped && back && <div>{back}</div>}
          </div>

          {/* link */}

          {/* <div className="mt-4 flex justify-center gap-4">{other}</div> */}
        </div>
      </ReactCardFlip>
    </div>
  );
});

export default baseCard;
