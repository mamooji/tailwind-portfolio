import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Blueprint from "../../UI/Blueprint/Blueprint";

/**
 * A project figure. Duotoned at rest; hover reveals the screenshot's true color.
 * `expanded` only applies below `sm`, where the detail opens inline rather than in a dialog.
 */
const Project = ({ fig, title, image, stack, expanded, onOpen }) => (
  <figure className="group m-0 cursor-pointer" onClick={onOpen}>
    <Blueprint
      className={
        "duotone duotone-reveal h-[220px] overflow-hidden transition-colors group-hover:border-steel " +
        (expanded ? "duotone-open max-sm:border-steel" : "")
      }
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute right-0 bottom-0 z-10 hidden items-center gap-1.5 bg-paper px-2.5 py-1.5 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors group-hover:text-steel sm:flex">
        Detail
        <ArrowUpRight size={12} strokeWidth={1.5} />
      </span>
      <span
        className={
          "absolute right-0 bottom-0 z-10 flex items-center gap-1.5 bg-paper px-2.5 py-1.5 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors sm:hidden " +
          (expanded ? "text-steel" : "text-ink/45")
        }
      >
        {expanded ? "Close" : "Detail"}
        <ChevronDown
          size={12}
          strokeWidth={1.5}
          className={"transition-transform duration-300 " + (expanded ? "rotate-180" : "")}
        />
      </span>
    </Blueprint>
    <figcaption className="mt-3">
      <div className="flex items-baseline gap-2">
        <span className="font-heading text-[10px] font-semibold tracking-[0.14em] text-ink/40">
          {fig}
        </span>
        <h3 className="text-[22px] uppercase tracking-[-0.01em]">{title}</h3>
      </div>
      <p className="mt-2 text-[11px] uppercase tracking-[0.06em] text-ink/55">
        {stack.join(" | ")}
      </p>
    </figcaption>
  </figure>
);

export default Project;
