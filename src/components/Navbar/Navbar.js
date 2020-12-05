import React, { useState } from "react";
import Logo from "../../Assets/Images/logo.png";
import { MenuItems } from "../../Assets/Data/MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav
      className="z-10 sticky top-0 w-full  bg-gradient-to-r from-purple-400 to-red-500 text-white shadow-lg 
      sm:flex sm:justify-between sm:pl-4 sm:pr-5 sm:py-2.5"
    >
      <div className=" flex items-center justify-between pl-4 pr-2 py-2 sm:p-0 ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
          <p>Muhammad Mamooji</p>
        </div>
        <div className="sm:hidden">
          <button
            className="block px-4 cursor-pointer rounded transition-all duration-500 ease-in-out focus:outline-none hover:bg-purple-300 "
            onClick={() => setNavOpen(!navOpen)}
          >
            <FontAwesomeIcon
              icon={!navOpen ? faBars : faTimes}
              className="h-8"
            />
          </button>
        </div>
      </div>
      <div
        className={` ${
          navOpen ? "block" : "hidden"
        } transform transition duration-500 ease-in-out px-4 pt-2 pb-4 sm:flex sm:p-0`}
      >
        {MenuItems.map((item, index) => {
          return (
            <a
              key={index}
              className={`${
                index === 0 ? "mt-0" : "mt-2"
              } block font-medium rounded px-2 py-1 transition-all duration-500 ease-in-out hover:bg-purple-300 sm:font-normal sm:mt-0 sm:ml-2 `}
              href={item.url}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
