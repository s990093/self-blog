"use client";

import { useEffect, useState } from "react";
import { Project, ProjType } from "@/app/interface/base";
import ProjectCard from "./ProjectsCards";
import ProjectsSection from "./ProjectsSection";
import { motion, useAnimation } from "framer-motion";
import { Tilt } from "react-tilt";
import { Tooltip, useIntersectionObserver } from "../common";
import { TiltWrapper } from "../Animation";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const [filter, setFilter] = useState<ProjType | "All">("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const controls = useAnimation();

  const { ref: projRef, isVisible: isProjVisible } = useIntersectionObserver({
    root: null,
    threshold: 0.1, // 當 10% 元件進入可視範圍時觸發
  });

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
    <div ref={projRef} className="container mx-auto ">
      {isProjVisible && (
        <ProjectsSection
          key={String(isProjVisible)}
          filter={filter}
          setFilter={setFilter}
        />
      )}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-3"
        animate={controls}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <TiltWrapper>
            <ProjectCard key={project.name} project={project} />
          </TiltWrapper>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsList;
