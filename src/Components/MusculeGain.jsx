import { useState } from "react";
import {
  FaFire,
  FaBed,
  FaDumbbell,
  FaArrowDown,
  FaCalculator,
} from "react-icons/fa";
import { GiBiceps, GiMeat, GiSlicedBread, GiAvocado } from "react-icons/gi";

const MuscleGain = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("beginner");
  const [result, setResult] = useState(null);

  const calculateMuscleGain = () => {
    if (!height || !weight || !age) return;

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const activity =
      level === "beginner" ? 1.4 : level === "intermediate" ? 1.6 : 1.8;

    const calories = Math.round(bmr * activity + 300);
    const protein = Math.round(weight * 2);
    const fat = Math.round(weight * 0.8);
    const carbs = Math.round((calories - (protein * 4 + fat * 9)) / 4);

    setResult({ calories, protein, fat, carbs });
  };

  const inputClass =
    "w-full bg-[#1a1a1a] border border-gray-700 px-5 py-4 rounded-xl text-white outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-lg";

  const labelClass =
    "text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 block ml-1";

  return (
    <div className=" justify-center items-center flex mt-3">
      <div className="bg-[#050505] text-white flex flex-col items-center font-sans">
        {/* CALCULATOR */}
        <div className="w-full max-w-xl bg-[#111] rounded-[2rem] shadow-[0_10px_60px_-10px_rgba(34,197,94,0.15)] border border-gray-800 md:p-12 relative overflow-hidden py-4 px-4">
          {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-green-500 blur-[50px] rounded-full"></div> */}

          <div className="text-center mb-10 px-4">
            <h1 className="text-4xl font-black flex items-center justify-center gap-3 mb-3">
              Muscle Calc <GiBiceps className="text-green-500" />
            </h1>
            <p className="text-gray-400 text-base font-medium">
              Apni body metrics daalein aur plan paayein.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Height (cm)</label>
                <input
                  type="number"
                  className={inputClass}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Weight (kg)</label>
                <input
                  type="number"
                  className={inputClass}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Age (Years)</label>
              <input
                type="number"
                className={inputClass}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className={labelClass}>Activity Level</label>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none cursor-pointer`}
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="beginner">Beginner (0–6 Months)</option>
                  <option value="intermediate">Intermediate (6+ Months)</option>
                  <option value="advanced">Advanced (2+ Years)</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-green-500">
                  <FaArrowDown />
                </div>
              </div>
            </div>

            <button
              onClick={calculateMuscleGain}
              className="w-full mt-4 bg-green-500 hover:bg-green-400 text-black font-extrabold py-5 rounded-xl text-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Calculate Macros <FaCalculator />
            </button>
          </div>
        </div>

        <div className="h-12"></div>

        <div className="w-full max-w-xl">
          {result ? (
            <div className="bg-[#111] border border-gray-800 rounded-[2rem] p-10 shadow-2xl">
              <div className="text-center mb-10 border-b border-gray-800 pb-8">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
                  Daily Target
                </p>
                <p className="text-6xl font-black">
                  {result.calories}{" "}
                  <span className="text-green-500 text-3xl font-bold">
                    kcal
                  </span>
                </p>
              </div>

              {/* 🔥 MOTIVATIONAL LINES (4–5) */}
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-3">
                  <FaFire className="text-green-500 mt-1" />
                  <span>
                    Calories are fuel — muscles don’t grow on empty tanks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaDumbbell className="text-green-500 mt-1" />
                  <span>Consistency beats intensity, day after day</span>
                </li>
                <li className="flex items-start gap-3">
                  <GiBiceps className="text-green-500 mt-1" />
                  <span>Train hard, eat smart, recover harder</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaBed className="text-green-500 mt-1" />
                  <span>Growth happens when you rest, not when you lift</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaFire className="text-green-500 mt-1" />
                  <span>Small surplus today = stronger body tomorrow</span>
                </li>
              </ul>

              <div className="space-y-4">
                <div className="bg-[#1a1a1a] p-5 rounded-2xl flex justify-between border-l-[6px] border-blue-500">
                  <span className="font-bold">Protein</span>
                  <span className="text-2xl font-black">{result.protein}g</span>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-2xl flex justify-between border-l-[6px] border-orange-500">
                  <span className="font-bold">Carbs</span>
                  <span className="text-2xl font-black">{result.carbs}g</span>
                </div>
                <div className="bg-[#1a1a1a] p-5 rounded-2xl flex justify-between border-l-[6px] border-yellow-500">
                  <span className="font-bold">Fats</span>
                  <span className="text-2xl font-black">{result.fat}g</span>
                </div>
              </div>

              <button
                onClick={() => setResult(null)}
                className="w-full mt-8 py-4 bg-gray-800 hover:bg-gray-700 font-bold rounded-xl"
              >
                Recalculate
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MuscleGain;
