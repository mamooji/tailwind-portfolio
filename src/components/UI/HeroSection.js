import React from "react";

const HeroSection = (props) => {
  return (
    <div
      style={{ height: "75vh" }}
      className=" flex items-center opacity-90 justify-center bg-hero-image w-full relative bg-center bg-cover text-white"
    >
      <div className="flex flex-col text-center  mx-4 transform transition duration-500 ease-in-out hover:scale-110 ">
        <h1 className=" text-5xl shadow-inner lg:text-7xl xl:text-9xl ">
          {props.titleTop}
        </h1>
        <h1 className=" text-5xl lg:text-7xl xl:text-9xl">
          {props.titleBottom}
        </h1>
        <p className="text-lg mt-4 lg:text-2xl xl:text-4xl">
          {props.descriptionTop}
        </p>
        <p className=" text-lg lg:text-2xl xl:text-4xl">
          {props.descriptionBottom}
        </p>
      </div>
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 200"
        x="0"
        y="0"
      >
        <polygon
          className="fill-current"
          points="2560 0 2560 200 0 200 0 0 1280 200 "
        ></polygon>
      </svg>
    </div>
  );
};

export default HeroSection;
