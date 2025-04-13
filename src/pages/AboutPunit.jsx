import './AboutPunit.css'; // If the CSS file is in the same folder as AboutPunit.jsx
import React from 'react';
import PunitImage from '../assets/images/punit-formal.png'; // Corrected image path

function AboutPunit() {
  return (
    <div className="about-punit-container">
      <div className="about-header">
        <div className="profile-image-container">
          <img
            src={PunitImage}
            alt="Punit"
            className="profile-image"
          />
        </div>
        <div className="developer-info">
          <h1 className="developer-title">Developed by Punit</h1>
          <p className="developer-description">
            A passionate developer, constantly learning and improving skills in tech, design, and fitness to create meaningful projects.
          </p>
        </div>
      </div>
      
      <div className="about-content">
        <p>
          As the creator of ADDY CORE, I am continuously motivated by the process of building something impactful, be it in the realm of fitness, design, or technology. The journey of creating something valuable is never linear, but every step taken brings a sense of fulfillment.
        </p>
        <p>
          My passion for web development and UI/UX design drives me to learn new technologies, solve problems, and create projects that improve people's lives. As a firm believer in lifelong learning, I strive to constantly push my limits and bring fresh ideas to life.
        </p>
        <p>
          The ADDY CORE project is a prime example of this belief. It’s more than just a fitness and nutrition site—it’s a reflection of my commitment to creating user-friendly, impactful experiences, and my deep understanding of the needs of users looking to lead healthier lives.
        </p>
      </div>

      {/* Aditi's Journey Section */}
      <div className="aditi-journey">
        <h2 className="aditi-journey-title">Aditi’s Journey – Strength, Resilience, and Transformation</h2>
        <p>
          Aditi is not just a name; it’s a symbol of transformation, strength, and unwavering dedication. A passionate model and fitness enthusiast, Aditi’s journey is a powerful reminder that with the right mindset, commitment, and discipline, anything is possible.
        </p>
        <p>
          After moving to the UK to study Interior Architecture and Design, Aditi embarked on a fitness journey that quickly became more than just about physical change—it became a pursuit of self-discovery, growth, and resilience. What began as a dream to sculpt her body soon transformed into a mission to empower herself both inside and out.
        </p>
        <p>
          Over the last several months, Aditi has worked tirelessly to reduce body fat, build strength, and develop a physique that mirrors her inner strength and confidence. Now, with her eyes set on a 45-day challenge, Aditi aims to take her body to the next level, focusing on improving posture, toning, and sculpting her abs.
        </p>
        <p>
          But Aditi’s story isn’t just about fitness—it’s a testament to perseverance, dedication, and the power of consistency. It’s about turning obstacles into opportunities, embracing challenges, and continually striving to be the best version of yourself.
        </p>
        <p>
          Aditi is now in the midst of her most exciting phase yet—the 45-day challenge that will shape the next chapter of her fitness transformation. Each day is an opportunity to push further, improve, and break new limits. With an unshakable dedication, she is set to achieve her fitness goals.
        </p>
      </div>
    </div>
  );
}

export default AboutPunit;
