import React from "react";

const HeroSection = (props) => {
  return (
    <div
      style={{ height: "75vh" }}
      className="relative flex items-center justify-center w-full text-white bg-center bg-cover opacity-90 bg-hero-image"
    >
      <div className="flex flex-col mx-4 text-center transition duration-500 ease-in-out transform hover:scale-110">
        <h1 className="text-5xl shadow-inner lg:text-7xl xl:text-8xl">
          {props.titleTop}
        </h1>
        <h1 className="text-5xl lg:text-7xl xl:text-8xl">
          {props.titleBottom}
        </h1>
        <p className="mt-4 text-lg lg:text-2xl xl:text-3xl xl:mt-8">
          {props.descriptionTop}
        </p>
        <p className="text-lg lg:text-2xl xl:text-3xl xl:pb-24">
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