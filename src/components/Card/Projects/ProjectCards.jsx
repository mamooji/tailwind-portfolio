import React, { useState } from "react";
import Project from "./Project";
import ProjectPanel from "./ProjectPanel";
import ProjectDialog from "./ProjectDialog";
import { ProjectsText } from "../../../Assets/Data/ProjectsText";

const fig = (i) => "Fig. " + String(i + 1).padStart(2, "0");

/**
 * One `openIndex` drives both presentations; which one is visible is decided purely by
 * CSS at the `sm` breakpoint — inline panel below, dialog above — so a resize can never
 * leave the two disagreeing.
 */
const ProjectCards = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i));

  return (
    <section className="border-t border-ink/15">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-8 pt-12 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectsText.map((project, index) => (
          <React.Fragment key={project.title}>
            <Project
              fig={fig(index)}
              expanded={openIndex === index}
              onOpen={() => toggle(index)}
              {...project}
            />
            <ProjectPanel project={project} open={openIndex === index} />
          </React.Fragment>
        ))}
      </div>
      <ProjectDialog
        project={openIndex > -1 ? ProjectsText[openIndex] : null}
        fig={fig(openIndex)}
        onClose={() => setOpenIndex(-1)}
      />
    </section>
  );
};

export default ProjectCards;
