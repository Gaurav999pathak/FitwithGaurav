export const bmiCalory = (height, weights, ages, workoutLevel) => {
  const heightInMeter = height / 100;
  const weight = Number(weights);
  const age = Number(ages);

  // BMI
  const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(1);

  // BMR
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;

  let multiplier = 1.2;
  if (workoutLevel === "intermediate") multiplier = 1.55;
  if (workoutLevel === "advance") multiplier = 1.75;

  const calories = Math.round(bmr * multiplier);

  return {
    bmi,
    calories,
  };
};

// BMI Category
export const getBMICategory = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 25) return "Normal";
  if (bmi >= 25 && bmi < 30) return "Overweight";
  return "Obese";
};

// Muscle Gain Calories (+300)
export const getMuscleGainCalories = (maintenanceCalories) => {
  return maintenanceCalories + 400;
};

// Fat Loss Calories (-500)
export const getFatLossCalories = (maintenanceCalories) => {
  return maintenanceCalories - 500;
};
