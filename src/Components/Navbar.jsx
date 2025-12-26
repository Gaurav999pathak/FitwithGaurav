import React from "react";
import { logo } from "../assets/Images";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-emerald-900 to-black backdrop-blur-md shadow-lg">
      <div className="max-w-7xl h-20 mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-32 md:w-36 object-contain" />
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          {[
            { name: "Home", path: "/" },
            { name: "Muscle Gain", path: "/musculegain" },
            { name: "Fat Loss", path: "/fatloss" },
            { name: "Functional", path: "/functional" },
            { name: "Yoga", path: "/yoga" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "text-gray-200 hover:text-emerald-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-lg text-gray-300">
          <a
            href="https://instagram.com/gauravwhereareyou"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/gaurav999pathak/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/gaurav999raj"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://github.com/Gaurav999pathak"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
