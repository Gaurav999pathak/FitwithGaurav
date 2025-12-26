import React from "react";
import { background } from "../assets/Images";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative w-screen h-[calc(100%-5rem)] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-28">
        <div className="max-w-6xl mx-auto px-6 text-white">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl">
            Build Strength.
            <br />
            <span className="text-emerald-400">Burn Fat. Stay Consistent.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-gray-300 text-sm md:text-base leading-relaxed">
            Fitness sirf body banane ke liye nahi hoti. Ye discipline,
            confidence aur ek strong lifestyle banati hai. Muscle gain, fat
            loss, yoga aur functional training — sab kuch ek jagah.
          </p>

          {/* Buttons Wrapper */}
          <div className="mt-12 flex flex-wrap gap-6">
            {/* Muscle Gain Button */}
            <div className="rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
              <Link
                to="/musclegain"
                className="block px-10 py-4 font-semibold text-black"
              >
                Start Muscle Gain
              </Link>
            </div>

            {/* Fat Loss Button */}
            <div className="rounded-xl border border-white/40 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              <Link
                to="/fatloss"
                className="block px-10 py-4 font-medium text-white hover:text-black"
              >
                Fat Loss Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
