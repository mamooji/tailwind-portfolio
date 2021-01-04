import { ReactComponent as TailwindLogo } from "../../Assets/SVG/tailwindcssLogo.svg";
import { ReactComponent as ReactLogo } from "../../Assets/SVG/react.svg";
import { ReactComponent as NodeLogo } from "../../Assets/SVG/node-js-logo.svg";
export const StackText = [
  {
    stack: "React",
    description:
      "Most of my web-development skills have been learned outside of school.",
    logo: <ReactLogo className="w-16 h-16 mx-auto mb-4" />,
    class: "bg-gradient-to-r from-teal to-blue-400",
  },
  {
    stack: "NodeJs",
    description:
      "Most of my web-development skills have been learned outside of school.",
    logo: <NodeLogo className="w-16 h-16 mx-auto mb-4" />,
    class: "bg-gradient-to-r from-green-400 to-gray-500",
  },
  {
    stack: "Tailwind CSS",
    description:
      "Most of my web-development skills have been learned outside of school.",
    logo: <TailwindLogo className="w-16 h-16 mx-auto mb-4" />,
    class: "bg-gradient-to-r from-teal to-tealV2",
  },
];
