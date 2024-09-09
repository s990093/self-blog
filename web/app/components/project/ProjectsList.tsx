"use client";

import { useEffect, useState } from "react";
import { Project, ProjType } from "@/app/interface/base";
import ProjectCard from "./ProjectsCards";
import ProjectsSection from "./ProjectsSection";
import { motion, useAnimation } from "framer-motion";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const [filter, setFilter] = useState<ProjType | "All">("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: -100, opacity: 0 }).then(() => {
      setFilteredProjects(
        filter === "All"
          ? projects
          : projects.filter((project) =>
              project.projTypes.includes(filter as ProjType)
            )
      );
      controls.start({ x: 0, opacity: 1 });
    });
  }, [filter, projects, controls]);

  return (
    <div className="container mx-auto">
      <ProjectsSection filter={filter} setFilter={setFilter} />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        animate={controls}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsList;
