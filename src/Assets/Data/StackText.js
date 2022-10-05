import { ReactComponent as TailwindLogo } from "../../Assets/SVG/tailwindcssLogo.svg";
import { ReactComponent as ReactLogo } from "../../Assets/SVG/react.svg";
import { ReactComponent as NodeLogo } from "../../Assets/SVG/node-js-logo.svg";
import React from "react";
export const StackText = [
  {
    stack: "React",
    description:
      "A fast and scalable Javascript framework I enjoy using to build user interfaces.",
    logo: <ReactLogo className="w-16 h-16 mx-auto mb-4" />,
    class: "bg-gradient-to-r from-teal to-blue-400",
  },
  {
    stack: "NodeJs",
    description: "My go-to JavaScript framework for server-side development.",
    logo: <NodeLogo className="w-16 h-16 mx-auto mb-4" />,
    class: "bg-gradient-to-r from-green-400 to-gray-500",
  },
  {
    stack: "Tailwind CSS",
    description:
      "A utility-first CSS framework that I favor using over the standard CSS markup.",
    logo: <TailwindLogo className="w-16 h-16 mx-auto mb-4" />,
    class: "bg-gradient-to-r from-teal to-tealV2",
  },
];
