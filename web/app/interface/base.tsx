// Main Interface

export interface Profile {
  title: string; // Headline or main title
  aboutMe: AboutMe; // Summary and detailed information about you
}

// About Me Section

export interface AboutMe {
  name: string;
  summary: string; // A brief summary about you
  stickersUrls: string[];
  introduction: string; // A more detailed introduction
  details: PersonalDetails; // Detailed information like college, age, and major
  projects: Project[]; // Collection of your projects
  skill: Technology[]; // Collection of your projects
  hobbies: Hobby[]; // Collection of your hobbies
  personalLink: PersonalLink[];
  competition: Competition[];
}

// Detail Section

export interface PersonalDetails {
  college: string; // Your college name
  collegeIcon?: string; // Your college name
  age: number; // Your age
  major: string; // Your major or field of study
}

// Projects Section
export interface Skill {
  name: string; // Name of the hobby or interest
  shortDescription?: string | null; // Short description of the hobby
  relatedItems: Technology[]; // Array of related items or technologies used
}

export enum ProjType {
  Web = "Web",
  Embedded = "Embedded",
  System = "System",
  Mobile = "Mobile",
  Server = "Server",
  Other = "Other",
}

export interface Project {
  name: string; // Project name
  projectImages: string[] | [];
  projTypes: ProjType[];
  shortDescription: string; // Short description of the project]
  technologiesUsed: Technology[]; // Array of technologies used in the project
  githubUrl?: string;
  startTime?: Date;
  time: string;
  inProgress?: boolean;
}

// Competitions Section

// competition.interface.ts
export enum PrizeType {
  FirstPrize = "First Prize",
  SecondPrize = "Second Prize",
  ThirdPrize = "Third Prize",
  HonorableMention = "Honorable Mention",
  ExcellentWork = "Excellent Prize",
  Selection = "Selection",
  Participation = "Participation", // 新增參加獎
}

export interface Competition {
  name: string; // Competition name
  shortDescription: string; // Short description of the competition
  rewardImage?: string; //
  url?: string; // comp website url
  techno?: string; // Technology or theme related to the competition
  startDate: Date; // Start date of the competition
  endDate?: Date; // End date of the competition
  location?: string; // Optional location where the competition is held
  participants?: string[]; // Optional array of participant names or IDs
  prizes: PrizeType; // Array of prizes
}

// Hobbies Section

export interface Hobby {
  name: string; // Name of the hobby or interest
  shortDescription: string; // Short description of the hobby
  relatedItems?: Technology[] | []; // Array of related items or technologies used
  imageUrl: string; // Add this field for the image URL
}

// Shared Interface for Technologies

export interface Technology {
  name: string; // Name of the technology/item
  icon: string; // Icon of the technology
  type?: string | null;
  description?: string | null; // Optional description of the technology/item
}

export interface PersonalLink {
  platform: string; // e.g., "GitHub", "Instagram", "Facebook"
  url: string; // The URL of the platform
  icon: string; // Optional icon or image URL for the platform
}
