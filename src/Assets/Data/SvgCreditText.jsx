import React from "react";
import { GithubMark, LinkedinMark } from "../../components/UI/SocialLinks/SocialLinks";

export const SvgCreditText = [
  {
    num: "01",
    icon: <GithubMark className="h-[26px] w-[26px] text-steel" />,
    credit: (
      <>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </>
    ),
  },
  {
    num: "02",
    icon: <LinkedinMark className="h-[26px] w-[26px] text-steel" />,
    credit: (
      <>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </>
    ),
  },
];
