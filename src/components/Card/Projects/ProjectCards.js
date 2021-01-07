import React from "react";
import Project from "./Project";
import { ProjectsText } from "../../../Assets/Data/ProjectsText";

const ProjectCards = () => {
  return (
    <section className="px-4 mb-10 overflow-x-hidden">
      <div className="flex flex-wrap justify-center -mx-8">
        {ProjectsText.map((project, index) => {
          return (
            <Project key={index} image={project.image} title={project.title} />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectCards;
