import { ReactComponent as TailwindLogo } from "../../Assets/tailwindcssLogo.svg";
import { ReactComponent as ReactLogo } from "../../Assets/react.svg";
import { ReactComponent as NodeLogo } from "../../Assets/node-js-logo.svg";
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
    class: "bg-gradient-to-r from-green-400 to-gray-400",
  },
  {
    stack: "Tailwind CSS",
    description:
      "Most of my web-development skills have been learned outside of school.",
    logo: <TailwindLogo className="w-16 h-16 mx-auto mb-4" />,
    class: "bg-gradient-to-r from-teal to-tealV2",
  },
];
