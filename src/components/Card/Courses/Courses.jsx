import React from "react";
import { CourseText } from "../../../Assets/Data/CourseText";
import Course from "./Course";

const Courses = () => (
  <section className="border-t border-ink/15">
    <div className="mx-auto max-w-[1280px] px-8 pt-12 pb-16">
      <div className="mb-8 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end md:gap-8">
        <h2 className="text-[36px] uppercase tracking-[-0.015em]">Coursework</h2>
        <p className="text-sm text-ink/60">Here are some of the courses I am taking!</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table min-w-[720px]">
          <thead>
            <tr>
              <th className="w-11">№</th>
              <th className="w-14" />
              <th>Course</th>
              <th className="w-[300px]">Instructor</th>
              <th className="w-[130px] text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {CourseText.map((course, index) => (
              <Course
                key={course.title}
                num={String(index + 1).padStart(2, "0")}
                {...course}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Courses;
