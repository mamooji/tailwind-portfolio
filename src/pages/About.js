import React from "react";
import ProfileCard from "../components/Card/ProfileCard/ProfileCard";
import ProfileContent from "../components/Card/ProfileContent/ProfileContent";
import Courses from "../components/Courses/Courses";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <ProfileCard />
        <ProfileContent />
      </div>
      <Courses />
    </>
  );
};

export default About;
