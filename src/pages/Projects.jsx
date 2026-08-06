import React from "react";
import ProjectCards from "../components/Card/Projects/ProjectCards";
import PageHeader from "../components/UI/PageHeader/PageHeader";
import { ProjectsText } from "../Assets/Data/ProjectsText";

const Projects = () => (
  <>
    <PageHeader
      kicker="03 — Selected Work"
      title="Projects"
      meta={
        <p className="text-[11px] uppercase tracking-[0.16em] text-ink/50">
          {String(ProjectsText.length).padStart(2, "0")} entries — select for detail
        </p>
      }
    />
    <ProjectCards />
  </>
);

export default Projects;
