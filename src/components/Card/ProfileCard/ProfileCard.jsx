import React from "react";
import Selfie from "../../../Assets/Images/selfie.webp";
import Resume from "../../../Assets/resume.pdf";
const ProfileCard = (props) => {
  return (
    <div className="max-w-md mx-4 my-8 overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        className="object-cover object-center w-full h-56"
        src={Selfie}
        alt="avatar"
      />

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Muhammad Mamooji
        </h1>

        <p className="py-2 text-gray-600 ">
          Full-stack developer with a love for travel and new experiences.
        </p>

        <div className="flex items-center mt-3 text-gray-600">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            topill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 11H10V13H14V11Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
            />
          </svg>

          <a
            target="_blank"
            rel=" noopener noreferrer"
            href="https://www.conestogac.on.ca/fulltime/software-engineering-technology"
            className="px-2 text-sm cursor-pointer hover:text-purple-400"
          >
            Conestoga College
          </a>
        </div>

        <div className="flex items-center mt-4 text-gray-600 ">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
            />
          </svg>

          <h1 className="px-2 text-sm">Ontario, Canada</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-600">
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
            />
          </svg>
          <a
            href="mailto:mamoojim@hotmail.com"
            className="px-2 text-sm cursor-pointer hover:text-purple-400"
          >
            mamoojim@hotmail.com
          </a>
        </div>
        <div className="flex items-center mt-4 text-gray-600">
          <svg
            className="w-6 h-6 fill-current"
            height="512"
            viewBox="0 0 496.231 496.231"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M389.145 0h-282c-26.468 0-48 21.533-48 48 0 356.953-.389 335.402.829 339.058a16.094 16.094 0 003.831 6.227c.998 1.002 98.184 98.301 99.598 99.387 6.322 4.869-3.396 3.328 225.742 3.328 26.468 0 48-21.533 48-48V48c0-26.467-21.532-48-48-48zm-232 441.373L113.772 398h43.373zm248 6.627c0 8.822-7.178 16-16 16h-200v-82c0-8.836-7.163-16-16-16h-82V48c0-8.822 7.178-16 16-16h282c8.822 0 16 7.178 16 16zm-51-125c0 8.836-7.163 16-16 16h-181c-8.837 0-16-7.164-16-16s7.163-16 16-16h181c8.837 0 16 7.164 16 16zm0 82c0 8.836-7.163 16-16 16h-103c-8.837 0-16-7.164-16-16s7.163-16 16-16h103c8.837 0 16 7.164 16 16zM247.489 168.077c29.694 0 53.852-24.158 53.852-53.852s-24.157-53.852-53.852-53.852-53.852 24.158-53.852 53.852 24.158 53.852 53.852 53.852zm0-75.704c12.049 0 21.852 9.803 21.852 21.852s-9.803 21.852-21.852 21.852-21.852-9.803-21.852-21.852 9.803-21.852 21.852-21.852zM166.47 246.451v-21.938c0-13.835 8.163-26.42 20.797-32.062l25.376-11.331c4.255-1.9 1.275-1.39 62.806-1.39 4.498 0 4.344.417 31.899 12.72 12.634 5.642 20.797 18.227 20.797 32.062v21.938c0 8.836-7.163 16-16 16s-16-7.164-16-16v-21.938a3.116 3.116 0 00-1.844-2.842l-22.263-9.94h-49.462l-22.263 9.94a3.117 3.117 0 00-1.844 2.842v21.938c0 8.836-7.163 16-16 16s-15.999-7.163-15.999-15.999z" />
          </svg>
          <a
            download
            href={Resume}
            className="px-2 text-sm cursor-pointer hover:text-purple-400"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
