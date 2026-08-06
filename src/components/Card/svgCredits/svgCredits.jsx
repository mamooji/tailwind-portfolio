import React from "react";
import CreditCard from "./CreditCard";
import { SvgCreditText } from "../../../Assets/Data/SvgCreditText";

const SvgCredits = () => (
  <section className="border-t border-ink/15">
    <div className="mx-auto max-w-[1280px] px-8 pt-12 pb-16">
      <div className="grid gap-12 md:grid-cols-2">
        {SvgCreditText.map((credit) => (
          <CreditCard key={credit.num} {...credit} />
        ))}
      </div>
    </div>
  </section>
);

export default SvgCredits;
