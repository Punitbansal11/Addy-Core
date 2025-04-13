import React, { useState, useEffect } from 'react';
import AditiImage from '../assets/images/aditi-about.png';

function HomePage() {
  const [message, setMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Hook to detect dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Initial check for system preference
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes in theme preference
    const themeChangeHandler = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', themeChangeHandler);

    return () => {
      darkModeMediaQuery.removeEventListener('change', themeChangeHandler);
    };
  }, []);

  const handleClick = () => {
    setMessage("You’re doing great, Aditi! Keep going strong with your 45-day target!");
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: isDarkMode ? 'var(--dark-background)' : 'var(--light-background)',
        color: isDarkMode ? 'var(--light-text)' : 'var(--dark-text)',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <h1
        style={{
          fontFamily: 'Patrick Hand',
          fontSize: '3rem',
          marginBottom: '30px',
          color: isDarkMode ? 'var(--light-text)' : 'var(--dark-text)',
        }}
      >
        Welcome to Addy’s Fitness!
      </h1>

      <div
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: isDarkMode ? 'var(--card-dark)' : 'var(--card-light)',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          zIndex: '1', // Ensures the content is above any design elements
        }}
      >
        <img
          src={AditiImage}
          alt="Aditi"
          style={{
            width: '300px',
            borderRadius: '10px',
            display: 'block',
            margin: '30px auto',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        />

        <div style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '30px' }}>
          <h2 style={{ color: isDarkMode ? 'var(--light-text)' : 'var(--dark-text)' }}>
            Aditi's Journey – From Passion to Progress
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.5',
              fontWeight: '500',
              color: isDarkMode ? 'var(--light-text)' : 'var(--dark-text)',
            }}
          >
            <strong>🏋️‍♀️ A Passion for Fitness & Modeling</strong>
            <br />
            From a young age, I dreamt of becoming a model, but it wasn't until recently that I truly committed to fitness. After moving to the UK to study Interior Architecture and Design, I began my fitness journey in the gym. Over the past 4–5 months, I've worked hard to reduce body fat and improve my physique.
          </p>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.5',
              fontWeight: '500',
              color: isDarkMode ? 'var(--light-text)' : 'var(--dark-text)',
            }}
          >
            <strong>💪 The 45-Day Challenge</strong>
            <br />
            I'm now focusing on a 45-day challenge to tone my body, improve my posture, and develop abs. With the right diet and workout plan, I'm determined to stay consistent and push myself to the next level. This is just the beginning of an exciting transformation!
          </p>
        </div>

        <button
          onClick={handleClick}
          style={{
            backgroundColor: '#FF6347',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '15px 30px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Start Your Journey
        </button>

        <div style={{ marginTop: '20px', fontSize: '1.2rem', color: isDarkMode ? 'var(--light-text)' : 'var(--dark-text)' }}>
          {message && <p>{message}</p>}
        </div>
      </div>

      {/* Subtle background design on the sides */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '-1',
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8))'
            : 'radial-gradient(circle, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.8))',
          opacity: '0.3',
        }}
      />
    </div>
  );
}

export default HomePage;
