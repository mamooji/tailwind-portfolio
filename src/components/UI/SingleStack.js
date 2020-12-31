import React from "react";

const SingleStack = (props) => {
  return (
    <div className="p-8 px-16 md:w-1/3 md:border-l">
      {props.logo}
      <h3 className="mb-1 text-xl font-semibold font-heading">
        <span className={`text-transparent bg-clip-text ${props.class}`}>
          {props.stack}
        </span>
      </h3>
      <p className="mt-4 leading-relaxed text-gray-400">{props.description}</p>
    </div>
  );
};

export default SingleStack;
