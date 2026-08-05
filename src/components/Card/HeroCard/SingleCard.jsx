import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SingleCard = (props) => {
  return (
    <div
      className={`${props.color}  p-4 max-w-xs rounded-lg m-4 transform hover:scale-110 duration-500 `}
    >
      <div className="flex items-center justify-center py-12 ">
        <FontAwesomeIcon icon={props.icon} size="5x" />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-bold ">{props.title}</h1>
        <p className="pt-4 pb-2 ">{props.description}</p>
      </div>
    </div>
  );
};

export default SingleCard;
