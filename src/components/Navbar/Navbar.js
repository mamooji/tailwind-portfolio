import React, { useState, use } from "react";
import Logo from "../../images/logo.png";
import { MenuItems } from "../Navbar/MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faAddressCard,
  faFile,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-purple-400 to-red-500 text-white sm:flex sm:justify-between ">
      <div className=" flex items-center justify-between pl-4 pr-2 py-2  ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8" />
          <p>Muhammad Mamooji</p>
        </div>
        <div className="sm:hidden">
          <button
            className="block px-4 cursor-pointer rounded focus:outline-none hover:bg-purple-300 "
            onClick={() => setNavOpen(!navOpen)}
          >
            <FontAwesomeIcon
              icon={!navOpen ? faBars : faTimes}
              className="h-8"
            />
          </button>
        </div>
      </div>
      <div className={` ${navOpen ? "block " : "hidden"} px-4 pb-2  sm:block`}>
        <ul className="block sm:block ">
          {MenuItems.map((item, index) => {
            return (
              <a
                key={index}
                className=" block font-medium ho sm:font-normal"
                href={item.url}
              >
                {item.title}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
