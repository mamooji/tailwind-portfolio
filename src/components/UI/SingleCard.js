import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SingleCard = (props) => {
  return (
    <div
      className={` ${props.color} ${
        props.index === 0 ? "-mt-4" : "mt-4"
      }  box-border shadow-md rounded-lg max-w-sm  m-4 
         transform transition duration-500 ease-in-out
       hover:scale-110 lg:max-w-xs ${
         props.index === 1 ? "lg:-mt-4" : "lg:-mt-32 xl:-mt-52"
       }  xl:max-w-sm`}
    >
      <div className=" flex justify-center items-center py-12 ">
        <FontAwesomeIcon icon={props.icon} size="5x" />
      </div>
      <div className="flex flex-col text-center m-4">
        <h1 className=" font-bold text-2xl">{props.title}</h1>
        <p className=" pt-4 pb-2">{props.description}</p>
      </div>
    </div>
  );
};

export default SingleCard;
