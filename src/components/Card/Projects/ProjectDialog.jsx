import React, { useEffect } from "react";
import { X, Play } from "lucide-react";
import Blueprint from "../../UI/Blueprint/Blueprint";
import { GithubMark } from "../../UI/SocialLinks/SocialLinks";

const ProjectDialog = ({ project, fig, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="dialog-backdrop p-12" onClick={onClose} role="presentation">
      <Blueprint
        className="max-h-[88vh] w-[min(1060px,100%)] overflow-y-auto bg-paper"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="flex items-start justify-between gap-8 border-b border-ink/15 px-8 pt-8 pb-6">
          <div>
            <div className="font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-steel">
              {fig}
            </div>
            <h2 className="mt-2 text-[40px] uppercase tracking-[-0.02em]">{project.title}</h2>
          </div>
          <button className="btn btn-secondary btn-icon" onClick={onClose} aria-label="Close">
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        <div className="grid md:grid-cols-[1.1fr_1fr]">
          <div className="border-ink/15 p-8 md:border-r">
            <img src={project.image} alt={project.title} className="w-full border border-ink/15" />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="tag tag-outline">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-8">
            <p className="text-[15px] leading-relaxed text-ink/80">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a
                className="btn btn-primary px-6 py-3"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!project.github}
                style={
                  project.github ? undefined : { pointerEvents: "none", opacity: 0.45 }
                }
              >
                <GithubMark className="h-[15px] w-[15px]" />
                Source
              </a>
              <a
                className="btn btn-secondary px-6 py-3"
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
      </Blueprint>
    </div>
  );
};

export default ProjectDialog;
