"use client";
import React, { ReactNode, useState } from "react";

import { mockProfile } from "./lib/mock/mockProfile";
import Image from "next/image"; // Import the correct Image component
import Link from "next/link";
import { motion } from "framer-motion";

// component
import SkillSection from "./components/Skill/SkillSection";
import CompetitionList from "./components/competition/CompetitionList";
import HobbyList from "./components/HobbyCard";
import PersonalLinkList from "./components/PersonalLink";
import { SlideEffect, TypingEffect } from "./components/animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfileImage from "./components/ProfileImage";
import ZoomEffect from "./components/ZoomEffect";
import { SeparatorIsland, useIntersectionObserver } from "./components/common";

import ProjectsList from "./components/project/ProjectsList";
import ResourceLoader from "./context/ResourceLoader";
import VantaBackground from "./components/common/VantaBackground";
import { getStaticUrl } from "./cfg/constants";
import MovieLinker from "./components/common/MovieLinker";
import FloatingBackground from "./components/common/FloatingBackground";
import { getDeviceType } from "./lib/utils/func";
import useDeviceType from "./context/UseDeviceType";
import { OPENING_EFFECTS } from "./lib/utils";

export default function PreLoadHomePage() {
  const stickersUrls = getStaticUrl("test/self/self.png");
  // const stickersUrls = "/test/self/self.png";

  const linksImages = mockProfile.aboutMe.skill.map((skill) =>
    getStaticUrl(`test/technology/color/${skill.icon}`)
  );
  const stl = getStaticUrl("3d/Medal.STL");

  const projectImages = mockProfile.aboutMe.projects.map((proj) =>
    getStaticUrl(proj.projectImages[0])
  );

  const allUrls = [stickersUrls, ...linksImages, stl, ...projectImages];

  const deviceType = useDeviceType();

  return (
    <>
      <ResourceLoader resourceUrls={allUrls}>
        <>
          {deviceType <= 2 ? (
            <FloatingBackground>
              <Home />
            </FloatingBackground>
          ) : (
            // 电脑使用 VantaBackground
            <VantaBackground>
              <Home />
            </VantaBackground>
          )}
        </>
      </ResourceLoader>
    </>
  );
}
function Home() {
  const [showZoom, setShowZoom] = useState(OPENING_EFFECTS);
  const { ref: aboutMeRef, isVisible: isAboutMeVisible } =
    useIntersectionObserver({
      root: null,
      threshold: 0.1,
    });
  const { ref: competitionListRef, isVisible: isCompetitionListVisible } =
    useIntersectionObserver({
      root: null,
      threshold: 0.1,
    });

  const { ref: hobbyListRef, isVisible: isHobbyListVisible } =
    useIntersectionObserver({
      root: null,
      threshold: 0.1,
    });

  const aboutMeStatus = isAboutMeVisible ? Date.now() : "";
  const competitionListStatus = isCompetitionListVisible ? Date.now() : "";
  const hobbyListStatus = isHobbyListVisible ? Date.now() : "";

  const handleZoomComplete = () => {
    setShowZoom(false); // 放大动画完成后隐藏
  };

  const deviceWith = getDeviceType();
  let fontSize;

  switch (deviceWith) {
    case 1:
      fontSize = 30;
      break;
    case 3:
      fontSize = 30;
      break;
    case 2:
      fontSize = 50;
      break;
    default:
      fontSize = 16;
      break;
  }

  return (
    <>
      <div className="min-h-screen text-babyBlue p-10">
        {showZoom && (
          <div
            style={{
              position: "absolute",
              top: "0%",
              right: "0%",
              width: "100%",
            }}
          >
            <ZoomEffect
              imageUrl={getStaticUrl(mockProfile.aboutMe.stickersUrls[0])}
              onAnimationComplete={handleZoomComplete}
            />
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: "0%",
            right: "0%",
            width: "100%",
          }}
        ></div>

        <div className="max-w-4xl mx-auto">
          {/* type */}
          <h1 className="text-5xl font-bold text-center mb-8">
            <TypingEffect
              sequence={[mockProfile.title, 2000, "Hello World !", 1000]}
              fontSize={fontSize}
            />
          </h1>
          <div className="bg-blueGrotto bg-opacity-65 p-6 rounded-lg shadow-lg">
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

              {isAboutMeVisible && !showZoom && (
                <ProfileImage
                  key={aboutMeStatus}
                  imageUrl={getStaticUrl(mockProfile.aboutMe.stickersUrls[0])}
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
                    src={getStaticUrl("test/self/college.png")}
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
                  src={getStaticUrl("test/self/major.png")}
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

            <CompetitionList competitions={mockProfile.aboutMe.competition} />

            {/* hobby */}
            <HobbyList hobbies={mockProfile.aboutMe.hobbies} />

            {/* link */}
            <MovieLinker />

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
    </>
  );
}
