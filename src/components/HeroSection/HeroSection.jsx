import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import HeroImage from "../../Assets/Images/heroImage.webp";
import Blueprint from "../UI/Blueprint/Blueprint";
import Kicker from "../UI/Kicker/Kicker";
import SocialLinks from "../UI/SocialLinks/SocialLinks";

const HeroSection = (props) => (
  <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-8 pt-16 pb-13 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[49px]">
    <div>
      <Kicker>01 — Profile</Kicker>

      <h1 className="mt-6 text-[clamp(56px,7.2vw,104px)] leading-[0.9] tracking-[-0.025em] uppercase">
        {props.titleTop}
        <br />
        {props.titleBottom}
      </h1>

      <div className="mt-8 flex flex-col gap-2 border-t border-ink/15 pt-6 sm:flex-row sm:gap-6">
        <p className="max-w-[34ch] text-[17px] leading-relaxed">{props.descriptionTop}</p>
        <p className="max-w-[34ch] text-[17px] leading-relaxed text-ink/60">
          {props.descriptionBottom}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Blueprint as={Link} to="/projects" className="btn btn-primary px-6 py-3">
          View Projects
          <ArrowRight size={15} strokeWidth={1.5} />
        </Blueprint>
        <Link to="/about" className="btn btn-secondary px-6 py-3">
          About Me
        </Link>
        <span className="mx-2 h-6 w-px bg-ink/15" />
        <SocialLinks size="h-[17px] w-[17px]" />
      </div>
    </div>

    <figure className="m-0">
      <Blueprint className="duotone h-[460px]">
        <img src={HeroImage} alt="Workstation" className="h-full w-full object-cover" />
      </Blueprint>
      <figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.16em] text-ink/50">
        <span>Fig. 01 — Workstation</span>
        <span>Ontario, CA</span>
      </figcaption>
    </figure>
  </section>
);

export default HeroSection;
