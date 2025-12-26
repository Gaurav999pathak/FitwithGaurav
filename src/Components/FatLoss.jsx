import { useState } from "react";
import {
  FaFire,
  FaRunning,
  FaTint,
  FaArrowDown,
  FaCalculator,
  FaWeight,
  FaBed,
  FaDumbbell,
} from "react-icons/fa";
import { GiMeat, GiCheckMark, GiSlicedBread, GiAvocado } from "react-icons/gi";
import { bmiCalory, getBMICategory, getFatLossCalories } from "../utils/bmi";

const FatLoss = () => {
  const [data, setData] = useState({
    height: "",
    weight: "",
    age: "",
    workoutLevel: "beginner",
  });
  const [res, setRes] = useState(null);

  const calculate = () => {
    if (!data.height || !data.weight || !data.age) return;

    const { bmi, calories } = bmiCalory(
      data.height,
      data.weight,
      data.age,
      data.workoutLevel
    );

    const fatLossCalories = getFatLossCalories(calories);

    // macros for fat loss
    const protein = Math.round(data.weight * 2);
    const fat = Math.round(data.weight * 0.7);
    const carbs = Math.round((fatLossCalories - (protein * 4 + fat * 9)) / 4);

    setRes({
      bmi,
      bmiCategory: getBMICategory(bmi),
      maintenance: calories,
      fatLoss: fatLossCalories,
      protein,
      carbs,
      fat,
    });
  };

  const inputClass =
    "w-full bg-[#1a1a1a] border border-gray-700 px-5 py-4 rounded-xl text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-lg";

  const labelClass =
    "text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 block ml-1";

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-4 mt-3 px-4 font-sans">
      {/* CALCULATOR */}
      <div className="w-full max-w-xl bg-[#111] rounded-[2rem] shadow-[0_10px_60px_-10px_rgba(220,38,38,0.15)] border border-gray-800 p-4 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-red-600 blur-[50px] rounded-full"></div>

        <div className="text-center mb-4">
          <h1 className="text-4xl font-black flex items-center justify-center gap-3 mb-3">
            Fat Loss Calc <FaFire className="text-red-500" />
          </h1>
          <p className="text-gray-400 text-base font-medium">
            Calories calculate karo aur fat burn shuru karo
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>Height (cm)</label>
              <input
                type="number"
                className={inputClass}
                value={data.height}
                onChange={(e) => setData({ ...data, height: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>Weight (kg)</label>
              <input
                type="number"
                className={inputClass}
                value={data.weight}
                onChange={(e) => setData({ ...data, weight: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Age (Years)</label>
            <input
              type="number"
              className={inputClass}
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
            />
          </div>

          <div className="relative">
            <label className={labelClass}>Activity Level</label>
            <div className="relative">
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                value={data.workoutLevel}
                onChange={(e) =>
                  setData({ ...data, workoutLevel: e.target.value })
                }
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advance">Advanced</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-red-500">
                <FaArrowDown />
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-extrabold py-5 rounded-xl text-xl shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            Calculate Fat Loss <FaCalculator />
          </button>
        </div>
      </div>

      <div className="h-12"></div>

      {/* RESULT */}
      <div className="w-full max-w-xl">
        {res ? (
          <div className="bg-[#111] border border-gray-800 rounded-[2rem] p-10 shadow-2xl">
            <div className="text-center mb-10 border-b border-gray-800 pb-8">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">
                Daily Fat Loss Calories
              </p>
              <p className="text-6xl font-black">
                {res.fatLoss}{" "}
                <span className="text-red-500 text-3xl font-bold">kcal</span>
              </p>
            </div>

            {/* MOTIVATION */}
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex gap-3">
                <FaFire className="text-red-500 mt-1" />
                <span>Calorie deficit se hi fat burn hota hai</span>
              </li>
              <li className="flex gap-3">
                <GiMeat className="text-blue-500 mt-1" />
                <span>High protein muscle loss se bachata hai</span>
              </li>
              <li className="flex gap-3">
                <FaRunning className="text-orange-500 mt-1" />
                <span>Daily movement fat loss fast karta hai</span>
              </li>
              <li className="flex gap-3">
                <FaBed className="text-purple-500 mt-1" />
                <span>Proper sleep se fat loss hormone balance hota hai</span>
              </li>
              <li className="flex gap-3">
                <GiCheckMark className="text-green-500 mt-1" />
                <span>Consistency hi real secret hai</span>
              </li>
            </ul>

            {/* MACROS */}
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] p-5 rounded-2xl flex justify-between border-l-[6px] border-blue-500">
                <span className="font-bold">Protein</span>
                <span className="text-2xl font-black">{res.protein}g</span>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-2xl flex justify-between border-l-[6px] border-orange-500">
                <span className="font-bold">Carbs</span>
                <span className="text-2xl font-black">{res.carbs}g</span>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-2xl flex justify-between border-l-[6px] border-yellow-500">
                <span className="font-bold">Fats</span>
                <span className="text-2xl font-black">{res.fat}g</span>
              </div>
            </div>

            <button
              onClick={() => setRes(null)}
              className="w-full mt-8 py-4 bg-gray-800 hover:bg-gray-700 font-bold rounded-xl"
            >
              Recalculate
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FatLoss;
