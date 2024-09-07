// Main Interface

export interface Profile {
  title: string; // Headline or main title
  aboutMe: AboutMe; // Summary and detailed information about you
}

// About Me Section

export interface AboutMe {
  summary: string; // A brief summary about you
  stickersUrl: string;
  introduction: string; // A more detailed introduction
  details: PersonalDetails; // Detailed information like college, age, and major
  projects: Project[]; // Collection of your projects
  hobbies: Hobby[]; // Collection of your hobbies
}

// Detail Section

export interface PersonalDetails {
  college: string; // Your college name
  age: number; // Your age
  major: string; // Your major or field of study
}

// Projects Section

export interface Project {
  name: string; // Project name
  shortDescription: string; // Short description of the project
  technologiesUsed: Technology[]; // Array of technologies used in the project
}

// Competitions Section

export interface Competition {
  name: string; // Competition name
  shortDescription: string; // Short description of the competition
  technologiesUsed: Technology[]; // Array of technologies used in the competition
}

// Hobbies Section

export interface Hobby {
  name: string; // Name of the hobby or interest
  shortDescription: string; // Short description of the hobby
  relatedItems: Technology[]; // Array of related items or technologies used
}

// Shared Interface for Technologies

export interface Technology {
  name: string; // Name of the technology/item
  description?: string | null; // Optional description of the technology/item
}
