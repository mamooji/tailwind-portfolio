import React from "react";
import { StackText } from "../../Assets/Data/StackText";
import Stack from "./SingleStack";

const Stacks = () => {
  return (
    <section className="px-4 py-12 overflow-x-hidden text-center ">
      <h2 className="mb-2 text-4xl font-semibold leading-tight font-heading">
        Meet the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
          Stack
        </span>
      </h2>
      <p className="max-w-xl mx-auto mb-12 text-gray-500">
        Because everyone has their favourite tools for the job
      </p>
      <div className="flex flex-wrap justify-center max-w-screen-lg mx-auto">
        {StackText.map((stack, index) => {
          return (
            <Stack
              class={stack.class}
              logo={stack.logo}
              stack={stack.stack}
              description={stack.description}
              key={index}
              num={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Stacks;
