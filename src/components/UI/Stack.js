import React from "react";
import { ReactComponent as TailwindLogo } from "../../Assets/tailwindcssLogo.svg";
import { ReactComponent as ReactLogo } from "../../Assets/react.svg";
import { ReactComponent as NodeLogo } from "../../Assets/node-js-logo.svg";

const Stack = () => {
  return (
    <section className="px-4 py-12 overflow-x-hidden text-center">
      <h2 className="mb-2 text-4xl font-semibold leading-tight font-heading">
        Meet the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
          Stack
        </span>
      </h2>
      <p className="max-w-xl mx-auto mb-12 text-gray-400">
        Because everyone has their favourite tools for the job
      </p>
      <div className="flex flex-wrap -mx-8">
        <div className="p-8 md:w-1/3">
          {/* <img className="w-1/3 mx-auto mb-4 rounded-full" src={Logo} alt="" /> */}
          <ReactLogo className="w-16 h-16 mx-auto mb-4" />
          <h3 className="mb-1 text-xl font-semibold font-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              React
            </span>
          </h3>
          {/* <span>Regional Manager</span> */}
          <p className="mt-4 leading-relaxed text-gray-400">
            Facebook is pretty questionable, but dont you ever question my
            religion. more text to see what happend :((((()))))
          </p>
        </div>
        <div className="p-8 md:w-1/3 md:border-l">
          {/* <img className="w-1/3 mx-auto mb-4 rounded-full" src={Logo} alt="" /> */}
          <NodeLogo className="w-16 h-16 mx-auto mb-4" />
          <h3 className="mb-1 text-xl font-semibold font-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gray-400">
              Node.JS
            </span>
          </h3>
          {/* <span>Marketing Director</span> */}
          <p className="mt-4 leading-relaxed text-gray-400">
            The warehouse is not a piece of cake, man. I started there as an
            Assistant and finally got a promotion to the Marketing Director.
          </p>
        </div>
        <div className="p-8 md:w-1/3 md:border-l">
          {/* <img className="w-1/3 mx-auto mb-4 rounded-full" src={Logo} alt="" /> */}
          <TailwindLogo className="w-16 h-16 mx-auto mb-4" />
          <h3 className="mb-1 text-xl font-semibold font-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue-400">
              Tailwind CSS
            </span>
          </h3>
          {/* <span>Customer Service</span> */}
          <p className="mt-4 leading-relaxed text-gray-400">
            I work for Dunder Mifflin for a few years now. I learned a lot. You
            know, one person department is not easy to manage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stack;
