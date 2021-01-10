import React from "react";
import ProfileCard from "../components/Card/ProfileCard/ProfileCard";
import ProfileContent from "../components/Card/ProfileContent/ProfileContent";
import Courses from "../components/Courses/Courses";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around max-w-screen-lg mx-auto">
        <ProfileCard />
        <ProfileContent />
      </div>
      <Courses />
    </>
  );
};

export default About;
