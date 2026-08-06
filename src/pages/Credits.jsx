import React from "react";
import SvgCredits from "../components/Card/svgCredits/svgCredits";
import PageHeader from "../components/UI/PageHeader/PageHeader";

const Credits = () => (
  <>
    <PageHeader
      kicker="04 — Credits"
      title="Credits"
      meta={
        <p className="max-w-[34ch] text-sm leading-relaxed text-ink/60">
          Attribution for the iconography used throughout this site.
        </p>
      }
    />
    <SvgCredits />
  </>
);

export default Credits;
