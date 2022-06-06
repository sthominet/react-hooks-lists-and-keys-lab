import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map(({ name, about, technologies }, i) =>
      <ProjectItem name={name} about={about} technologies={technologies} key={i} />)
      }
      </div>
    </div>
  );
}

export default ProjectList;
