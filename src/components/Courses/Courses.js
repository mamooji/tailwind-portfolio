import React from "react";
import { CourseText } from "../../Assets/Data/CourseText";
import Course from "../Card/Course/Course";

const Courses = () => {
  return (
    <div>
      <section className="px-4 py-8 ">
        <div className="flex flex-col max-w-3xl mx-auto">
          {/* <h2 className="text-3xl font-semibold text-center text-gray-800"> */}
          <h2 className="px-1 text-xl font-semibold text-center text-gray-800 md:text-2xl">
            Here are some of the courses I have completed and am currently
            taking online, outside of my formal education!
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
        </div>
      </section>
    </div>
  );
};

export default Courses;
