import { Profile } from "@/app/interface/base";
import { competition } from "./competition";
import { links } from "./links";
import { technologies } from "./skill";
import { selfprojects } from "./proj";

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
    hobbies: [
      {
        name: "Photography",
        shortDescription:
          "Capturing moments and landscapes with a focus on composition and lighting.",
        relatedItems: [
          { name: "DSLR Camera", icon: "camera", description: "Canon EOS 80D" },
          {
            name: "Lightroom",
            icon: "lightroom",
            description: "Photo editing software",
          },
        ],
      },
      {
        name: "Cycling",
        shortDescription: "Long-distance cycling for fitness and exploration.",
        relatedItems: [
          { name: "Road Bike", icon: "bike", description: "Specialized Allez" },
          {
            name: "Strava",
            icon: "strava",
            description: "Fitness tracking app for cyclists",
          },
        ],
      },
    ],
    stickersUrl: "/test/self/self.png",
    skill: technologies,
    personalLink: links,
    competition: Array(3).fill(competition),
  },
};
