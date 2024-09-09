"use client";

import React, { useState } from "react";

import { mockProfile } from "./lib/mock/mock";

// component
import SkillSection from "./components/Skill/SkillSection";
import CompetitionList from "./components/CompetitionCard";
import HobbyList from "./components/HobbyCard";
import PersonalLinkList from "./components/PersonalLink";
import Image from "next/image";
import { TextItem } from "./components/3d/STLViewer/helper";
import STLViewer from "./components/3d/STLViewer/STLViewer";
import BaseMedalViewer from "./components/3d/STLViewer/BaseMadel";
import { SlideEffect, TypingEffect } from "./components/Animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfileImage from "./components/ProfileImage";
import ZoomEffect from "./components/ZoomEffect";
import { SeparatorIsland } from "./components/common";

import { TypeAnimation } from "react-type-animation";
import { OPENING_EFFECTS } from "./lib/utils";
import ProjectsList from "./components/project/ProjectsList";

export default function Home() {
  // const textArray: TextItem[] = [
  //   { name: "First Place", x: -18, y: -3, color: "#FFD700" }, // Gold color
  //   { name: "2024/1/2", x: -12, y: -15, size: 3.4, color: "#000000" }, // Black color
  // ];
  const [showZoom, setShowZoom] = useState(OPENING_EFFECTS); // 控制是否显示放大效果

  const handleZoomComplete = () => {
    setShowZoom(false); // 放大动画完成后隐藏
  };

  return (
    <div className="min-h-screen text-babyBlue p-10">
      {showZoom && (
        <ZoomEffect
          imageUrl={mockProfile.aboutMe.stickersUrls[0]}
          onAnimationComplete={handleZoomComplete}
        />
      )}

      {/* <BaseMedalViewer
        xOffset={-55}
        yOffset={-50}
        scale={2.9}
        height={320}
        width={320}
        stlPath={"/3d/Medal.STL"}
        medalType={"champion"}
        reflectivity={10}
        shininess={100}
        texturePath="/3d/textures/metal.jpg"
        textArray={textArray}
        fontPath="/fonts/helvetiker_bold.typeface.json"
        animationConfig={{
          type: "rotation",
          axis: "y",
          speed: 0.8,
          delayMs: 100, // 2 seconds delay
          repeatTimes: 20, // Rotate 5 times
        }}
      /> */}
      <div className="flex flex-wrap gap-4 p-4"></div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          <TypingEffect
            sequence={[mockProfile.title, 2000, "Hello World !", 1000]}
            fontSize={50}
          />
        </h1>
        <div className=" bg-blueGrotto bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">
            <SlideEffect
              text="About me"
              fontSize="text-3xl font-mono"
              duration={0.5}
            />
          </h2>

          {/* ProfileImage */}

          {!showZoom && (
            <ProfileImage imageUrl={mockProfile.aboutMe.stickersUrls[0]} />
          )}

          {/* summary */}
          <div className="flex flex-col  space-y-4">
            <SlideEffect
              text={mockProfile.aboutMe.summary}
              fontSize="text-base font-mono"
              duration={2}
            />

            <SlideEffect
              text={mockProfile.aboutMe.introduction}
              fontSize="text-base font-mono"
            />
          </div>

          {/* details  */}
          <SeparatorIsland />

          <div className="flex items-center mt-3">
            <LazyLoadImage
              src="/test/self/college.png"
              alt="College"
              width={24} // Adjust the width and height as needed
              height={24}
              className="inline-block mr-2"
            />
            <SlideEffect
              text={`${mockProfile.aboutMe.details.college}`}
              fontSize="text-sm font-serif"
            />
            <div />
          </div>

          <div className="flex items-center mt-3">
            <LazyLoadImage
              src="/test/self/major.png"
              alt="College"
              width={24} // Adjust the width and height as needed
              height={24}
              className="inline-block mr-2"
            />
            <SlideEffect
              text={String(mockProfile.aboutMe.details.major)}
              fontSize="text-sm font-serif"
            />
          </div>
          <SeparatorIsland />

          <div className="mt-3">
            <SkillSection skills={mockProfile.aboutMe.skill} />
          </div>
        </div>

        {/* detail */}
        <div className="flex flex-col space-y-4 pt-6">
          {/* proj */}
          <ProjectsList projects={mockProfile.aboutMe.projects} />

          {/* CompetitionList */}
          <CompetitionList competitions={mockProfile.aboutMe.competition} />

          {/* hobby */}
          <HobbyList hobbies={mockProfile.aboutMe.hobbies} />

          {/* PersonalLinkCards */}
          <PersonalLinkList links={mockProfile.aboutMe.personalLink} />
        </div>
      </div>
    </div>
  );
}
