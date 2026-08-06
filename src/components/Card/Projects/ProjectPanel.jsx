import React from "react";
import { Play } from "lucide-react";
import { GithubMark } from "../../UI/SocialLinks/SocialLinks";

/**
 * Mobile-only project detail. Expands in place under the tapped figure instead of
 * opening a dialog — the grid-rows 0fr/1fr pair animates to the content's own height.
 */
const ProjectPanel = ({ project, open }) => (
  <div
    className={
      "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out sm:hidden " +
      (open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
    }
    inert={!open}
  >
    <div className="min-h-0">
      <div className="mt-3 border-l-2 border-steel bg-surface px-5 py-5">
        <p className="text-[14px] leading-relaxed text-ink/80">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="tag tag-outline">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="btn btn-primary px-5 py-2.5"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!project.github}
            style={project.github ? undefined : { pointerEvents: "none", opacity: 0.45 }}
          >
            <GithubMark className="h-[15px] w-[15px]" />
            Source
          </a>
          <a
            className="btn btn-secondary px-5 py-2.5"
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!project.demo}
            style={project.demo ? undefined : { pointerEvents: "none", opacity: 0.45 }}
          >
            <Play size={15} strokeWidth={1.5} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectPanel;
