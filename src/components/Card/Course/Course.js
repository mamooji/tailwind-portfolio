import React from "react";
const Course = (props) => {
  return (
    <div className="mx-4 my-8 overflow-hidden bg-white rounded-lg shadow-lg ">
      <div className="flex items-center justify-between px-6 py-4 space-x-4">
        <div className="flex space-x-8">
          {props.icon}
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-700 md:text-base ">
              {props.title}
            </p>
            <p className="text-xs text-gray-500 md:text-base ">
              <span className={`text-transparent bg-clip-text ${props.color}`}>
                {props.instructor}
              </span>
              {props.instructorTitle}
            </p>
          </div>
        </div>

        {props.complete ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 pl-2 "
            viewBox="0 0 456.556 456.556"
          >
            <path d="M228.278 456.556C102.403 456.556 0 354.153 0 228.278S102.403 0 228.278 0c42.641 0 84.233 11.834 120.287 34.228 6.301 3.91 8.232 12.19 4.322 18.492-3.917 6.301-12.197 8.246-18.492 4.322-31.794-19.751-68.49-30.185-106.117-30.185-111.065 0-201.422 90.36-201.422 201.422S117.213 429.7 228.278 429.7c111.062 0 201.422-90.36 201.422-201.422 0-22.324-3.623-44.243-10.77-65.147-2.399-7.015 1.35-14.652 8.365-17.051 7.029-2.385 14.652 1.35 17.051 8.365 8.099 23.709 12.211 48.551 12.211 73.834-.001 125.874-102.404 228.277-228.279 228.277z" />
            <path d="M228.278 305.727c-3.406 0-6.7-1.294-9.193-3.644L111.66 201.17c-5.406-5.077-5.672-13.575-.594-18.981 5.078-5.399 13.575-5.679 18.981-.587l97.092 91.206L403.564 63.371c4.77-5.672 13.246-6.399 18.918-1.616 5.672 4.777 6.399 13.246 1.616 18.918L238.545 300.951a13.434 13.434 0 01-9.484 4.756c-.258.013-.524.02-.783.02z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 h-8 pl-2"
          >
            <path d="M256 0C115.03 0 0 115.05 0 256c0 140.97 115.05 256 256 256 140.97 0 256-115.05 256-256C512 115.03 396.95 0 256 0zm0 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Course;
