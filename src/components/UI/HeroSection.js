import React from "react";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const HeroSection = (props) => {
  return (
    <div
      style={{ height: "75vh" }}
      className="relative flex items-center justify-center w-full text-white bg-center bg-cover opacity-90 bg-hero-image"
    >
      <div className="flex flex-col mx-4 text-center">
        <h1 className="text-5xl shadow-inner">{props.titleTop}</h1>
        <h1 className="text-5xl">{props.titleBottom}</h1>
        <p className="mt-4 text-lg ">{props.descriptionTop}</p>
        <p className="text-lg">{props.descriptionBottom}</p>
        <div className="flex justify-center mt-4">
          <a href="https://github.com/mamooji" target="_blank">
            <TiSocialGithubCircular
              size={50}
              className="mx-4 transition-all duration-500 ease-in-out rounded-full hover:bg-purple-300"
            />
          </a>

          <a href="https://www.linkedin.com/in/mamooji/" target="_blank">
            <TiSocialLinkedinCircular
              size={50}
              className="mx-4 transition-all duration-500 ease-in-out rounded-full hover:bg-purple-300"
            />
          </a>
        </div>
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
