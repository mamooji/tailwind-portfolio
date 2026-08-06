import React from "react";

/** One row of the coursework table. */
const Course = ({ num, logo, title, instructor, instructorTitle, complete }) => (
  <tr>
    <td className="font-heading font-semibold text-ink/40">{num}</td>
    <td>
      <img src={logo} alt="" className="h-[26px] w-[26px] object-contain" />
    </td>
    <td className="font-heading text-[17px] font-semibold">{title}</td>
    <td className="text-ink/65">
      {instructor}
      <span className="block text-[11px] tracking-[0.04em] text-ink/45">{instructorTitle}</span>
    </td>
    <td className="text-right">
      <span className={complete ? "tag tag-accent" : "tag tag-outline"}>
        {complete ? "Complete" : "In progress"}
      </span>
    </td>
  </tr>
);

export default Course;
