import React from "react";

/** One cell of the attributes grid - divided by hairlines, not boxed in cards. */
const SingleCard = ({ num, icon: Icon, title, description, index }) => (
  <div
    className={
      "py-13 pr-8 " + (index === 0 ? "" : "border-l border-ink/15 pl-8")
    }
  >
    <div className="flex items-start justify-between">
      <Icon size={34} strokeWidth={1.5} className="text-steel" />
      <span className="font-heading text-[11px] font-semibold tracking-[0.16em] text-ink/40">
        {num}
      </span>
    </div>
    <h3 className="mt-8 mb-3 text-[27px] uppercase tracking-[-0.01em]">{title}</h3>
    <p className="max-w-[30ch] text-sm leading-relaxed text-ink/65">{description}</p>
  </div>
);

export default SingleCard;
