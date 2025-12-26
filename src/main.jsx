import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusculeGain from "./Components/MusculeGain.jsx";
import Navbar from "./Components/Navbar.jsx";
import FatLoss from "./Components/FatLoss.jsx";
import Yoga from "./Components/Yoga.jsx";
import Functional from "./Components/Functional.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/musculegain" element={<MusculeGain />} />
      <Route path="/fatloss" element={<FatLoss />} />
      <Route path="/functional" element={<Functional />} />
      <Route path="/yoga" element={<Yoga />} />
    </Routes>
  </BrowserRouter>
);
