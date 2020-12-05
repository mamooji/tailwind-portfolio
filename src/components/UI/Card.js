import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBookOpen,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  return (
    <div className="relative flex flex-col items-center text-white lg:flex-row lg:justify-around mb-16 ">
      <div
        className=" bg-purple-400 shadow-md rounded-lg max-w-sm -mt-4 m-4 
         transform transition duration-500 ease-in-out
       hover:scale-110
      lg:m-0 lg:max-w-xs lg:-mt-32 xl:max-w-sm xl:-mt-60"
      >
        <div className=" flex justify-center items-center py-12 ">
          <FontAwesomeIcon icon={faBookOpen} className="" size="5x" />
        </div>
        <div className="flex flex-col text-center m-4">
          <h1 className=" font-bold text-2xl">Self Taught</h1>
          <p className=" pt-4 pb-2">
            Huge advocate of self learning. Most of my web-development skills
            have been outside of school.
          </p>
        </div>
      </div>

      <div
        className=" bg-pink-400 shadow-md rounded-lg max-w-sm mt-2 m-4 lg:m-0
         transform transition duration-500 ease-in-out
       hover:scale-110
      lg:max-w-xs lg:-mt-4 xl:max-w-sm"
      >
        <div className=" flex justify-center items-center py-12 ">
          <FontAwesomeIcon icon={faGraduationCap} className="" size="5x" />
        </div>
        <div className="flex flex-col text-center m-4">
          <h1 className=" font-bold text-2xl">Graduated!</h1>
          <p className=" pt-4 pb-2">
            Recent graduate of the Software Engineering Technology program at
            Conestoga College.
          </p>
        </div>
      </div>

      <div
        className=" bg-red-500 shadow-md rounded-lg max-w-sm mt-2 m-4 lg:m-0
         transform transition duration-500 ease-in-out
       hover:scale-110
      lg:max-w-xs lg:-mt-32 xl:max-w-sm xl:-mt-60"
      >
        <div className=" flex justify-center items-center py-12 ">
          <FontAwesomeIcon icon={faEye} className="" size="5x" />
        </div>
        <div className="flex flex-col text-center m-4">
          <h1 className="font-bold text-2xl">Eye for Design</h1>
          <p className=" pt-4 pb-2">
            Since a young age, I have always appreciated good design. My work is
            prided on it's UX / UI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
