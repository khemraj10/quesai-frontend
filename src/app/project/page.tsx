"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import styles from "../../styles/project.module.css";
import CreateProjectButton from "@/components/CreateProjectButton";
import Link from "next/link";

const data = [{ title: "Sample Project", files: 4, lastEdited: "a week ago" }];

const Projects = () => {
  const [projects, setProjects] = useState(data);

  return (
    <div className={styles.container}>
      <Header />
      {projects.length > 0 ? (
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`project/${project.title
                .toLowerCase()
                .replace(/\s+/g, "")}/podcast`}
            >
              <ProjectCard
                title={project.title}
                files={project.files}
                lastEdited={project.lastEdited}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <h2 className={styles.projectsTitle}>Create a New Project</h2>
          <div className="w-[300px] h-[300px]" />
          <p className="text-gray-500 w-200 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste
            tempore, itaque explicabo quos repellendus consequuntur eligendi
            sint dolore porro ea. Aliquid, magni nulla eaque vero voluptatem
            beatae esse saepe!
          </p>
          <CreateProjectButton />
        </div>
      )}
    </div>
  );
};

export default Projects;
