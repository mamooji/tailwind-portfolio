import React from "react";
import Blueprint from "../../UI/Blueprint/Blueprint";

const CreditCard = ({ num, icon, credit }) => (
  <Blueprint className="flex flex-col gap-6 p-8">
    <div className="flex items-center justify-between">
      {icon}
      <span className="font-heading text-[11px] font-semibold tracking-[0.16em] text-ink/40">
        {num}
      </span>
    </div>
    <p className="text-[15px] leading-relaxed">{credit}</p>
  </Blueprint>
);

export default CreditCard;
