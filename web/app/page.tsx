/* eslint-disable @next/next/no-img-element */
import React from "react";
import { mockProfile } from "./lib/mock/mock";
import SkillSection from "./components/Skill/SkillSection";

import CompetitionList from "./components/CompetitionCard";
import HobbyList from "./components/HobbyCard";
import PersonalLinkList from "./components/PersonalLink";
import ProjectsList from "./components/project/ProjectsCards";
import Image from "next/image";
import { TextItem } from "./components/3d/STLViewer/helper";
import STLViewer from "./components/3d/STLViewer/STLViewer";
import BaseMedalViewer from "./components/3d/STLViewer/BaseMadel";

export default function Home() {
  const textArray: TextItem[] = [
    { name: "First Place", x: -18, y: -3, color: "#FFD700" }, // Gold color
    { name: "2024/1/2", x: -12, y: -15, size: 3.4, color: "#000000" }, // Black color
  ];

  return (
    <div className="bg-navyBlue min-h-screen text-babyBlue p-10">
      <BaseMedalViewer
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
      />
      <div className="flex flex-wrap gap-4 p-4"></div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          {mockProfile.title}
        </h1>
        <div className="bg-blueGrotto p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">關於我</h2>
          <img
            src={mockProfile.aboutMe.stickersUrl}
            alt="Profile Image"
            className="h-[70px] rounded-lg mb-4"
          />
          <p className="text-lg">{mockProfile.aboutMe.summary}</p>
          <p className="text-lg mt-4">{mockProfile.aboutMe.introduction}</p>
          <p className="text-lg mt-4">
            <Image
              src="/test/self/college.png"
              alt="College"
              width={24} // Adjust the width and height as needed
              height={24}
              className="inline-block mr-2"
            />
            學歷: {mockProfile.aboutMe.details.college}
            <br />
            <Image
              src="/test/common/age.png"
              alt="College"
              width={24} // Adjust the width and height as needed
              height={24}
              className="inline-block mr-2"
            />
            年齡: {mockProfile.aboutMe.details.age}
            <br />
            <Image
              src="/test/self/major.png"
              alt="College"
              width={24} // Adjust the width and height as needed
              height={24}
              className="inline-block mr-2"
            />
            主修: {mockProfile.aboutMe.details.major}
          </p>
          {/* skill card div*/}

          <SkillSection skills={mockProfile.aboutMe.skill} />
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
