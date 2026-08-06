import React from "react";

/** A numbered section label with a rule running to the edge of the grid. */
const Kicker = ({ children }) => (
  <div className="flex items-center gap-3 font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
    <span>{children}</span>
    <span className="h-px flex-1 bg-ink/15" />
  </div>
);

export default Kicker;
