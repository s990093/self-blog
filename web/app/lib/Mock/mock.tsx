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
  title: "Welcome to my profile ",
  aboutMe: {
    name: "Lai Hung Wei",
    summary: "A passionate about life have a strong interest in software",
    introduction:
      "I am currently a junior in college, passionate about turning my ideas into reality and enjoying collaboration with others. Through continuous discussion and communication, I strive to solve problems. In addition to my enthusiasm for programming, I also love participating in outdoor activities such as music festivals and surfing, which keep me energetic and refreshed.",
    details: {
      college: "National Kaohsiung University of Science and Technology",
      age: 21,
      major: "Computer Science",
    },
    projects: selfprojects,
    hobbies: hobbies,
    stickersUrls: ["/test/self/self.png", "/test/self/self-2.png"],
    skill: technologies,
    personalLink: links,
    competition: competitions,
  },
};
