import { Profile, Technology } from "@/app/interface/base";
import { links } from "./links";
import { commonTechnologies } from "./commonTechnologies";
import { technologies } from "./skill";
import { selfprojects } from "./proj";
import { competitions } from "./awards";
import { hobbies } from "./hobbies";

export const mockTechnologies: Technology[] = [
  ...commonTechnologies,
  ...commonTechnologies.slice(0, 5), // Repeat the first 5 technologies to fill the list
];

export const mockProfile: Profile = {
  title: "Welcome to my profile",
  aboutMe: {
    summary:
      "A passionate developer with a love for building web applications.",
    introduction:
      "I am a Full Stack Developer with 5 years of experience in building responsive and scalable applications. My expertise lies in React, Node.js, and Python. I love solving complex problems and turning ideas into reality.",
    details: {
      college: "National Kaohsiung University of Science and Technology",
      age: 21,
      major: "Computer Science",
    },
    projects: selfprojects,
    hobbies: hobbies,
    stickersUrl: "/test/self/self.png",
    skill: technologies,
    personalLink: links,
    competition: competitions,
  },
};
