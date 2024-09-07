// pages/projects.tsx
import { FC } from "react";
import { Project } from "../interface/base";

const projectData: Project[] = [
  {
    name: "Example Project",
    projectImages: ["image1.jpg", "image2.jpg"],
    shortDescription: "This is a short description of the project.",
    technologiesUsed: [
      {
        name: "React",
        icon: "react-icon.svg",
        description: "A JavaScript library for building user interfaces",
      },
      {
        name: "TypeScript",
        icon: "typescript-icon.svg",
        description: "A typed superset of JavaScript",
      },
    ],
    githubUrl: "https://github.com/example",
    time: "2024",
  },
];

const ProjectPage: FC = () => {
  return (
    <div
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <h1>Projects</h1>
      {projectData.map((project, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h2>{project.name}</h2>
          <p>{project.shortDescription}</p>
          <p>
            <strong>Time:</strong> {project.time}
          </p>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
          <div>
            {project.projectImages.length > 0 && (
              <div>
                {project.projectImages.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`${project.name} image ${i + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginRight: "10px",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          <div style={{ marginTop: "10px" }}>
            {project.technologiesUsed.map((tech, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                <span>
                  {tech.name}: {tech.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
