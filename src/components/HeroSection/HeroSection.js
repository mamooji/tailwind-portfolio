import React from "react";
// import Hero from "../../Assets/Images/heroImage.webp";
const HeroSection = (props) => {
  return (
    <div
      style={{ height: "75vh" }}
      className="relative flex items-center justify-center w-full text-white bg-center bg-cover opacity-90 bg-hero "
    >
      {/* <img src={Hero} alt="avatar" /> */}
      <div className="flex flex-col  mx-4 text-center">
        <h1 className="text-5xl shadow-inner">{props.titleTop}</h1>
        <h1 className="text-5xl">{props.titleBottom}</h1>
        <p className="mt-4 text-lg ">{props.descriptionTop}</p>
        <p className="text-lg">{props.descriptionBottom}</p>
        <div className="flex justify-center mt-4 space-x-4 ">
          <a
            href="https://www.github.com/mamooji/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-8 h-8 transition-all duration-500 ease-in-out rounded-full fill-current hover:bg-purple-300 "
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
            </svg>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mamooji/"
          >
            <svg
              className="w-8 h-8 transition-all duration-500 ease-in-out rounded-full fill-current hover:bg-purple-300 "
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
            </svg>
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
