// components/ProjectCard.tsx
import React from "react";
import styles from "../styles/ProjectCard.module.css";
import CreateProjectButton from "./CreateProjectButton";

interface ProjectCardProps {
  title: string;
  files: number;
  lastEdited: string;
}

// Sample Data
// let projects: Project[] = [
//   {
//     id: 1,
//     name: "Sample Project",
//     fileCount: 4,
//     lastEdited: new Date("2023-09-10"),
//   },
// ];

// const createNewProject = (name: string, fileCount: number): Project => {
//   const newProject: Project = {
//     id: projects.length + 1,
//     name: name,
//     fileCount: fileCount,
//     lastEdited: new Date(),
//   };
//   projects.push(newProject);
//   return newProject;
// };

// // Function to display projects
// const displayProjects = (): void => {
//   console.log("Projects:");
//   projects.forEach((project) => {
//     console.log(
//       `- ${project.name} (${
//         project.fileCount
//       } Files) | Last edited: ${project.lastEdited.toLocaleDateString()}`
//     );
//   });
// };

// // Sample usage
// displayProjects();
// const newProject = createNewProject("New Project", 2);
// console.log("Created New Project:", newProject);
// displayProjects();

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  files,
  lastEdited,
}) => {
  return (
    <div className={styles.projectContainer}>
      <div className="flex justify-between items-center pb-8">
        <h1>Projects</h1>
        <CreateProjectButton />
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>SP</div>
        <div className="flex flex-col items-start justify-between pl-4 pt-2">
          <div className="flex flex-col items-start">
            <h3>{title}</h3>
            <p>{files} Files</p>
          </div>
          <p>Last edited {lastEdited}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
