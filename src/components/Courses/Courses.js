import React from "react";
import { CourseText } from "../../Assets/Data/CourseText";
import Course from "../Card/Course/Course";

const Courses = () => {
  return (
    <section className="flex flex-col justify-around max-w-screen-lg py-8 mx-auto">
      <h2 className="text-xl font-semibold text-center text-gray-800 md:text-2xl">
        Here are some of the courses I am taking!
      </h2>
      {CourseText.map((course, index) => {
        return (
          <Course
            key={index}
            title={course.title}
            icon={course.icon}
            color={course.class}
            instructorTitle={course.instructorTitle}
            instructor={course.instructor}
            complete={course.complete}
          />
        );
      })}
    </section>
  );
};

export default Courses;
