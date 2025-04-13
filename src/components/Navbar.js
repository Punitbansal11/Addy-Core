import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav style={navStyle}>
      {/* Navigation Links */}
      <ul style={ulStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/calculator" style={linkStyle}>Calculator</Link></li>
        <li><Link to="/workouts" style={linkStyle}>Workouts</Link></li>
        <li><Link to="/diet-plan" style={linkStyle}>Diet Plan</Link></li>
        <li><Link to="/agreement" style={linkStyle}>Agreement</Link></li>
        <li><Link to="/about-punit" style={linkStyle}>About Punit</Link></li>
      </ul>

      {/* 🌗 Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} style={toggleButtonStyle}>
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </nav>
  );
}

const navStyle = {
  background: "#222",
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center", // ✅ Center the nav links
  gap: "30px",
  margin: 0,
  padding: 0,
  flex: 1, // ✅ Let it take full space so it's centered
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

const toggleButtonStyle = {
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  marginLeft: "20px",
  marginRight: "10px",
};

export default Navbar;
