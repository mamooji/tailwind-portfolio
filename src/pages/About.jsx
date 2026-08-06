import React from "react";
import ProfileCard from "../components/Card/ProfileCard/ProfileCard";
import ProfileContent from "../components/Card/ProfileContent/ProfileContent";
import Courses from "../components/Card/Courses/Courses";
import PageHeader from "../components/UI/PageHeader/PageHeader";

const About = () => (
  <>
    <PageHeader
      kicker="02 — About"
      title={
        <>
          A Little
          <br />
          About Me
        </>
      }
      meta={
        <p className="max-w-[40ch] text-[15px] leading-relaxed text-ink/65">
          Full-stack developer with a love for travel and new experiences.
        </p>
      }
    />
    <section className="border-t border-ink/15">
      <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-8 py-12 lg:grid-cols-[360px_1fr] lg:gap-[49px]">
        <ProfileCard />
        <ProfileContent />
      </div>
    </section>
    <Courses />
  </>
);

export default About;
