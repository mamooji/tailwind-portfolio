import React from "react";
import Kicker from "../Kicker/Kicker";

const PageHeader = ({ kicker, title, meta }) => (
  <div className="mx-auto max-w-[1280px] px-8 pt-13 pb-8">
    <Kicker>{kicker}</Kicker>
    <div className="mt-6 flex items-end justify-between gap-8">
      <h1 className="text-[clamp(44px,5.4vw,76px)] leading-[0.92] tracking-[-0.025em] uppercase">
        {title}
      </h1>
      {meta}
    </div>
  </div>
);

export default PageHeader;
