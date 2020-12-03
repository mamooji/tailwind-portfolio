import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faAddressCard,
  faFile,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";
const Navbar1 = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    // navBarItems
    <nav className=" flex justify-center items-center text-lg h-28 bg-gradient-to-r from-purple-400 to-red-500 text-white md:relative md:">
      {/* navbarLogo */}
      <h1 className=" flex items-center justify-self-start ml-6 text-3xl lg:whitespace-nowrap">
        <img className="h-14 w-14" src={logo} alt="logo" />
        Muhammad Mamooji
      </h1>
      {/* menuIcon */}
      <div>
        <FontAwesomeIcon
          className=" hidden"
          onClick={() => setNavOpen(!navOpen)}
          icon={!navOpen ? faBars : faTimes}
        />
      </div>
      {/* navMenu */}
      <ul className="">
        {MenuItems.map((item, index) => {
          return (
            <li className="px-4" key={index}>
              {/* item.name */}
              <a
                className="px-4 py-2 cursor-pointer transition duration-500 ease-in-out hover:bg-indigo-500 rounded "
                href={item.ulr}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
