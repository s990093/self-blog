"use client";
import React, { useState } from "react";

import { mockProfile } from "./lib/mock/mock";

// component
import SkillSection from "./components/Skill/SkillSection";
import CompetitionList from "./components/CompetitionCard";
import HobbyList from "./components/HobbyCard";
import PersonalLinkList from "./components/PersonalLink";
import { SlideEffect, TypingEffect } from "./components/Animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfileImage from "./components/ProfileImage";
import ZoomEffect from "./components/ZoomEffect";
import { SeparatorIsland, useIntersectionObserver } from "./components/common";

import { OPENING_EFFECTS } from "./lib/utils";
import ProjectsList from "./components/project/ProjectsList";

export default function Home() {
  // const textArray: TextItem[] = [
  //   { name: "First Place", x: -18, y: -3, color: "#FFD700" }, // Gold color
  //   { name: "2024/1/2", x: -12, y: -15, size: 3.4, color: "#000000" }, // Black color
  // ];

  // console.log(OPENING_EFFECTS);
  const [showZoom, setShowZoom] = useState(OPENING_EFFECTS); // 控制是否显示放大效果
  // 設定要監視的區塊
  const { ref: aboutMeRef, isVisible: isAboutMeVisible } =
    useIntersectionObserver({
      root: null,
      threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
    });
  const { ref: competitionListRef, isVisible: isCompetitionListVisible } =
    useIntersectionObserver({
      root: null,
      threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
    });

  const { ref: hobbyListRef, isVisible: isHobbyListVisible } =
    useIntersectionObserver({
      root: null,
      threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
    });

  const aboutMeStatus = isAboutMeVisible ? Date.now() : "";
  const competitionListStatus = isCompetitionListVisible ? Date.now() : "";
  const hobbyListStatus = isHobbyListVisible ? Date.now() : "";

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

      <div className="max-w-4xl mx-auto">
        {/* type */}
        <h1 className="text-5xl font-bold text-center mb-8">
          <TypingEffect
            sequence={[mockProfile.title, 2000, "Hello World !", 1000]}
            fontSize={50}
          />
        </h1>
        <div className=" bg-blueGrotto bg-opacity-80 p-6 rounded-lg shadow-lg">
          {/* block -1 aboutme */}
          <div ref={aboutMeRef}>
            <h2 className="text-3xl font-semibold mb-4">
              {isAboutMeVisible && (
                <SlideEffect
                  key={aboutMeStatus}
                  text="About me"
                  fontSize="text-3xl font-mono"
                  duration={0.5}
                />
              )}
            </h2>
            {/* ProfileImage */}

            {isAboutMeVisible && (
              <ProfileImage
                key={aboutMeStatus}
                imageUrl={mockProfile.aboutMe.stickersUrls[0]}
              />
            )}

            {/* summary */}

            <div className="flex flex-col  space-y-4">
              {isAboutMeVisible && (
                <SlideEffect
                  key={`${aboutMeStatus}-summary`}
                  text={mockProfile.aboutMe.summary}
                  fontSize="text-base font-mono"
                  duration={2}
                />
              )}

              {isAboutMeVisible && (
                <SlideEffect
                  key={`${aboutMeStatus}-introduction`}
                  text={mockProfile.aboutMe.introduction}
                  fontSize="text-base font-mono"
                />
              )}
            </div>

            {/* details  */}
            <SeparatorIsland />

            <div className="flex items-center mt-3">
              {isAboutMeVisible && (
                <LazyLoadImage
                  key={`${aboutMeStatus}-image`}
                  src="/test/self/college.png"
                  alt="College"
                  width={24} // Adjust the width and height as needed
                  height={24}
                  className="inline-block mr-2"
                />
              )}

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
              {isAboutMeVisible && (
                <SlideEffect
                  key={aboutMeStatus}
                  text={String(mockProfile.aboutMe.details.major)}
                  fontSize="text-sm font-serif"
                />
              )}
            </div>
            <SeparatorIsland />
          </div>

          <div className="mt-3">
            <SkillSection skills={mockProfile.aboutMe.skill} />
          </div>
        </div>
        {/* Block - end */}

        {/* block-2 skill */}
        {/* detail */}
        <div className="flex flex-col space-y-4 pt-6">
          {/* proj */}
          <ProjectsList projects={mockProfile.aboutMe.projects} />

          {/* CompetitionList */}
          {/* <div ref={competitionListRef}>
            {isCompetitionListVisible && (
              <CompetitionList
                key={competitionListStatus}
                competitions={mockProfile.aboutMe.competition}
              />
            )}
          </div> */}
          <CompetitionList
            key={String(competitionListStatus)}
            competitions={mockProfile.aboutMe.competition}
          />
          {/* hobby */}
          <HobbyList hobbies={mockProfile.aboutMe.hobbies} />

          {/* PersonalLinkCards */}
          <div ref={hobbyListRef}>
            {isHobbyListVisible && (
              <PersonalLinkList
                key={hobbyListStatus}
                links={mockProfile.aboutMe.personalLink}
                name={mockProfile.aboutMe.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
