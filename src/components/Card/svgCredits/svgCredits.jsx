import React from "react";
import CreditCard from "./CreditCard";
import { SvgCreditText } from "../../../Assets/Data/SvgCreditText";
const svgCredits = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-screen-xl pb-12 mx-auto">
      {SvgCreditText.map((credit, index) => {
        return <CreditCard icon={credit.icon} credit={credit.credit} />;
      })}
    </div>
  );
};

export default svgCredits;
