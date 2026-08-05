import React from "react";
import Project from "./Project";
import { ProjectsText } from "../../../Assets/Data/ProjectsText";

const ProjectCards = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-screen-xl pb-12 mx-auto">
      {ProjectsText.map((project, index) => {
        return (
          <Project
            key={index}
            image={project.image}
            description={project.description}
            title={project.title}
            stack={project.stack}
            githubStatus={project.github}
            githubLink={project.githubLink}
            demoStatus={project.demo}
            demoLink={project.demoLink}
          />
        );
      })}
    </div>
  );
};

export default ProjectCards;
