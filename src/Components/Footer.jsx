import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-[#050505] to-black text-gray-300 mt-20">
      {/* Top Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-3">
        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-white">
            Fit<span className="text-emerald-400">With</span>Gaurav
          </h2>

          <p className="text-sm leading-relaxed text-gray-400">
            FitWithGaurav ek science-based fitness platform hai jahan fat loss,
            muscle gain, functional training aur yoga ko practical tareeke se
            sikhaya jata hai.
          </p>

          <p className="text-xs text-gray-500">
            Train smart. Stay consistent. Live strong.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>

          <p className="text-sm text-gray-400 mb-4">
            Daily workouts, tips aur motivation ke liye follow karein.
          </p>

          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#111] hover:bg-emerald-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#111] hover:bg-blue-500 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#111] hover:bg-sky-400 hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-[#111] hover:bg-white hover:text-black transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-6">
        <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
          © {new Date().getFullYear()} FitWithGaurav • Built with{" "}
          <FaHeart className="text-red-500" /> for fitness warriors
        </p>
      </div>
    </footer>
  );
};

export default Footer;
