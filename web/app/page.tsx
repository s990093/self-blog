import React from "react";
import mockProfile from "./lib/helper/mock";
// import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-navyBlue min-h-screen text-babyBlue p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          {mockProfile.title}
        </h1>

        <div className="bg-blueGrotto p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">關於我</h2>
          {/* <Image
            src={mockProfile.aboutMe.stickersUrl}
            height={mockProfile.aboutMe.
            alt="Profile Image"
            className="w-full h-auto rounded-lg mb-4"
          /> */}
          <p className="text-lg">{mockProfile.aboutMe.summary}</p>
          <p className="text-lg mt-4">{mockProfile.aboutMe.introduction}</p>
          <p className="text-lg mt-4">
            學歷: {mockProfile.aboutMe.details.college}
            <br />
            年齡: {mockProfile.aboutMe.details.age}
            <br />
            主修: {mockProfile.aboutMe.details.major}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {mockProfile.aboutMe.projects.map((project, index) => (
            <div key={index} className="bg-blueGreen p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-lg">{project.shortDescription}</p>
              <a
                href="#"
                className="text-navyBlue underline hover:text-babyBlue mt-4 inline-block"
              >
                查看詳情
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {mockProfile.aboutMe.hobbies.map((hobby, index) => (
            <div key={index} className="bg-blueGreen p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{hobby.name}</h3>
              <p className="text-lg">{hobby.shortDescription}</p>
              <a
                href="#"
                className="text-navyBlue underline hover:text-babyBlue mt-4 inline-block"
              >
                查看詳情
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
