import React from "react";

const CreditCard = (props) => {
  return (
    <div className="max-w-xs mx-4 my-8 duration-500 transform rounded-lg shadow-lg hover:scale-110">
      <div className="flex flex-col items-center p-8 space-y-4">
        <div>{props.icon}</div>
        <p className="text-center">{props.credit}</p>
      </div>
    </div>
  );
};

export default CreditCard;
