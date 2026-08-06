import React from "react";

const SingleStack = ({ logo, stack, description, num }) => (
  <div className={"pt-12 pr-8 " + (num === 0 ? "" : "border-l border-paper/20 pl-8")}>
    {/* Paper plate: the logos keep their own colour, and Node's dark green still reads
        at full contrast against the steel-900 ground. */}
    <span className="inline-flex h-[56px] w-[56px] items-center justify-center bg-paper p-2.5">
      <img src={logo} alt="" className="h-full w-full object-contain" />
    </span>
    <h3 className="mt-6 mb-3 text-[25px] uppercase">{stack}</h3>
    <p className="max-w-[30ch] text-sm leading-relaxed text-paper/70">{description}</p>
  </div>
);

export default SingleStack;
