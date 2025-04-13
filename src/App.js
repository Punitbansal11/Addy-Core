import '@fontsource/patrick-hand';
import './assets/fonts/fonts.css';

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

// Pages
import Home from "./pages/HomePage";
import Calculator from "./pages/Calculator"; // ✅ Updated path
import Workouts from "./pages/Workouts";
import DietPlan from "./pages/DietPlan";
import Agreement from "./pages/Agreement";
import AboutPunit from "./pages/AboutPunit";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/about-punit" element={<AboutPunit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
